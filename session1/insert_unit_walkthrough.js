const fs = require('fs');
const path = require('path');
const BASE = __dirname;
const ROOT = path.dirname(BASE);

const ctx = { window: {}, console };
require('vm').runInNewContext(fs.readFileSync(path.join(ROOT, 'course-data.js'), 'utf8'), ctx);
const COURSE = ctx.window.COURSE;
const FINAL_ASSESSMENT = ctx.window.FINAL_ASSESSMENT;

const mod2 = COURSE.modules.find(m => m.id === 'm2');
console.log('before:', mod2.lessons.map(l => l.id));

const byId = id => mod2.lessons.find(l => l.id === id);

// renumber in reverse to avoid collisions
const old24 = byId('2.4'); old24.id = '2.8'; old24.video = 'clips/2.8.mp4';
const old23 = byId('2.3'); old23.id = '2.7'; old23.video = 'clips/2.7.mp4';
old23.prerequisite = '2.1'; // unchanged reference, still valid

const narration = JSON.parse(fs.readFileSync(path.join(BASE, 'unit_walkthrough_scripts.json'), 'utf8'));
const durations = JSON.parse(fs.readFileSync(path.join(BASE, 'unit_walkthrough_durations.json'), 'utf8'));
const captions = JSON.parse(fs.readFileSync(path.join(BASE, 'unit_walkthrough_captions_b64.json'), 'utf8'));

