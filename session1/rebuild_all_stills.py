import json, os, subprocess

BASE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(BASE)
FFMPEG = r"C:\Users\Tanya Awasthi\App-AI\jobdiva-training\batch118\ffmpeg.exe"
SRC = r"C:\Users\Tanya Awasthi\Downloads\AYA refresher session-20260812_160337-Meeting Recording.mp4"
CLIPS_DIR = os.path.join(ROOT, "clips")

with open(os.path.join(BASE, "lesson_video_specs.json")) as f:
    specs = json.load(f)
with open(os.path.join(BASE, "narration_durations.json")) as f:
    durations = json.load(f)

def run(cmd):
    r = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    if r.returncode != 0:
        print("FFMPEG FAILED:", " ".join(cmd))
        print(r.stdout.decode(errors="replace")[-2000:])
        raise SystemExit(1)

for lid, spec in specs.items():
    old_clip = os.path.join(CLIPS_DIR, f"{lid}.mp4")  # existing clip has correct narration audio track
    new_clip = os.path.join(CLIPS_DIR, f"{lid}_new.mp4")
    narr_dur = durations[lid]
    t = spec["frame_t"]
    still_img = os.path.join(BASE, f"tmp_still_{lid.replace('.','_')}.jpg")
    run([FFMPEG, "-y", "-ss", str(t), "-i", SRC, "-vf", "crop=1672:974:0:106",
         "-frames:v", "1", "-q:v", "3", "-update", "1", still_img])
    cmd = [FFMPEG, "-y", "-loop", "1", "-i", still_img, "-i", old_clip,
           "-map", "0:v", "-map", "1:a", "-t", str(narr_dur),
           "-c:v", "libx264", "-preset", "veryfast", "-crf", "23", "-pix_fmt", "yuv420p",
           "-c:a", "aac", "-b:a", "96k", new_clip]
    run(cmd)
    os.remove(still_img)
    os.remove(old_clip)
    os.rename(new_clip, old_clip)
    print(f"{lid}: rebuilt {old_clip} (t={t}, dur={narr_dur}s)", flush=True)

print("REBUILD DONE", flush=True)
