#!/usr/bin/env python3
"""Full OSHA accident × TaskMatch analysis.

Reads raw uncoded_accident_abstracts.csv, properly joins 80-char-wrapped lines,
runs JAAT TaskMatch + task classifier, filters responder tasks, and outputs
a CSV of reliably dangerous O*NET tasks.

Usage:
    python3 run_full_analysis.py --input uncoded_accident_abstracts.csv --output-dir results/
"""

import argparse
import os
import time

import pandas as pd
import nltk
nltk.download('punkt_tab', quiet=True)
from nltk.tokenize import sent_tokenize
from JAAT import JAAT


# ---------------------------------------------------------------------------
# 1. Text rejoining: fix 80-char fixed-width line breaks
# ---------------------------------------------------------------------------

def rejoin_abstract(lines_df):
    """Join fixed-width lines back into a single abstract.

    Lines of 79-80 characters were broken mid-word by the OSHA export.
    If a line is 79-80 chars, concatenate directly to next (no space).
    Otherwise, join with a space.
    """
    lines = lines_df.sort_values('line_nr')['abstract_text'].tolist()
    result = str(lines[0])
    for line in lines[1:]:
        line = str(line)
        if len(result.split('\n')[-1] if '\n' in result else result) == 0:
            result += line
        elif len(lines[lines.index(line) - 1] if line in lines else '') >= 79:
            result += line
        else:
            result += ' ' + line
    return result


def rejoin_abstracts(df):
    """Join all abstracts from raw line-level data."""
    results = []
    for summary_nr, group in df.groupby('summary_nr'):
        lines = group.sort_values('line_nr')['abstract_text'].astype(str).tolist()
        text = lines[0]
        for i in range(1, len(lines)):
            prev_len = len(lines[i - 1])
            if prev_len >= 79:
                text += lines[i]
            else:
                text += ' ' + lines[i]
        results.append({
            'summary_nr': summary_nr,
            'abstract_text': text.lower(),
        })
    return pd.DataFrame(results)


# ---------------------------------------------------------------------------
# 2. Responder task filtering
# ---------------------------------------------------------------------------

RESPONDER_KEYWORDS = [
    'emergency', 'rescue',
    'hospital', 'treat wound', 'transport patient',
    'autopsies',
]


def is_responder_task(description):
    desc_lower = description.lower()
    return any(kw in desc_lower for kw in RESPONDER_KEYWORDS)


