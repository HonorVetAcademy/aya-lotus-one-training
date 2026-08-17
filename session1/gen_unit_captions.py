import re, base64, json

with open("session1/unit_walkthrough_scripts.json", encoding="utf-8") as f:
    scripts = json.load(f)
with open("session1/unit_walkthrough_durations.json", encoding="utf-8") as f:
    durations = json.load(f)

SENT_RE = re.compile(r'[^.!?]+[.!?]*')

def fmt_ts(s):
    h = int(s // 3600); m = int((s % 3600) // 60); sec = s % 60
    return f"{h:02d}:{m:02d}:{sec:06.3f}"

result = {}
for lid, text in scripts.items():
    dur = durations[lid]
    sentences = [s.strip() for s in SENT_RE.findall(text) if s.strip()]
    total_chars = sum(len(s) for s in sentences)
    t = 0.0
    cues = []
    for s in sentences:
        frac = len(s) / total_chars
        s_dur = dur * frac
        cues.append((t, t + s_dur, s))
        t += s_dur
    lines = ["WEBVTT", ""]
    for i, (start, end, s) in enumerate(cues, 1):
        lines.append(str(i)); lines.append(f"{fmt_ts(start)} --> {fmt_ts(end)}"); lines.append(s); lines.append("")
    vtt = "\n".join(lines)
    b64 = base64.b64encode(vtt.encode("utf-8")).decode("ascii")
    result[lid] = b64
    print(lid, "cues:", len(cues), "dur:", dur)
    if lid == "2.6new":
        # print cue boundaries to find work-experience/other-info split
        for i,(s,e,txt) in enumerate(cues):
            print("  ", round(s,2), round(e,2), txt[:60])

with open("session1/unit_walkthrough_captions_b64.json", "w") as f:
    json.dump(result, f)
print("CAPTIONS DONE")
