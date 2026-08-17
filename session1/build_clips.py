import json, os, subprocess, sys

BASE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(BASE)
FFMPEG = r"C:\Users\Tanya Awasthi\App-AI\jobdiva-training\batch118\ffmpeg.exe"
MASTER = os.path.join(ROOT, "aya-source-recording-cropped.mp4")
CLIPS_DIR = os.path.join(ROOT, "clips")
os.makedirs(CLIPS_DIR, exist_ok=True)

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
    narr_wav = os.path.join(BASE, "narration_wav", f"{lid}.wav")
    narr_dur = durations[lid]
    out_path = os.path.join(CLIPS_DIR, f"{lid}.mp4")
    tmp_video = os.path.join(BASE, f"tmp_video_{lid.replace('.','_')}.mp4")

    if spec["type"] == "still":
        t = spec["frame_t"]
        cmd = [FFMPEG, "-y", "-loop", "1", "-ss", str(t), "-t", str(narr_dur+0.5), "-i", MASTER,
               "-i", narr_wav, "-map", "0:v", "-map", "1:a",
               "-c:v", "libx264", "-preset", "veryfast", "-crf", "23", "-pix_fmt", "yuv420p",
               "-c:a", "aac", "-b:a", "96k", "-shortest", out_path]
        run(cmd)
    else:
        ranges = spec["ranges"]
        if len(ranges) == 1:
            s, e = ranges[0]
            cmd = [FFMPEG, "-y", "-ss", str(s), "-to", str(e), "-i", MASTER,
                   "-an", "-c:v", "libx264", "-preset", "veryfast", "-crf", "22", "-pix_fmt", "yuv420p",
                   tmp_video]
            run(cmd)
        else:
            # extract each sub-range then concat via filter
            parts = []
            for i, (s, e) in enumerate(ranges):
                part = os.path.join(BASE, f"tmp_part_{lid.replace('.','_')}_{i}.mp4")
                cmd = [FFMPEG, "-y", "-ss", str(s), "-to", str(e), "-i", MASTER,
                       "-an", "-c:v", "libx264", "-preset", "veryfast", "-crf", "22", "-pix_fmt", "yuv420p",
                       part]
                run(cmd)
                parts.append(part)
            listfile = os.path.join(BASE, f"tmp_list_{lid.replace('.','_')}.txt")
            with open(listfile, "w") as f:
                for p in parts:
                    f.write(f"file '{p}'\n")
            cmd = [FFMPEG, "-y", "-f", "concat", "-safe", "0", "-i", listfile,
                   "-c:v", "libx264", "-preset", "veryfast", "-crf", "22", "-pix_fmt", "yuv420p",
                   tmp_video]
            run(cmd)
            for p in parts:
                os.remove(p)
            os.remove(listfile)

        # mux trimmed/concat video with narration audio, cut to narration duration
        cmd = [FFMPEG, "-y", "-i", tmp_video, "-i", narr_wav,
               "-map", "0:v", "-map", "1:a", "-t", str(narr_dur),
               "-c:v", "libx264", "-preset", "veryfast", "-crf", "22", "-pix_fmt", "yuv420p",
               "-c:a", "aac", "-b:a", "96k", out_path]
        run(cmd)
        os.remove(tmp_video)

    print(f"{lid}: built {out_path} (narration {narr_dur}s)", flush=True)

print("CLIPS DONE", flush=True)
