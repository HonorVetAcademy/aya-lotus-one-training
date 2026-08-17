import asyncio, json, os, subprocess, wave
import edge_tts

BASE = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(BASE, "lesson_scripts.json"), encoding="utf-8") as f:
    scripts = json.load(f)

VOICE = "en-US-AndrewNeural"
OUT_MP3 = os.path.join(BASE, "narration_mp3")
OUT_WAV = os.path.join(BASE, "narration_wav")
os.makedirs(OUT_MP3, exist_ok=True)
os.makedirs(OUT_WAV, exist_ok=True)
FFMPEG = r"C:\Users\Tanya Awasthi\App-AI\jobdiva-training\batch118\ffmpeg.exe"

async def synth(lid, text):
    mp3_path = os.path.join(OUT_MP3, f"{lid}.mp3")
    wav_path = os.path.join(OUT_WAV, f"{lid}.wav")
    communicate = edge_tts.Communicate(text, VOICE, rate="+2%")
    await communicate.save(mp3_path)
    subprocess.run([FFMPEG, "-y", "-i", mp3_path, "-ar", "44100", "-ac", "1", wav_path],
                    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
    with wave.open(wav_path, "rb") as w:
        dur = w.getnframes() / w.getframerate()
    return lid, dur

async def main():
    durations = {}
    tasks = [synth(lid, text) for lid, text in scripts.items()]
    for coro in asyncio.as_completed(tasks):
        lid, dur = await coro
        durations[lid] = round(dur, 2)
        print(f"{lid}: {dur:.2f}s", flush=True)
    with open(os.path.join(BASE, "narration_durations.json"), "w", encoding="utf-8") as f:
        json.dump(durations, f, indent=2)
    print("TTS DONE", flush=True)

asyncio.run(main())
