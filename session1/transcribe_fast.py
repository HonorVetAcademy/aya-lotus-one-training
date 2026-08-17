import json, time
from faster_whisper import WhisperModel

t0 = time.time()
model = WhisperModel("small.en", device="cpu", compute_type="int8", cpu_threads=8)
segments, info = model.transcribe("audio.wav", beam_size=1, vad_filter=True)

out = []
with open("audio_fastwhisper.txt", "w", encoding="utf-8") as ftxt:
    for seg in segments:
        out.append({"start": seg.start, "end": seg.end, "text": seg.text})
        ftxt.write(f"[{seg.start:.2f} -> {seg.end:.2f}] {seg.text}\n")
        ftxt.flush()
        print(f"{seg.start:.1f}s: {seg.text}", flush=True)

with open("audio_fastwhisper.json", "w", encoding="utf-8") as fjson:
    json.dump(out, fjson, indent=2)

print(f"DONE in {time.time()-t0:.1f}s, {len(out)} segments", flush=True)