const newLessons = [
  {
    id: '2.3',
    title: 'Unit Description Walkthrough, Part 1: Unit & Facility Identification',
    hasVideo: true,
    objective: 'Read every identification field at the top of the Unit Description, in order, and know what each one tells you.',
    learn: [
      'Unit Name combines the unit code, facility name, and specific unit/floor in one line (e.g., "CC99103 | University Hospital | 12 North - Surgical ICU") — treat it as the unit\'s full address inside the hospital.',
      'Physical Unit/Department is a short label (e.g., "ICU") for the broad department; Unit Type gets more specific (e.g., "ICU-SICU," meaning surgical intensive care specifically).',
      'Date is when the document was issued or last confirmed — a date a year or more old is normal and doesn\'t mean the information is stale.',
      'Facility is the full hospital name, followed by City and State — always read these together, since large health systems can have several facilities with similar unit numbers.',
      'Discipline (the profession, e.g., Registered Nurse) and Specialty (e.g., SICU) come next — a note under Specialty warns that it must be set correctly or the certifications and skills sections further down won\'t display at all.',
      'Clinical Track is an additional, less-often-used classification field. Then four numeric fields — Avg. Daily Census, Visits/Day, Rooms, and Beds — give a quick sense of the unit\'s size and patient volume.'
    ],
    skills: ['Reading Unit Description identification fields', 'Recognizing the Specialty-field dependency for certifications/skills'],
    terms: [['Avg. Daily Census', "The typical number of patients on the unit at any given time — one of four size/volume fields alongside Visits/Day, Rooms, and Beds."]],
    takeaways: ["If Specialty isn't set correctly on the Unit Description, the certifications and skills sections won't even display — it's a dependency, not just another field.", "Always read Facility together with City/State — large health systems often have multiple facilities with similar-looking unit codes."],
    check: {
      q: 'What does the Unit Name field actually combine into one line?',
      options: ['Just the hospital name', 'The unit code, facility name, and specific unit/floor', 'Only the floor number', 'The recruiter\'s name and the date'],
      answer: 1,
      explain: 'Unit Name is effectively the unit\'s full address inside the hospital — unit code, facility, and specific unit/floor together.'
    }
  },
  {
    id: '2.4',
    title: 'Unit Description Walkthrough, Part 2: Patient Population, Ratios, Shifts & Scheduling',
    hasVideo: true,
    objective: 'Read the Patient Age Group, Staffing Ratios, Shift Details, Schedule Requirements, and Unit Systems fields in order.',
    learn: [
      'Patient Age Group is six checkboxes (Neonates, Infants, Pediatrics, Adolescents, Adults, Geriatrics) defining the population this unit actually treats — a candidate whose real experience doesn\'t match the checked boxes is not a fit.',
      'Staffing Ratios gives three separate numbers — Days, Nights, Weekends — each written as 1-to-a-number; these can differ from each other, so don\'t assume one applies to all three.',
      'Shift Details is a table: shift-length/role rows (8 hrs, 10 hrs, 12 hrs, LVN, Tech, CNA) down the side, Day/PM/NOCS start-end times across the top, and a Rotating Shifts yes/no on the right of each row.',
      'Schedule Requirements covers Call Required (yes/no + notes), Float Required (yes/no + notes, e.g. "when census is down"), Weekend Coverage (Every Other/Every Third), # Weekend Shifts per Contract, and Scheduling Type (Block/Self/Other).',
      'Unit Systems covers Medication System (Pyxis/Accudose/Omnicell checkboxes) and Documentation system (a text field, most often Epic), plus an Other/Notes field.'
    ],
    skills: ['Reading staffing ratio and shift-detail tables', 'Reading Schedule Requirements and Unit Systems fields'],
    terms: [['NOCS', 'Shorthand used in the Shift Details table for night shifts, alongside Day and PM columns.']],
    takeaways: ['Staffing ratios can differ between days, nights, and weekends — check all three individually, never assume.', 'A blank or unchecked field in Schedule Requirements (like Call Required) defaults to no, not "unspecified."'],
    check: {
      q: 'A unit\'s Staffing Ratios show Days 1:6, Nights 1:6, Weekends 1:5. What should you do?',
      options: ['Assume weekends are also 1:6 since days and nights match', 'Treat each ratio individually — the weekend ratio (1:5) applies specifically to weekend shifts', 'Ignore the weekend number since it\'s unusual', 'Use only the days ratio for the whole submission'],
      answer: 1,
      explain: 'Days, Nights, and Weekends are separate fields and can genuinely differ — always read and apply each one individually.'
    }
  },
  {
    id: '2.5',
    title: 'Unit Description Walkthrough, Part 3: Certifications & Skills',
    hasVideo: true,
    objective: 'Read the Certifications and Skills sections category by category, and apply the preferred/required asterisk convention correctly.',
    learn: [
      'Certifications lists the required credentials (e.g., ACLS, BLS, NIHSS) with a note: items marked with an asterisk are preferred, not required — unmarked items are required.',
      'Skills are grouped by clinical category — for example Respiratory (BiPAP/CPAP management*, chest tubes, nasal cannula, oral suctioning*), IV Therapy/Phlebotomy (blood product administration*, peripheral line care*, PICC line management*, starting/maintaining IVs — required, not preferred), Gastrointestinal, Cardiac Monitoring and Emergency Response, Professional Knowledge and Skills, Work Settings (Med/Surg, MS/Tele, Telemetry*), Genitourinary/Renal, Plastics, and an Additional Skills line for anything unit-specific.',
      'The same asterisk convention (preferred vs. required) applies throughout every category — read it consistently rather than assuming it only applies to Certifications.',
      "As covered earlier in this course, Aya-Lotus One reviewers treat even 'preferred' skills and certifications as something they expect a candidate to actually have — the asterisk isn't permission to skip it."
    ],
    skills: ['Reading grouped skills lists', 'Applying the preferred/required asterisk convention consistently'],
    terms: [],
    takeaways: ["The asterisk convention (marked = preferred, unmarked = required) applies to both Certifications and every category under Skills.", "\"Preferred\" still functions as an expectation at Aya-Lotus One — treat it the same as required when screening a candidate."],
    check: {
      q: 'On the Unit Description, a skill has no asterisk next to it. What does that mean?',
      options: ['It\'s optional and can be skipped', 'It is required, not merely preferred', 'It only applies to travelers', 'It means the field is broken'],
      answer: 1,
      explain: 'Items marked with an asterisk are preferred; unmarked items are required — the convention holds across Certifications and every Skills category.'
    }
  },
  {
    id: '2.6',
    title: 'Unit Description Walkthrough, Part 4: Work Experience, Travel & Program Details',
    hasVideo: true,
    objective: 'Read the Work Experience and Other Information sections field by field, closing out the full Unit Description walkthrough.',
    learn: [
      'Work Experience covers Previous Charge Experience (preferred/required), Years of Experience Required (a literal number), Patient Ratio Experience Required (1-to-a-number), and Electronic Documentation (preferred/required + system, usually Epic).',
      'Five more preferred/required fields follow: Teaching Hospital Experience, Community Hospital Experience, LTAC Experience, Trauma Level I Experience, and Trauma Level II Experience.',
      'Other Information covers Unit Accepts 1st Time Traveler (yes/no + notes), Orientation Details (# of hours — the figure that overrides the Job Description if they disagree), Scrubs (Provided checkbox + Color), Pre-Approved Time-Off Per Contract (1 Request/2 Requests/None), and Program Type (Pre-Screen/Client Offer/Auto Offer/Not Enrolled).',
      'A final free-text Other Information box catches anything that doesn\'t fit elsewhere, followed by a standing disclaimer: the client represents the information is complete, accurate, and up to date, and is responsible for keeping it that way — which is why anything that looks off should be raised, not worked around.'
    ],
    skills: ['Reading Work Experience requirement fields', 'Reading traveler, orientation, scrubs, RTO, and program-type fields'],
    terms: [['Pre-Approved Time-Off Per Contract', "A Unit Description field (1 Request/2 Requests/None) stating how many separate RTO windows this specific unit allows — checked before applying the course's one-block RTO rule."]],
    takeaways: ["Every Work Experience field is a genuine requirement to verify against the resume — and remember, \"preferred\" here is still treated as required.", 'This closes out every field in the Unit Description — the rest of the course is about applying what each one means in practice.']
  }
];

const keyMap = { '2.3': '2.3new', '2.4': '2.4new', '2.5': '2.5new', '2.6': '2.6new' };
newLessons.forEach(l => {
  const k = keyMap[l.id];
  l.video = 'clips/' + l.id + '.mp4';
  l.duration = durations[k];
  l.captions = captions[k];
  l.narration = narration[k];
});

mod2.lessons.splice(2, 0, ...newLessons); // insert after 2.1, 2.2
mod2.summary = "The two attachments every job can have, where to find and download the Unit Description in both systems, a complete field-by-field walkthrough of the document itself, the Requirements section, and the rule for when they conflict.";

console.log('after:', mod2.lessons.map(l => l.id));

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

// now attach video/duration/captions/narration fields to the 4 new lessons via post-process
