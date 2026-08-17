import json, subprocess, io
import numpy as np
from PIL import Image

FF = r"C:\Users\Tanya Awasthi\App-AI\jobdiva-training\batch118\ffmpeg.exe"
VIDEO = "aya-source-recording-cropped.mp4"

with open("session1/lesson_ranges.json") as f:
    lessons = json.load(f)

def grab_frame(t):
    cmd = [FF, "-ss", str(t), "-i", VIDEO, "-frames:v", "1", "-f", "image2pipe", "-vcodec", "mjpeg", "-q:v", "6", "-"]
    p = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL)
    return Image.open(io.BytesIO(p.stdout)).convert("L")

def is_bad(im, thresh=45, coverage=0.6):
    arr = np.array(im)
    h, w = arr.shape
    row_dark_frac = (arr < thresh).mean(axis=1)
    dark_rows = np.where(row_dark_frac > coverage)[0]
    bands = []
    if len(dark_rows):
        start = dark_rows[0]; prev = dark_rows[0]
        for r in dark_rows[1:]:
            if r - prev > 3:
                bands.append((start, prev)); start = r
            prev = r
        bands.append((start, prev))
    bands = [b for b in bands if b[0] < h - 25]
    return len(bands) > 0

report = {}
step = 4
for lid, start, end in lessons:
    t = start
    results = []
    while t < end:
        try:
            im = grab_frame(t)
            bad = is_bad(im)
        except Exception:
            bad = None
        results.append([t, bad])
        t += step
    bad_count = sum(1 for _,b in results if b is True)
    report[lid] = {"start":start,"end":end,"samples":len(results),"bad":bad_count, "detail":results}
    print(lid, start, end, f"bad {bad_count}/{len(results)}", flush=True)

with open("session1/gallery_scan_report2.json","w") as f:
    json.dump(report, f, indent=1)
print("SCAN DONE", flush=True)
