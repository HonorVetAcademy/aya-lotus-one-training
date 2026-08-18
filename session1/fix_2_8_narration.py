import asyncio, os, subprocess, wave, base64
import edge_tts

BASE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(BASE)
CLIPS_DIR = os.path.join(ROOT, "clips")
FFMPEG = r"C:\Users\Tanya Awasthi\App-AI\jobdiva-training\batch118\ffmpeg.exe"
VOICE = "en-US-AndrewNeural"

NARRATION = (
    "Here's an important lesson in this course: before you call something a conflict "
    "between the Job Description and the Unit Details P-D-F, check whether the two "
    "documents are actually describing different things. Here's a real example that "
    "trips people up: one job's Job Description noted sixteen hours of non-billable "
    "orientation, while its Unit Details P-D-F listed forty-eight hours of orientation. "
    "That's not a disagreement — it's two facts at once. The total orientation tenure "
    "is forty-eight hours, from Unit Details. And sixteen of those hours simply can't "
    "be billed to the client, per the Job Description. Both are true at the same time. "
    "Now, true conflicts do happen — where the two documents state contradictory values "
    "for the exact same fact, like shift or patient ratio. When that happens, Unit "
    "Details is the source of truth. And while you're reading, read every field from "
    "top to bottom. Don't skip ahead to the parts that seem important and assume the "
    "rest doesn't matter — the details that trip people up are usually the ones that "
    "get skipped."
)

SENTENCES = [
    "Here's an important lesson in this course: before you call something a conflict between the Job Description and the Unit Details P-D-F, check whether the two documents are actually describing different things.",
    "Here's a real example that trips people up: one job's Job Description noted sixteen hours of non-billable orientation, while its Unit Details P-D-F listed forty-eight hours of orientation.",
    "That's not a disagreement — it's two facts at once.",
    "The total orientation tenure is forty-eight hours, from Unit Details.",
    "And sixteen of those hours simply can't be billed to the client, per the Job Description.",
    "Both are true at the same time.",
    "Now, true conflicts do happen — where the two documents state contradictory values for the exact same fact, like shift or patient ratio.",
    "When that happens, Unit Details is the source of truth.",
    "And while you're reading, read every field from top to bottom.",
    "Don't skip ahead to the parts that seem important and assume the rest doesn't matter — the details that trip people up are usually the ones that get skipped.",
]

mp3_path = os.path.join(BASE, "2_8_new.mp3")
wav_path = os.path.join(BASE, "2_8_new.wav")
still_img = os.path.join(BASE, "tmp_still_2_8.jpg")
new_clip = os.path.join(CLIPS_DIR, "2.8_new.mp4")
old_clip = os.path.join(CLIPS_DIR, "2.8.mp4")


async def synth():
    communicate = edge_tts.Communicate(NARRATION, VOICE, rate="+2%")
    submaker = edge_tts.SubMaker()
    with open(mp3_path, "wb") as f:
        async for chunk in communicate.stream():
            if chunk["type"] == "audio":
                f.write(chunk["data"])
            elif chunk["type"] == "WordBoundary":
                submaker.feed(chunk)
    return submaker


def main():
    submaker = asyncio.run(synth())

    subprocess.run([FFMPEG, "-y", "-i", mp3_path, "-ar", "44100", "-ac", "1", wav_path],
                    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
    with wave.open(wav_path, "rb") as w:
        dur = w.getnframes() / w.getframerate()
    print(f"narration duration: {dur:.2f}s")

    # extract still frame (frame 0) from the existing clip to reuse as the video image
    subprocess.run([FFMPEG, "-y", "-i", old_clip, "-frames:v", "1", "-q:v", "3", still_img],
                    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)

    subprocess.run([FFMPEG, "-y", "-loop", "1", "-i", still_img, "-i", mp3_path,
                    "-map", "0:v", "-map", "1:a", "-t", str(round(dur, 2)),
                    "-c:v", "libx264", "-preset", "veryfast", "-crf", "23", "-pix_fmt", "yuv420p",
                    "-c:a", "aac", "-b:a", "96k", new_clip],
                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)

    os.remove(old_clip)
    os.rename(new_clip, old_clip)
    os.remove(still_img)
    print("rebuilt clips/2.8.mp4, duration=", round(dur, 2))

    # build WEBVTT captions with proportional timing across sentences by char length
    total_chars = sum(len(s) for s in SENTENCES)
    lines = ["WEBVTT", ""]
    t = 0.0
    for i, s in enumerate(SENTENCES, 1):
        share = len(s) / total_chars * dur
        start = t
        end = min(t + share, dur)
        def fmt(x):
            h = int(x // 3600)
            m = int((x % 3600) // 60)
            sec = x % 60
            return f"{h:02d}:{m:02d}:{sec:06.3f}"
        lines.append(str(i))
        lines.append(f"{fmt(start)} --> {fmt(end)}")
        lines.append(s)
        lines.append("")
        t = end
    vtt = "\n".join(lines)
    b64 = base64.b64encode(vtt.encode("utf-8")).decode("ascii")

    with open(os.path.join(BASE, "2_8_caption_b64.txt"), "w", encoding="utf-8") as f:
        f.write(b64)
    with open(os.path.join(BASE, "2_8_narration.txt"), "w", encoding="utf-8") as f:
        f.write(NARRATION)
    with open(os.path.join(BASE, "2_8_duration.txt"), "w", encoding="utf-8") as f:
        f.write(str(round(dur, 2)))

    print("caption b64 and narration/duration written")


if __name__ == "__main__":
    main()
