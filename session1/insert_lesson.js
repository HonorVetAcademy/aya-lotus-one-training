const fs = require('fs');
const path = require('path');
const BASE = __dirname;
const ROOT = path.dirname(BASE);

const ctx = { window: {}, console };
vm_run(fs.readFileSync(path.join(ROOT, 'course-data.js'), 'utf8'), ctx);
function vm_run(code, ctx) { require('vm').runInNewContext(code, ctx); }

const COURSE = ctx.window.COURSE;
const FINAL_ASSESSMENT = ctx.window.FINAL_ASSESSMENT;

const mod2 = COURSE.modules.find(m => m.id === 'm2');
console.log('before:', mod2.lessons.map(l => l.id));

// rename in reverse order to avoid collisions: 2.3 -> 2.4, then 2.2 -> 2.3
const byId = id => mod2.lessons.find(l => l.id === id);
const old23 = byId('2.3');
old23.id = '2.4';
old23.video = 'clips/2.4.mp4';

const old22 = byId('2.2'); // this is actually the ORIGINAL 2.2 object (id already changed above doesn't touch this one)
old22.id = '2.3';
old22.video = 'clips/2.3.mp4';

// build new lesson 2.2
const narration = JSON.parse(fs.readFileSync(path.join(BASE, 'new_lesson_script.json'), 'utf8'))['2.2new'];
const captionsB64 = fs.readFileSync(path.join(BASE, 'new_2_2_b64.txt'), 'utf8').trim();

const newLesson = {
  id: '2.2',
  title: 'Finding and Downloading the Unit Description: Aya and JobDiva',
  hasVideo: true,
  objective: 'Locate and download the Unit Description document directly in Aya-Lotus One, and find the same document as a shared attachment in JobDiva.',
  learn: [
    "In Aya-Lotus One, open the job's Job Details tab and look under General for the Unit field — its value (e.g., \"*MHC - 2W Medical - 310050-30-30\") is a hyperlink, not just plain text.",
    "Clicking that Unit link opens the Unit Description document directly, with everything covered in the next lesson: staffing ratios, shift details, schedule requirements, and more. From there you can view, print, or save it like any other document your browser displays.",
    "Since every recruiter working a job would otherwise need their own Aya-Lotus One login just to click that one link, the common practice is to pull a copy into JobDiva instead.",
    "In JobDiva, search for the job by its Job ID or Reference ID, then open the attachment icon on the job record — this opens the Job Attachments dialog, listing the Unit Details and Job Description files already uploaded, each a direct download link, along with who uploaded it and when.",
    "If a job doesn't have these attached yet in JobDiva, use the Add New Attachment button: pull the Unit Description from its link in Aya-Lotus One, and upload it so the rest of the team has it without needing their own Aya-Lotus One login."
  ],
  skills: ['Locating the Unit Description in Aya-Lotus One', 'Downloading shared attachments in JobDiva'],
  terms: [
    ['Unit Description', "The formal name of the document behind the Unit field's hyperlink in Aya-Lotus One — the same document referred to elsewhere in this course as \"Unit Details.\""],
    ['Job Attachments (JobDiva)', 'A dialog on a JobDiva job record listing files uploaded for team-wide access — typically PDF copies of the Aya-Lotus One Unit Description and Job Description, so recruiters don’t need separate Aya-Lotus One logins to read them.']
  ],
  takeaways: [
    "The Unit Description isn't a separate application — it's one hyperlink away from the job's Job Details tab in Aya-Lotus One.",
    "JobDiva's copy exists purely for team-wide convenience; if it's missing or looks outdated there, the live version is always the one linked from Aya-Lotus One."
  ],
  check: {
    q: 'Where does the "Unit Details" PDF attached in JobDiva actually come from?',
    options: [
      'It is generated automatically by JobDiva',
      "It's downloaded from the Unit field link in Aya-Lotus One and uploaded to JobDiva for team-wide access",
      'It is emailed by the client directly to JobDiva support',
      'It has no connection to Aya-Lotus One'
    ],
    answer: 1,
    explain: 'The Unit Description originates in Aya-Lotus One (behind the Unit field’s hyperlink) — JobDiva’s copy is just an uploaded PDF of that same document, kept there so the whole team can access it without an Aya-Lotus One login.'
  },
  video: 'clips/2.2.mp4',
  duration: 82.51,
  captions: captionsB64,
  narration: narration
};

mod2.lessons.splice(1, 0, newLesson); // insert after 2.1
mod2.summary = "The two attachments every job can have, where to find and download the Unit Description in both systems, the Requirements section, and the rule for when they conflict.";

console.log('after:', mod2.lessons.map(l => l.id));

// add a final assessment question about this
FINAL_ASSESSMENT.push({
  q: 'Where does the "Unit Details" PDF attached in JobDiva actually come from?',
  options: [
    'It is generated automatically by JobDiva',
    'It is downloaded from the Unit field link in Aya-Lotus One and uploaded to JobDiva for team-wide access',
    'It is emailed by the client directly to JobDiva support',
    'It has no connection to Aya-Lotus One'
  ],
  answer: 1
});

const out = [
  '// Aya-Lotus One Mastery — course content with AI narration replacing the original recorded audio.',
  '// Video lessons: clips/<id>.mp4 (a single relevant, content-matched screenshot held static under the',
  '// narration — chosen instead of scrolling screen-share footage because trimmed motion video stayed',
  '// synced to the ORIGINAL speaker\'s words, not the rewritten narration script, causing visible mismatch).',
  '// Reference lessons: audio/<id>.mp3 (narration only, no source video existed for these topics).',
  '',
  'function fmt(s){',
  '  const h = Math.floor(s/3600), m = Math.floor((s%3600)/60), sec = Math.floor(s%60);',
  '  return (h>0? h+":" : "") + String(m).padStart(h>0?2:1,"0") + ":" + String(sec).padStart(2,"0");',
  '}',
  '',
  'const COURSE = ' + JSON.stringify(COURSE, null, 2) + ';',
  '',
  'const FINAL_ASSESSMENT = ' + JSON.stringify(FINAL_ASSESSMENT, null, 2) + ';',
  '',
  'window.COURSE = COURSE;',
  'window.fmtTime = fmt;',
  'window.FINAL_ASSESSMENT = FINAL_ASSESSMENT;',
  ''
].join('\n');

fs.writeFileSync(path.join(ROOT, 'course-data.js'), out);
console.log('written. total lessons:', COURSE.modules.reduce((a,m)=>a+m.lessons.length,0));