# ---------------------------------------------------------------------------
# 3. Main pipeline
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(description='Full OSHA TaskMatch analysis')
    parser.add_argument('--input', required=True,
                        help='Path to uncoded_accident_abstracts.csv')
    parser.add_argument('--output-dir', default='results',
                        help='Directory for output files')
    parser.add_argument('--threshold', type=float, default=0.80,
                        help='TaskMatch similarity threshold (default: 0.80)')
    parser.add_argument('--coded-input', default=None,
                        help='Path to pre-coded CSV (skip TaskMatch, just re-aggregate)')
    args = parser.parse_args()

    os.makedirs(args.output_dir, exist_ok=True)

    # ------------------------------------------------------------------
    # Step 1: Load and rejoin text
    # ------------------------------------------------------------------
    if args.coded_input:
        print(f'Loading pre-coded results from {args.coded_input}...')
        sentences_df = pd.read_csv(args.coded_input)
        print(f'  {len(sentences_df)} sentence rows, '
              f'{sentences_df["summary_nr"].nunique()} investigations')
    else:
        print(f'Loading raw abstracts from {args.input}...')
        raw = pd.read_csv(args.input)
        print(f'  {len(raw)} raw lines, {raw["summary_nr"].nunique()} investigations')

        print('Rejoining fixed-width lines...')
        df = rejoin_abstracts(raw)
        del raw
        print(f'  {len(df)} abstracts rejoined')

        # Save cleaned abstracts
        abstracts_file = os.path.join(args.output_dir, 'abstracts_cleaned.csv')
        df.to_csv(abstracts_file, index=False)
        print(f'  Saved to {abstracts_file}')

        # ------------------------------------------------------------------
        # Step 2: Sentence splitting
        # ------------------------------------------------------------------
        print('Splitting into sentences...')
        df['sentences'] = df['abstract_text'].apply(sent_tokenize)
        sentences_df = df[['summary_nr']].copy()
        sentences_df = df.explode('sentences').reset_index(drop=True)
        sentences_df['sentence_nr'] = (
            sentences_df.groupby('summary_nr').cumcount() + 1
        )
        sentences_df = sentences_df[['summary_nr', 'sentence_nr', 'sentences']].copy()
        print(f'  {len(sentences_df)} sentences '
              f'({len(sentences_df)/len(df):.1f} per narrative)')

        # ------------------------------------------------------------------
        # Step 3: Task classifier (stage 1) — score each sentence
        # ------------------------------------------------------------------
        print('Running task classifier (stage 1)...')
        task_matcher = JAAT.TaskMatch(threshold=args.threshold)
        pipe = task_matcher.pipe

        texts = sentences_df['sentences'].fillna('').tolist()
        t0 = time.time()

        # Score all sentences with the binary task classifier
        classifier_results = pipe(texts, batch_size=pipe._batch_size)
        sentences_df['is_task_label'] = [r['label'] for r in classifier_results]
        sentences_df['is_task_score'] = [r['score'] for r in classifier_results]
        elapsed = time.time() - t0
        n_tasks = (sentences_df['is_task_label'] == 'LABEL_1').sum()
        print(f'  {n_tasks}/{len(sentences_df)} sentences classified as tasks '
              f'({n_tasks/len(sentences_df)*100:.1f}%) in {elapsed:.0f}s')

        # ------------------------------------------------------------------
        # Step 4: TaskMatch (stage 2) — match to O*NET tasks
        # ------------------------------------------------------------------
        print(f'Running TaskMatch (threshold={args.threshold})...')
        t0 = time.time()
        matches = task_matcher.get_tasks_batch(texts)
        elapsed = time.time() - t0
        sentences_df['matched_tasks'] = [str(m) for m in matches]
        sentences_df['n_matches'] = [len(m) for m in matches]
        n_with = (sentences_df['n_matches'] > 0).sum()
        print(f'  {n_with} sentences with matches in {elapsed:.0f}s')

        # Save full coded output
        coded_file = os.path.join(args.output_dir, 'coded_accident_sentences.csv')
        sentences_df.to_csv(coded_file, index=False)
        print(f'  Saved to {coded_file}')

        # For aggregation, need actual lists not strings
        sentences_df['matched_tasks_parsed'] = matches

    # ------------------------------------------------------------------
    # Step 5: Aggregate tasks and filter responders
    # ------------------------------------------------------------------
    print('Aggregating tasks...')

    # Parse matched_tasks if loaded from CSV
    if 'matched_tasks_parsed' not in sentences_df.columns:
        import ast
        sentences_df['matched_tasks_parsed'] = sentences_df['matched_tasks'].apply(
            lambda x: ast.literal_eval(x) if pd.notna(x) and x != '[]' else []
        )

    all_tasks = []
    for task_list in sentences_df['matched_tasks_parsed']:
        if task_list:
            for task in task_list:
                if isinstance(task, (list, tuple)) and len(task) > 1:
                    all_tasks.append((task[0], str(task[1])))

    task_counts = pd.Series(all_tasks).value_counts().reset_index()
    task_counts.columns = ['task', 'count']
    task_counts['task_id'] = task_counts['task'].apply(lambda t: t[0])
    task_counts['description'] = task_counts['task'].apply(lambda t: t[1])
    task_counts['is_responder'] = task_counts['description'].apply(is_responder_task)

    n_investigations = sentences_df['summary_nr'].nunique()
    task_counts['pct_investigations'] = (
        task_counts['count'] / n_investigations * 100
    ).round(2)

    # Worker tasks only
    worker_tasks = task_counts[~task_counts['is_responder']].copy()
    worker_tasks = worker_tasks[['task_id', 'description', 'count',
                                  'pct_investigations']].reset_index(drop=True)

    # Save dangerous tasks
    dangerous_file = os.path.join(args.output_dir, 'dangerous_tasks.csv')
    worker_tasks.to_csv(dangerous_file, index=False)

    # Save responder tasks separately for transparency
    responder_out = task_counts[task_counts['is_responder']].copy()
    responder_out = responder_out[['task_id', 'description', 'count',
                                    'pct_investigations']].reset_index(drop=True)
    responder_file = os.path.join(args.output_dir, 'responder_tasks.csv')
    responder_out.to_csv(responder_file, index=False)

    # ------------------------------------------------------------------
    # Summary
    # ------------------------------------------------------------------
    n_resp = task_counts[task_counts['is_responder']]['count'].sum()
    n_work = task_counts[~task_counts['is_responder']]['count'].sum()

    print(f'\n=== Results ===')
    print(f'Investigations: {n_investigations}')
    print(f'Sentences: {len(sentences_df)}')
    print(f'Total task matches: {len(all_tasks)}')
    print(f'  Responder: {n_resp} ({n_resp/(n_resp+n_work)*100:.1f}%)')
    print(f'  Worker: {n_work} ({n_work/(n_resp+n_work)*100:.1f}%)')
    print(f'Unique worker tasks: {len(worker_tasks)}')
    print(f'\nOutputs:')
    print(f'  {dangerous_file} — worker tasks ranked by frequency')
    print(f'  {responder_file} — filtered responder tasks')
    if not args.coded_input:
        print(f'  {coded_file} — all sentences with task scores and matches')


if __name__ == '__main__':
    main()
