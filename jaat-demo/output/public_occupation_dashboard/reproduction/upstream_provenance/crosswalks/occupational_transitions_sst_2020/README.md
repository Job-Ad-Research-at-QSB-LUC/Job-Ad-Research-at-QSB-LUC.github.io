# Public occupational transition benchmark: verified public source

Downloaded 2026-09-22 from the authors' repository: https://github.com/gschubert/occ-mobility-data . Cite Schubert, Stansbury and Taska, *Employer Concentration and Outside Options*, following the repository's current attribution; the bundled May 2020 documentation uses the earlier title *Monopsony and Outside Options*.

`intake.json` records the immutable repository commit, download URLs, sizes and SHA-256 hashes. The CSV remains compressed. Open it with `zipfile.ZipFile(path).open('occupation_transitions_public_data_set.csv')`, then pass that handle to `pandas.read_csv(..., dtype={'soc1':str,'soc2':str})`. The archive also contains a macOS metadata file, so pandas' automatic ZIP reader is insufficient. No individual records are included.

## Verified file contents

- 277,942 directed origin/destination rows, 731 origins and 819 destinations.
- No duplicate origin/destination pairs and no self-pairs.
- All transition shares are between zero and one. Shares sum to one within origin to floating-point precision (maximum discrepancy below 0.000000061).
- The documentation describes 734 origins and 278,195 nonempty cells. The downloaded file is slightly smaller. Use the observed counts and investigate this discrepancy before treating the published coverage as reproduced.

## Columns and interpretation

- `soc1`, `soc1_name`: origin SOC2010 six-digit occupation and title.
- `soc2`, `soc2_name`: destination SOC2010 six-digit occupation and title. This is a destination identifier, not a two-digit occupational family.
- `total_obs`: effective observations of switches from the origin to any destination; age reweighting can produce noninteger values. It is repeated across an origin's destination rows, not a pair count to sum repeatedly.
- `transition_share`: destination share conditional on moving to a different occupation, as operationalized by the authors. This is not the probability of any worker leaving the occupation.

The documentation describes national transitions with starting years 2002–2015 and destination years through 2016, derived from about 16 million resumes. Jobs are matched across adjacent calendar years, which can include concurrent jobs; this is not necessarily a clean employer-to-employer move. Profiles are not a probability sample. Age reweighting does not remove all selection or occupation-coding error. Small origins and military occupations were excluded by the source.

## Status

Downloaded and integrity checked; the harmonized project comparison has now been executed. See [benchmark findings](../../analysis/relatedness_refresh_20260922/transition_validation/README.md) and [independent verification](../../analysis/relatedness_refresh_20260922/transition_validation/verification.json). The primary comparison retains 604 origins and 671 candidate destinations using bijective SOC2010/SOC2018 links. No optimized combination or individual transition model was fitted. 
