#!/usr/bin/env python3
"""Encode one mp4 per subdirectory of frames_detailed at 4 FPS.

Frames are named MM_YYYY.png; sort chronologically by (year, month).
H.264, even dimensions, yuv420p for broad player compatibility.
"""
import os
import re
import subprocess
import imageio_ffmpeg

FPS = 4
ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, "movies")
FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()

os.makedirs(OUT, exist_ok=True)

pat = re.compile(r"^(\d{2})_(\d{4})\.png$")


def chrono(files):
    keyed = []
    for f in files:
        m = pat.match(f)
        if m:
            month, year = int(m.group(1)), int(m.group(2))
            keyed.append(((year, month), f))
    keyed.sort()
    return [f for _, f in keyed]


for name in sorted(os.listdir(ROOT)):
    d = os.path.join(ROOT, name)
    if not os.path.isdir(d) or name == "movies":
        continue
    frames = chrono(os.listdir(d))
    if not frames:
        continue

    # Write an ffconcat list so we control exact order.
    listfile = os.path.join(d, "_frames.txt")
    with open(listfile, "w") as fh:
        fh.write("ffconcat version 1.0\n")
        for f in frames:
            fh.write(f"file '{f}'\n")
            fh.write(f"duration {1/FPS}\n")
        # repeat last frame so it isn't dropped
        fh.write(f"file '{frames[-1]}'\n")

    out = os.path.join(OUT, f"{name}.mp4")
    cmd = [
        FFMPEG, "-y",
        "-f", "concat", "-safe", "0",
        "-i", listfile,
        "-vf", "scale=trunc(iw/2)*2:trunc(ih/2)*2",
        "-r", str(FPS),
        "-pix_fmt", "yuv420p",
        "-c:v", "libx264",
        "-crf", "18",
        out,
    ]
    print(f"-> {name}: {len(frames)} frames")
    subprocess.run(cmd, check=True,
                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    os.remove(listfile)

print(f"\nDone. Movies written to {OUT}")
