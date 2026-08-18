// Aya-Lotus One Mastery — course content with AI narration replacing the original recorded audio.
// Video lessons: clips/<id>.mp4 (a single relevant, content-matched screenshot held static under the
// narration — chosen instead of scrolling screen-share footage because trimmed motion video stayed
// synced to the ORIGINAL speaker's words, not the rewritten narration script, causing visible mismatch).
// Reference lessons: audio/<id>.mp3 (narration only, no source video existed for these topics).

function fmt(s){
  const h = Math.floor(s/3600), m = Math.floor((s%3600)/60), sec = Math.floor(s%60);
  return (h>0? h+":" : "") + String(m).padStart(h>0?2:1,"0") + ":" + String(sec).padStart(2,"0");
}

const COURSE = {
  "title": "Aya-Lotus One Mastery for Healthcare Staffing Recruiters",
  "subtitle": "From the live Aya-Lotus One refresher session, plus HonorVet's Right-Sourcing submission process",
  "description": "A complete, hands-on walkthrough of Aya-Lotus One — the client-facing VMS portal HonorVet recruiters use to source and submit healthcare candidates. Built from a live trainer-led refresher session plus HonorVet's Right-Sourcing submission documentation. Covers reading a job posting correctly (Job Description vs. Unit Details), matching candidates on patient population, ratio, skills, and experience, the rate table, requested time off and risk mitigation, travel eligibility, the screening conversation, and building a complete, defensible submittal packet.",
  "audience": "Healthcare staffing recruiters (and their leads) who source and submit candidates through Aya-Lotus One on behalf of HonorVet Technologies' healthcare clients.",
  "prerequisites": "None required. Basic familiarity with travel-nursing/healthcare staffing terms (RN, BLS/ACLS, RTO, submittal) is helpful but not mandatory — key terms are defined as they appear.",
  "totalDuration": "~1h 48m",
  "objectives": [
    "Explain what Aya-Lotus One is and how it differs from HonorVet's own ATS (JobDiva)",
    "Read a job's Job Description and Unit Details attachments correctly, and know which one wins when they conflict",
    "Match a candidate's patient population, staffing ratio, skills, and work experience against a unit's actual requirements",
    "Write specific, verifiable \"selling points\" instead of vague comfort statements",
    "Read a rate table, including the difference between on-call and callback pay, and how state law affects holiday multipliers",
    "Apply Aya-Lotus One's requested-time-off rules and use risk mitigation to avoid assignment cancellations",
    "Recognize hard compliance gates (like EKG exams) and apply the two-year travel-eligibility rule",
    "Conduct a genuine screening conversation and complete the job overview questionnaire truthfully",
    "Build a complete, standardized Right-Sourcing submittal packet, including resume formatting and independent facility validation"
  ],
  "modules": [
    {
      "id": "m1",
      "title": "Orientation: What Is Aya-Lotus One?",
      "summary": "What the portal is, who uses it, and how to find jobs, workers, and submissions.",
      "lessons": [
        {
          "id": "1.1",
          "title": "What Aya-Lotus One Is and Who Uses It",
          "hasVideo": false,
          "objective": "Explain what Aya-Lotus One is and identify the health systems recruiters submit into.",
          "learn": [
            "Aya-Lotus One is a Vendor Management System (VMS) portal — a client-side job and submission platform, distinct from JobDiva, HonorVet's own ATS. Recruiters find jobs, submit candidates, and track submission status inside the client's VMS, then manage the candidate relationship in JobDiva.",
            "HonorVet recruiters use Aya-Lotus One to source and submit against health systems including UNC Health, Mount Sinai, NewYork-Presbyterian/NYCHH, Atrium Health, Children's Hospital of Philadelphia (CHOP), Cone Health, and CoreCivic (correctional healthcare), among others.",
            "Every job posted in Aya-Lotus One is built from up to two documents, both found under the job's Attachments section: a Job Description (present on effectively every job) and a Unit Details PDF (present on roughly 60-70% of jobs, mostly RN positions).",
            "Aya's review process is people-driven on the other side — real reviewers evaluate submissions against every detail in these documents, so incomplete or generic submissions get deprioritized quickly."
          ],
          "skills": [
            "Portal orientation",
            "VMS vs. ATS distinction"
          ],
          "terms": [
            [
              "VMS",
              "Vendor Management System — the client-facing portal (like Aya-Lotus One) through which staffing vendors receive job requirements and submit candidates."
            ],
            [
              "Unit Details",
              "An optional PDF attachment (on ~60-70% of jobs, mostly RN roles) containing unit-level specifics — patient ratio, shift, EMR, RTO rules — that override the general Job Description whenever the two disagree."
            ]
          ],
          "takeaways": [
            "Aya-Lotus One is the client's system, not HonorVet's — treat every submission as being read by a real, detail-oriented reviewer on the other side.",
            "Always check the Attachments section for both a Job Description and, where present, a Unit Details PDF before doing anything else."
          ],
          "check": {
            "q": "What is Aya-Lotus One?",
            "options": [
              "HonorVet's internal ATS",
              "A client-facing Vendor Management System (VMS) portal used to source and submit candidates",
              "A resume-parsing tool",
              "A payroll system"
            ],
            "answer": 1,
            "explain": "Aya-Lotus One is the client's VMS — separate from JobDiva, HonorVet's own ATS."
          },
          "duration": 80.45,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDIuMDcyCldlbGNvbWUgdG8gQXlhLUxvdHVzIE9uZSBNYXN0ZXJ5LgoKMgowMDowMDowMi4wNzIgLS0+IDAwOjAwOjAzLjgzMQpMZXQncyBzdGFydCB3aXRoIHRoZSBiYXNpY3MuCgozCjAwOjAwOjAzLjgzMSAtLT4gMDA6MDA6MTAuNjc2CkF5YS1Mb3R1cyBPbmUgaXMgYSBWZW5kb3IgTWFuYWdlbWVudCBTeXN0ZW0sIG9yIFYtTS1TIOKAlCBhIHBvcnRhbCB0aGF0IGJlbG9uZ3MgdG8gdGhlIGNsaWVudCwgbm90IHRvIEhvbm9yVmV0LgoKNAowMDowMDoxMC42NzYgLS0+IDAwOjAwOjE4LjAyNApUaGluayBvZiBpdCBhcyB0aGUgY2xpZW50J3MgZnJvbnQgZG9vcjogeW91IGxvZyBpbiwgZmluZCBvcGVuIGpvYnMsIGFuZCBzdWJtaXQgY2FuZGlkYXRlcyBkaXJlY3RseSBpbnRvIHRoZWlyIHN5c3RlbS4KCjUKMDA6MDA6MTguMDI0IC0tPiAwMDowMDoyNi41MDMKVGhhdCdzIGRpZmZlcmVudCBmcm9tIEpvYkRpdmEsIHdoaWNoIGlzIEhvbm9yVmV0J3Mgb3duIGFwcGxpY2FudCB0cmFja2luZyBzeXN0ZW0gdXNlZCB0byBtYW5hZ2UgdGhlIGNhbmRpZGF0ZSByZWxhdGlvbnNoaXAgb24gb3VyIHNpZGUuCgo2CjAwOjAwOjI2LjUwMyAtLT4gMDA6MDA6NDIuNDU0CkFzIGEgSG9ub3JWZXQgcmVjcnVpdGVyLCB5b3UnbGwgdXNlIEF5YS1Mb3R1cyBPbmUgdG8gc291cmNlIGFuZCBzdWJtaXQgYWdhaW5zdCBtYWpvciBoZWFsdGggc3lzdGVtcywgaW5jbHVkaW5nIFUtTi1DIEhlYWx0aCwgTW91bnQgU2luYWksIE5ldyBZb3JrLVByZXNieXRlcmlhbiwgQXRyaXVtIEhlYWx0aCwgQ2hpbGRyZW4ncyBIb3NwaXRhbCBvZiBQaGlsYWRlbHBoaWEsIENvbmUgSGVhbHRoLCBhbmQgQ29yZUNpdmljLCBhbW9uZyBvdGhlcnMuCgo3CjAwOjAwOjQyLjQ1NCAtLT4gMDA6MDA6NTkuNzg4CkV2ZXJ5IGpvYiBwb3N0ZWQgaW4gdGhlIHBvcnRhbCBpcyBidWlsdCBmcm9tIHVwIHRvIHR3byBkb2N1bWVudHMsIGJvdGggZmlsZWQgdW5kZXIgdGhlIGpvYidzIEF0dGFjaG1lbnRzIHNlY3Rpb246IGEgSm9iIERlc2NyaXB0aW9uLCB3aGljaCBhcHBlYXJzIG9uIG5lYXJseSBldmVyeSBqb2IsIGFuZCBhIFVuaXQgRGV0YWlscyBQLUQtRiwgd2hpY2ggc2hvd3MgdXAgb24gcm91Z2hseSBzaXh0eSB0byBzZXZlbnR5IHBlcmNlbnQgb2Ygam9icyDigJQgbW9zdGx5IFItTiBwb3NpdGlvbnMuCgo4CjAwOjAwOjU5Ljc4OCAtLT4gMDA6MDE6MDUuNTY2CktlZXAgb25lIHRoaW5nIGluIG1pbmQgYXMgeW91IGdvIHRocm91Z2ggdGhpcyBjb3Vyc2U6IEF5YSdzIHJldmlldyBwcm9jZXNzIGlzIHBlb3BsZS1kcml2ZW4uCgo5CjAwOjAxOjA1LjU2NiAtLT4gMDA6MDE6MTEuMjgxClJlYWwgcmV2aWV3ZXJzIG9uIHRoZSBvdGhlciBzaWRlIGNoZWNrIHN1Ym1pc3Npb25zIGFnYWluc3QgZXZlcnkgZGV0YWlsIGluIHRoZXNlIGRvY3VtZW50cy4KCjEwCjAwOjAxOjExLjI4MSAtLT4gMDA6MDE6MjAuNDUwCkEgZ2VuZXJpYywgaW5jb21wbGV0ZSBzdWJtaXNzaW9uIGdldHMgZGVwcmlvcml0aXplZCBmYXN0IOKAlCBzbyB0cmVhdCBldmVyeSBzdWJtaXNzaW9uIGFzIHNvbWV0aGluZyBhIGNhcmVmdWwgaHVtYW4gYmVpbmcgaXMgYWN0dWFsbHkgZ29pbmcgdG8gcmVhZC4K",
          "narration": "Welcome to Aya-Lotus One Mastery. Let's start with the basics. Aya-Lotus One is a Vendor Management System, or V-M-S — a portal that belongs to the client, not to HonorVet. Think of it as the client's front door: you log in, find open jobs, and submit candidates directly into their system. That's different from JobDiva, which is HonorVet's own applicant tracking system used to manage the candidate relationship on our side. As a HonorVet recruiter, you'll use Aya-Lotus One to source and submit against major health systems, including U-N-C Health, Mount Sinai, New York-Presbyterian, Atrium Health, Children's Hospital of Philadelphia, Cone Health, and CoreCivic, among others. Every job posted in the portal is built from up to two documents, both filed under the job's Attachments section: a Job Description, which appears on nearly every job, and a Unit Details P-D-F, which shows up on roughly sixty to seventy percent of jobs — mostly R-N positions. Keep one thing in mind as you go through this course: Aya's review process is people-driven. Real reviewers on the other side check submissions against every detail in these documents. A generic, incomplete submission gets deprioritized fast — so treat every submission as something a careful human being is actually going to read.",
          "audio": "audio/1.1.mp3"
        },
        {
          "id": "1.2",
          "title": "Finding Jobs, Workers & Submissions in the Portal",
          "hasVideo": false,
          "objective": "Navigate to open jobs, candidate/worker profiles, and submission status inside Aya-Lotus One.",
          "learn": [
            "From the homepage, Requests > Search All lists jobs, filterable by client (e.g., Atrium Health, CHOP, CoreCivic, UNC, Mount Sinai) and by status (open, pending, closed).",
            "Job-list filters let you narrow to Hot Jobs, Auto-Offer jobs, and jobs with a Block Schedule, and let you hide jobs that are On Hold — use these instead of scanning every open requisition manually.",
            "Candidate/worker profiles are reachable two ways: search by name under a specific client (Workers), or open the full worker list without a client filter.",
            "Recent submissions and their status are tracked from the Dashboard — filter to see submissions by day and by client."
          ],
          "skills": [
            "Job search & filtering",
            "Worker profile lookup",
            "Submission tracking"
          ],
          "terms": [
            [
              "Auto-Offer",
              "A job type where the client extends an offer automatically once required screening acknowledgements are on file — these carry stricter expectations that every requirement has actually been checked."
            ],
            [
              "Block Schedule",
              "A recurring fixed-shift pattern a client can require or allow — filterable as its own job-list category."
            ]
          ],
          "takeaways": [
            "Filter first (client, hot job, auto-offer, block schedule) rather than paging through every open requisition.",
            "Submission status lives on the Dashboard, not inside the job record."
          ],
          "practice": "Open Requests > Search All, filter to one client, and identify one Hot Job and one Auto-Offer job in the results.",
          "duration": 62.35,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDMuNDI1Ck5vdyBsZXQncyB0YWxrIGFib3V0IGdldHRpbmcgYXJvdW5kIHRoZSBwb3J0YWwgaXRzZWxmLgoKMgowMDowMDowMy40MjUgLS0+IDAwOjAwOjA4LjU2MwpGcm9tIHRoZSBob21lcGFnZSwgZ28gdG8gUmVxdWVzdHMsIHRoZW4gU2VhcmNoIEFsbCwgdG8gc2VlIHRoZSBmdWxsIGxpc3Qgb2Ygam9icy4KCjMKMDA6MDA6MDguNTYzIC0tPiAwMDowMDoxNi4zNjQKWW91IGNhbiBmaWx0ZXIgYnkgY2xpZW50IOKAlCBBdHJpdW0gSGVhbHRoLCBDLUgtTy1QLCBDb3JlQ2l2aWMsIFUtTi1DLCBNb3VudCBTaW5haSDigJQgYW5kIGJ5IHN0YXR1czogb3BlbiwgcGVuZGluZywgb3IgY2xvc2VkLgoKNAowMDowMDoxNi4zNjQgLS0+IDAwOjAwOjI2LjE5NgpUaGUgam9iIGxpc3QgYWxzbyBoYXMgZmlsdGVycyB3b3J0aCB1c2luZyBldmVyeSB0aW1lOiBIb3QgSm9icywgQXV0by1PZmZlciBqb2JzLCBqb2JzIHdpdGggYSBCbG9jayBTY2hlZHVsZSwgYW5kIGFuIG9wdGlvbiB0byBoaWRlIGFueXRoaW5nIHRoYXQncyBvbiBob2xkLgoKNQowMDowMDoyNi4xOTYgLS0+IDAwOjAwOjMzLjA0NgpVc2UgdGhlc2UgZmlsdGVycyBpbnN0ZWFkIG9mIHNjcm9sbGluZyB0aHJvdWdoIGV2ZXJ5IG9wZW4gcmVxdWlzaXRpb24gb25lIGJ5IG9uZSDigJQgaXQnbGwgc2F2ZSB5b3UgcmVhbCB0aW1lLgoKNgowMDowMDozMy4wNDYgLS0+IDAwOjAwOjQ0LjQwMApXaGVuIHlvdSBuZWVkIGEgY2FuZGlkYXRlJ3MgcHJvZmlsZSwgdGhlcmUgYXJlIHR3byBwYXRoczogc2VhcmNoIGJ5IG5hbWUgdW5kZXIgYSBzcGVjaWZpYyBjbGllbnQgaW4gdGhlIFdvcmtlcnMgc2VjdGlvbiwgb3Igb3BlbiB0aGUgZnVsbCB3b3JrZXIgbGlzdCB3aXRoIG5vIGNsaWVudCBmaWx0ZXIgYXQgYWxsLgoKNwowMDowMDo0NC40MDAgLS0+IDAwOjAwOjUzLjY2MApBbmQgZm9yIHRyYWNraW5nIHlvdXIgc3VibWlzc2lvbnMsIGhlYWQgdG8gdGhlIERhc2hib2FyZCDigJQgdGhhdCdzIHdoZXJlIHJlY2VudCBzdWJtaXNzaW9ucyBhbmQgdGhlaXIgc3RhdHVzIGxpdmUsIGZpbHRlcmFibGUgYnkgZGF5IGFuZCBieSBjbGllbnQuCgo4CjAwOjAwOjUzLjY2MCAtLT4gMDA6MDE6MDIuMzUwClRyeSB0aGlzIHlvdXJzZWxmOiBvcGVuIFJlcXVlc3RzLCB0aGVuIFNlYXJjaCBBbGwsIGZpbHRlciBkb3duIHRvIG9uZSBjbGllbnQsIGFuZCBmaW5kIG9uZSBIb3QgSm9iIGFuZCBvbmUgQXV0by1PZmZlciBqb2IgaW4gdGhlIHJlc3VsdHMuCg==",
          "narration": "Now let's talk about getting around the portal itself. From the homepage, go to Requests, then Search All, to see the full list of jobs. You can filter by client — Atrium Health, C-H-O-P, CoreCivic, U-N-C, Mount Sinai — and by status: open, pending, or closed. The job list also has filters worth using every time: Hot Jobs, Auto-Offer jobs, jobs with a Block Schedule, and an option to hide anything that's on hold. Use these filters instead of scrolling through every open requisition one by one — it'll save you real time. When you need a candidate's profile, there are two paths: search by name under a specific client in the Workers section, or open the full worker list with no client filter at all. And for tracking your submissions, head to the Dashboard — that's where recent submissions and their status live, filterable by day and by client. Try this yourself: open Requests, then Search All, filter down to one client, and find one Hot Job and one Auto-Offer job in the results.",
          "audio": "audio/1.2.mp3"
        }
      ]
    },
    {
      "id": "m2",
      "title": "Anatomy of a Job Posting",
      "summary": "The two attachments every job can have, where to find and download the Unit Description in both systems, a complete field-by-field walkthrough of the document itself, the Requirements section, and the rule for when they conflict.",
      "lessons": [
        {
          "id": "2.1",
          "title": "The Two Attachments: Job Description & Unit Details",
          "hasVideo": true,
          "objective": "Locate and distinguish a job's Job Description and Unit Details attachments.",
          "learn": [
            "Every Aya-Lotus One job has an Attachments section under the job record — open it before doing anything else.",
            "A Job Description PDF is attached on essentially every job. A Unit Details PDF is attached on roughly 60-70% of jobs — mostly RN positions; lower-level positions often skip it.",
            "The Unit Details document contains unit name (hospital name + job title), department, unit type, the date it was issued (can be a year or more old — that's normal), facility, and discipline/specialty — largely the same basic facts as the Job Description, but unit-specific."
          ],
          "skills": [
            "Attachment identification",
            "Document triage"
          ],
          "terms": [
            [
              "Unit Name",
              "In Unit Details, the combination of the hospital's name and the job title for that specific unit."
            ]
          ],
          "takeaways": [
            "Not every job has a Unit Details PDF — but when it exists, always open it.",
            "An old issue date on Unit Details (even from a prior year) doesn't mean it's stale or wrong."
          ],
          "check": {
            "q": "Roughly what share of Aya-Lotus One jobs include a Unit Details attachment?",
            "options": [
              "100% of all jobs",
              "60-70%, mostly RN positions",
              "Less than 10%",
              "Only correctional healthcare jobs"
            ],
            "answer": 1,
            "explain": "Unit Details is common but not universal — about 60-70% of jobs, concentrated in RN roles."
          },
          "duration": 55.2,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDYuNTc5CkV2ZXJ5IGpvYiBpbiBBeWEtTG90dXMgT25lIHN0YXJ0cyB0aGUgc2FtZSB3YXk6IG9wZW4gaXRzIEF0dGFjaG1lbnRzIHNlY3Rpb24gYmVmb3JlIHlvdSBkbyBhbnl0aGluZyBlbHNlLgoKMgowMDowMDowNi41NzkgLS0+IDAwOjAwOjA5LjY0OQpZb3UnbGwgdHlwaWNhbGx5IGZpbmQgb25lIG9yIHR3byBkb2N1bWVudHMgdGhlcmUuCgozCjAwOjAwOjA5LjY0OSAtLT4gMDA6MDA6MTQuNTM2ClRoZSBKb2IgRGVzY3JpcHRpb24gaXMgYXR0YWNoZWQgdG8gZXNzZW50aWFsbHkgZXZlcnkgam9iIOKAlCB0aGF0IG9uZSdzIGEgZ2l2ZW4uCgo0CjAwOjAwOjE0LjUzNiAtLT4gMDA6MDA6MjUuMDAwClRoZSBVbml0IERldGFpbHMgUC1ELUYsIG9uIHRoZSBvdGhlciBoYW5kLCBvbmx5IHNob3dzIHVwIG9uIGFib3V0IHNpeHR5IHRvIHNldmVudHkgcGVyY2VudCBvZiBqb2JzLCBtb3N0bHkgZm9yIFItTiBwb3NpdGlvbnM7IGxvd2VyLWxldmVsIHJvbGVzIG9mdGVuIHNraXAgaXQgZW50aXJlbHkuCgo1CjAwOjAwOjI1LjAwMCAtLT4gMDA6MDA6MzkuMTYwCldoZW4gVW5pdCBEZXRhaWxzIGlzIHByZXNlbnQsIGl0IGNvbnRhaW5zIHRoZSB1bml0IG5hbWUg4oCUIHdoaWNoIGNvbWJpbmVzIHRoZSBob3NwaXRhbCdzIG5hbWUgd2l0aCB0aGUgam9iIHRpdGxlIOKAlCBhbG9uZyB3aXRoIHRoZSBkZXBhcnRtZW50LCB0aGUgdW5pdCB0eXBlLCB0aGUgZGF0ZSBpdCB3YXMgaXNzdWVkLCB0aGUgZmFjaWxpdHksIGFuZCB0aGUgZGlzY2lwbGluZSBvciBzcGVjaWFsdHkuCgo2CjAwOjAwOjM5LjE2MCAtLT4gMDA6MDA6NDcuODY5CkRvbid0IGJlIHRocm93biBvZmYgaWYgdGhhdCBpc3N1ZSBkYXRlIGxvb2tzIG9sZCwgZXZlbiBhIHllYXIgb3IgbW9yZSDigJQgdGhhdCdzIGNvbXBsZXRlbHkgbm9ybWFsIGFuZCBkb2Vzbid0IG1lYW4gdGhlIGluZm9ybWF0aW9uIGlzIHN0YWxlLgoKNwowMDowMDo0Ny44NjkgLS0+IDAwOjAwOjU0LjUxMQpUaGUgb25lIGhhYml0IHRvIGJ1aWxkIHJpZ2h0IG5vdzogbm90IGV2ZXJ5IGpvYiBoYXMgYSBVbml0IERldGFpbHMgUC1ELUYsIGJ1dCB3aGVuIGl0IGV4aXN0cywgeW91IG9wZW4gaXQuCgo4CjAwOjAwOjU0LjUxMSAtLT4gMDA6MDA6NTUuMjAwCkV2ZXJ5IHRpbWUuCg==",
          "narration": "Every job in Aya-Lotus One starts the same way: open its Attachments section before you do anything else. You'll typically find one or two documents there. The Job Description is attached to essentially every job — that one's a given. The Unit Details P-D-F, on the other hand, only shows up on about sixty to seventy percent of jobs, mostly for R-N positions; lower-level roles often skip it entirely. When Unit Details is present, it contains the unit name — which combines the hospital's name with the job title — along with the department, the unit type, the date it was issued, the facility, and the discipline or specialty. Don't be thrown off if that issue date looks old, even a year or more — that's completely normal and doesn't mean the information is stale. The one habit to build right now: not every job has a Unit Details P-D-F, but when it exists, you open it. Every time.",
          "video": "clips/2.1.mp4"
        },
        {
          "id": "2.2",
          "title": "Finding and Downloading the Unit Description: Aya and JobDiva",
          "hasVideo": true,
          "objective": "Locate and download the Unit Description document directly in Aya-Lotus One, and find the same document as a shared attachment in JobDiva.",
          "learn": [
            "In Aya-Lotus One, open the job's Job Details tab and look under General for the Unit field — its value (e.g., \"*MHC - 2W Medical - 310050-30-30\") is a hyperlink, not just plain text.",
            "Clicking that Unit link opens the Unit Description document directly, with everything covered in the next lesson: staffing ratios, shift details, schedule requirements, and more. From there you can view, print, or save it like any other document your browser displays.",
            "Since every recruiter working a job would otherwise need their own Aya-Lotus One login just to click that one link, the common practice is to pull a copy into JobDiva instead.",
            "In JobDiva, search for the job by its Job ID or Reference ID, then open the attachment icon on the job record — this opens the Job Attachments dialog, listing the Unit Details and Job Description files already uploaded, each a direct download link, along with who uploaded it and when.",
            "If a job doesn't have these attached yet in JobDiva, use the Add New Attachment button: pull the Unit Description from its link in Aya-Lotus One, and upload it so the rest of the team has it without needing their own Aya-Lotus One login."
          ],
          "skills": [
            "Locating the Unit Description in Aya-Lotus One",
            "Downloading shared attachments in JobDiva"
          ],
          "terms": [
            [
              "Unit Description",
              "The formal name of the document behind the Unit field's hyperlink in Aya-Lotus One — the same document referred to elsewhere in this course as \"Unit Details.\""
            ],
            [
              "Job Attachments (JobDiva)",
              "A dialog on a JobDiva job record listing files uploaded for team-wide access — typically PDF copies of the Aya-Lotus One Unit Description and Job Description, so recruiters don’t need separate Aya-Lotus One logins to read them."
            ]
          ],
          "takeaways": [
            "The Unit Description isn't a separate application — it's one hyperlink away from the job's Job Details tab in Aya-Lotus One.",
            "JobDiva's copy exists purely for team-wide convenience; if it's missing or looks outdated there, the live version is always the one linked from Aya-Lotus One."
          ],
          "check": {
            "q": "Where does the \"Unit Details\" PDF attached in JobDiva actually come from?",
            "options": [
              "It is generated automatically by JobDiva",
              "It's downloaded from the Unit field link in Aya-Lotus One and uploaded to JobDiva for team-wide access",
              "It is emailed by the client directly to JobDiva support",
              "It has no connection to Aya-Lotus One"
            ],
            "answer": 1,
            "explain": "The Unit Description originates in Aya-Lotus One (behind the Unit field’s hyperlink) — JobDiva’s copy is just an uploaded PDF of that same document, kept there so the whole team can access it without an Aya-Lotus One login."
          },
          "video": "clips/2.2.mp4",
          "duration": 82.51,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDcuMzc2CkJlZm9yZSB5b3UgY2FuIHJlYWQgdGhlIFVuaXQgRGVzY3JpcHRpb24sIHlvdSBuZWVkIHRvIGtub3cgd2hlcmUgdG8gYWN0dWFsbHkgZmluZCBpdCwgYW5kIGl0IGxpdmVzIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzLgoKMgowMDowMDowNy4zNzYgLS0+IDAwOjAwOjEyLjgzMwpJbiBBeWEtTG90dXMgT25lLCBvcGVuIHRoZSBqb2IncyBKb2IgRGV0YWlscyB0YWIgYW5kIGxvb2sgdW5kZXIgR2VuZXJhbCBmb3IgdGhlIFVuaXQgZmllbGQuCgozCjAwOjAwOjEyLjgzMyAtLT4gMDA6MDA6MTcuNjMwCkl0cyB2YWx1ZSwgYSB1bml0IGNvZGUgYW5kIGRlcGFydG1lbnQgbmFtZSwgaXMgYSBoeXBlcmxpbmssIG5vdCBqdXN0IHBsYWluIHRleHQuCgo0CjAwOjAwOjE3LjYzMCAtLT4gMDA6MDA6MjcuODg0CkNsaWNrIGl0LCBhbmQgaXQgb3BlbnMgdGhlIFVuaXQgRGVzY3JpcHRpb24gZG9jdW1lbnQgZGlyZWN0bHksIHdpdGggZXZlcnl0aGluZyBjb3ZlcmVkIGluIHRoZSBuZXh0IGxlc3Nvbjogc3RhZmZpbmcgcmF0aW9zLCBzaGlmdCBkZXRhaWxzLCBzY2hlZHVsZSByZXF1aXJlbWVudHMsIGFuZCBtb3JlLgoKNQowMDowMDoyNy44ODQgLS0+IDAwOjAwOjM0LjkwMApGcm9tIHRoZXJlLCB5b3UgY2FuIHZpZXcgaXQgb24gc2NyZWVuLCBwcmludCBpdCwgb3Igc2F2ZSBpdCwgdGhlIHNhbWUgYXMgYW55IG90aGVyIGRvY3VtZW50IHlvdXIgYnJvd3NlciBjYW4gZGlzcGxheS4KCjYKMDA6MDA6MzQuOTAwIC0tPiAwMDowMDo0NS42OTMKTm93LCBzaW5jZSBldmVyeSByZWNydWl0ZXIgd29ya2luZyBhIGpvYiB3b3VsZCBvdGhlcndpc2UgbmVlZCB0aGVpciBvd24gQXlhLUxvdHVzIE9uZSBsb2dpbiBqdXN0IHRvIGNsaWNrIHRoYXQgb25lIGxpbmssIHRoZSBjb21tb24gcHJhY3RpY2UgaXMgdG8gcHVsbCBhIGNvcHkgaW50byBKb2JEaXZhIGluc3RlYWQuCgo3CjAwOjAwOjQ1LjY5MyAtLT4gMDA6MDA6NTMuMjQ5Cldob2V2ZXIgZmlyc3Qgd29ya3MgYSBqb2IgaW4gSm9iRGl2YSwgc2VhcmNoaW5nIGZvciBpdCBieSBKb2IgSUQgb3IgUmVmZXJlbmNlIElELCBvcGVucyB0aGUgYXR0YWNobWVudCBpY29uIG9uIHRoZSBqb2IgcmVjb3JkLgoKOAowMDowMDo1My4yNDkgLS0+IDAwOjAxOjA2LjQ0MQpUaGF0IG9wZW5zIHRoZSBKb2IgQXR0YWNobWVudHMgZGlhbG9nLCBhbmQgdGhlcmUgeW91J2xsIHR5cGljYWxseSBmaW5kIHR3byBmaWxlcyBhbHJlYWR5IHNpdHRpbmcgdGhlcmU6IG9uZSBmb3IgVW5pdCBEZXRhaWxzLCBvbmUgZm9yIHRoZSBKb2IgRGVzY3JpcHRpb24sIGVhY2ggYSBkaXJlY3QgZG93bmxvYWQgbGluaywgYWxvbmcgd2l0aCB3aG8gdXBsb2FkZWQgaXQgYW5kIHdoZW4uCgo5CjAwOjAxOjA2LjQ0MSAtLT4gMDA6MDE6MTEuODk4CklmIGEgam9iIGRvZXNuJ3QgaGF2ZSB0aGVzZSBhdHRhY2hlZCB5ZXQsIHRoYXQncyB3aGF0IHRoZSBBZGQgTmV3IEF0dGFjaG1lbnQgYnV0dG9uIGlzIGZvci4KCjEwCjAwOjAxOjExLjg5OCAtLT4gMDA6MDE6MjIuNTEyClB1bGwgdGhlIFVuaXQgRGVzY3JpcHRpb24gZnJvbSBpdHMgbGluayBpbiBBeWEtTG90dXMgT25lLCBhbmQgdXBsb2FkIGl0IHRvIEpvYkRpdmEgc28gdGhlIHJlc3Qgb2YgdGhlIHRlYW0gaGFzIGl0IHRvbywgd2l0aG91dCBldmVyIG5lZWRpbmcgdG8gbG9nIGludG8gQXlhLUxvdHVzIE9uZSB0aGVtc2VsdmVzLgo=",
          "narration": "Before you can read the Unit Description, you need to know where to actually find it, and it lives in two different places. In Aya-Lotus One, open the job's Job Details tab and look under General for the Unit field. Its value, a unit code and department name, is a hyperlink, not just plain text. Click it, and it opens the Unit Description document directly, with everything covered in the next lesson: staffing ratios, shift details, schedule requirements, and more. From there, you can view it on screen, print it, or save it, the same as any other document your browser can display. Now, since every recruiter working a job would otherwise need their own Aya-Lotus One login just to click that one link, the common practice is to pull a copy into JobDiva instead. Whoever first works a job in JobDiva, searching for it by Job ID or Reference ID, opens the attachment icon on the job record. That opens the Job Attachments dialog, and there you'll typically find two files already sitting there: one for Unit Details, one for the Job Description, each a direct download link, along with who uploaded it and when. If a job doesn't have these attached yet, that's what the Add New Attachment button is for. Pull the Unit Description from its link in Aya-Lotus One, and upload it to JobDiva so the rest of the team has it too, without ever needing to log into Aya-Lotus One themselves."
        },
        {
          "id": "2.3",
          "title": "Unit Description Walkthrough, Part 1: Unit & Facility Identification",
          "hasVideo": true,
          "objective": "Read every identification field at the top of the Unit Description, in order, and know what each one tells you.",
          "learn": [
            "Unit Name combines the unit code, facility name, and specific unit/floor in one line (e.g., \"CC99103 | University Hospital | 12 North - Surgical ICU\") — treat it as the unit's full address inside the hospital.",
            "Physical Unit/Department is a short label (e.g., \"ICU\") for the broad department; Unit Type gets more specific (e.g., \"ICU-SICU,\" meaning surgical intensive care specifically).",
            "Date is when the document was issued or last confirmed — a date a year or more old is normal and doesn't mean the information is stale.",
            "Facility is the full hospital name, followed by City and State — always read these together, since large health systems can have several facilities with similar unit numbers.",
            "Discipline (the profession, e.g., Registered Nurse) and Specialty (e.g., SICU) come next — a note under Specialty warns that it must be set correctly or the certifications and skills sections further down won't display at all.",
            "Clinical Track is an additional, less-often-used classification field. Then four numeric fields — Avg. Daily Census, Visits/Day, Rooms, and Beds — give a quick sense of the unit's size and patient volume."
          ],
          "skills": [
            "Reading Unit Description identification fields",
            "Recognizing the Specialty-field dependency for certifications/skills"
          ],
          "terms": [
            [
              "Avg. Daily Census",
              "The typical number of patients on the unit at any given time — one of four size/volume fields alongside Visits/Day, Rooms, and Beds."
            ]
          ],
          "takeaways": [
            "If Specialty isn't set correctly on the Unit Description, the certifications and skills sections won't even display — it's a dependency, not just another field.",
            "Always read Facility together with City/State — large health systems often have multiple facilities with similar-looking unit codes."
          ],
          "check": {
            "q": "What does the Unit Name field actually combine into one line?",
            "options": [
              "Just the hospital name",
              "The unit code, facility name, and specific unit/floor",
              "Only the floor number",
              "The recruiter's name and the date"
            ],
            "answer": 1,
            "explain": "Unit Name is effectively the unit's full address inside the hospital — unit code, facility, and specific unit/floor together."
          },
          "video": "clips/2.3.mp4",
          "duration": 123.72,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDYuNDg5CkxldCdzIHdhbGsgdGhyb3VnaCB0aGUgVW5pdCBEZXNjcmlwdGlvbiBmcm9tIHRoZSB2ZXJ5IHRvcCwgb25lIGZpZWxkIGF0IGEgdGltZSwgc28gbm90aGluZyBnZXRzIHNraXBwZWQuCgoyCjAwOjAwOjA2LjQ4OSAtLT4gMDA6MDA6MDcuNTQ5CkZpcnN0LCBVbml0IE5hbWUuCgozCjAwOjAwOjA3LjU0OSAtLT4gMDA6MDA6MTguNzc5ClRoaXMgY29tYmluZXMgdGhyZWUgdGhpbmdzIGluIG9uZSBsaW5lOiB0aGUgdW5pdCBjb2RlLCB0aGUgZmFjaWxpdHkgbmFtZSwgYW5kIHRoZSBzcGVjaWZpYyB1bml0IG9yIGZsb29yLCBmb3IgZXhhbXBsZSwgQy1DLTktOS0xLTAtMywgVW5pdmVyc2l0eSBIb3NwaXRhbCwgMTIgTm9ydGgsIFN1cmdpY2FsIEktQy1VLgoKNAowMDowMDoxOC43NzkgLS0+IDAwOjAwOjIyLjM5OApUcmVhdCB0aGlzIGFzIHRoZSB1bml0J3MgZnVsbCBhZGRyZXNzIGluc2lkZSB0aGUgaG9zcGl0YWwuCgo1CjAwOjAwOjIyLjM5OCAtLT4gMDA6MDA6MjkuNjk4Ck5leHQsIFBoeXNpY2FsIFVuaXQsIG9yIERlcGFydG1lbnQsIGEgc2hvcnQgbGFiZWwgbGlrZSBJLUMtVSB0ZWxsaW5nIHlvdSB3aGljaCBicm9hZCBkZXBhcnRtZW50IHRoaXMgdW5pdCBzaXRzIHVuZGVyLgoKNgowMDowMDoyOS42OTggLS0+IDAwOjAwOjM4Ljk5NApUaGVuLCBVbml0IFR5cGUsIHdoaWNoIGdldHMgbW9yZSBzcGVjaWZpYywgc29tZXRoaW5nIGxpa2UgSS1DLVUgZGFzaCBTLUktQy1VLCBtZWFuaW5nIGEgc3VyZ2ljYWwgaW50ZW5zaXZlIGNhcmUgdW5pdCBzcGVjaWZpY2FsbHksIG5vdCBnZW5lcmFsIEktQy1VLgoKNwowMDowMDozOC45OTQgLS0+IDAwOjAwOjQwLjA1NQpCZWxvdyB0aGF0LCBEYXRlLgoKOAowMDowMDo0MC4wNTUgLS0+IDAwOjAwOjQzLjk4NQpUaGlzIGlzIHdoZW4gdGhlIFVuaXQgRGVzY3JpcHRpb24gd2FzIGlzc3VlZCBvciBsYXN0IGNvbmZpcm1lZC4KCjkKMDA6MDA6NDMuOTg1IC0tPiAwMDowMDo0OS4xNjQKRG9uJ3QgYmUgYWxhcm1lZCBpZiBpdCdzIGEgeWVhciBvciBtb3JlIG9sZDsgdGhhdCBhbG9uZSBkb2Vzbid0IG1lYW4gaXQncyBvdXRkYXRlZC4KCjEwCjAwOjAwOjQ5LjE2NCAtLT4gMDA6MDA6NTQuNzE2ClRoZW4gRmFjaWxpdHksIHNwZWxsZWQgb3V0IGluIGZ1bGwsIHRoZSBhY3R1YWwgaG9zcGl0YWwgbmFtZSwgZm9sbG93ZWQgYnkgQ2l0eSBhbmQgU3RhdGUuCgoxMQowMDowMDo1NC43MTYgLS0+IDAwOjAxOjAzLjM4OQpBbHdheXMgcmVhZCB0aGUgZnVsbCBmYWNpbGl0eSBuYW1lIGFuZCBsb2NhdGlvbiB0b2dldGhlciwgc2luY2UgbGFyZ2UgaGVhbHRoIHN5c3RlbXMgY2FuIGhhdmUgc2V2ZXJhbCBmYWNpbGl0aWVzIHdpdGggc2ltaWxhciB1bml0IG51bWJlcnMuCgoxMgowMDowMTowMy4zODkgLS0+IDAwOjAxOjA5LjI1MwpEaXNjaXBsaW5lIGlzIG5leHQsIHRoZSBwcm9mZXNzaW9uIHRoaXMgdW5pdCBkZXNjcmlwdGlvbiBhcHBsaWVzIHRvLCBzdWNoIGFzIFJlZ2lzdGVyZWQgTnVyc2UuCgoxMwowMDowMTowOS4yNTMgLS0+IDAwOjAxOjEzLjkzMwpSaWdodCBuZXh0IHRvIGl0LCBTcGVjaWFsdHksIHRoZSBzcGVjaWZpYyBjbGluaWNhbCBzcGVjaWFsdHksIGxpa2UgUy1JLUMtVS4KCjE0CjAwOjAxOjEzLjkzMyAtLT4gMDA6MDE6MjMuNzI4ClBheSBhdHRlbnRpb24gdG8gYSBub3RlIHRoYXQgb2Z0ZW4gYXBwZWFycyByaWdodCB1bmRlciBTcGVjaWFsdHk6IGl0J3MgcmVxdWlyZWQganVzdCB0byBzZWUgdGhlIGNlcnRpZmljYXRpb25zIGFuZCBza2lsbHMgc2VjdGlvbnMgZnVydGhlciBkb3duIHRoZSBkb2N1bWVudC4KCjE1CjAwOjAxOjIzLjcyOCAtLT4gMDA6MDE6MjguMDk1CklmIHNwZWNpYWx0eSBpc24ndCBzZXQgY29ycmVjdGx5LCB0aG9zZSBzZWN0aW9ucyB3b24ndCBkaXNwbGF5IGF0IGFsbC4KCjE2CjAwOjAxOjI4LjA5NSAtLT4gMDA6MDE6MzUuNzY5CkFmdGVyIHRoYXQsIENsaW5pY2FsIFRyYWNrLCBhbiBhZGRpdGlvbmFsIGNsYXNzaWZpY2F0aW9uIGZpZWxkLCB1c2VkIGxlc3Mgb2Z0ZW4gYnV0IHN0aWxsIHdvcnRoIGNoZWNraW5nIGlmIGl0J3MgZmlsbGVkIGluLgoKMTcKMDA6MDE6MzUuNzY5IC0tPiAwMDowMTo0Ny40OTkKVGhlbiBmb3VyIG51bWVyaWMgZmllbGRzIGluIGEgcm93OiBBdmVyYWdlIERhaWx5IENlbnN1cywgbWVhbmluZyB0aGUgdHlwaWNhbCBudW1iZXIgb2YgcGF0aWVudHMgb24gdGhlIHVuaXQgYXQgYW55IGdpdmVuIHRpbWU7IFZpc2l0cyBwZXIgRGF5OyBSb29tczsgYW5kIEJlZHMsIHRoZSB1bml0J3MgYWN0dWFsIGJlZCBjb3VudC4KCjE4CjAwOjAxOjQ3LjQ5OSAtLT4gMDA6MDE6NTIuNjE1ClRvZ2V0aGVyLCB0aGVzZSBmb3VyIGdpdmUgeW91IGEgcXVpY2sgc2Vuc2Ugb2YgdGhlIHVuaXQncyBzaXplIGFuZCBwYXRpZW50IHZvbHVtZS4KCjE5CjAwOjAxOjUyLjYxNSAtLT4gMDA6MDE6NTQuOTIzClRoYXQncyB0aGUgZnVsbCBpZGVudGlmaWNhdGlvbiBibG9jay4KCjIwCjAwOjAxOjU0LjkyMyAtLT4gMDA6MDE6NTkuMTAzCkV2ZXJ5IG90aGVyIHNlY3Rpb24gb2YgdGhlIFVuaXQgRGVzY3JpcHRpb24gYnVpbGRzIG9uIHRoZXNlIGJhc2ljcy4KCjIxCjAwOjAxOjU5LjEwMyAtLT4gMDA6MDI6MDMuNzIwCk5leHQsIHdlJ2xsIG1vdmUgaW50byBwYXRpZW50IHBvcHVsYXRpb24sIHN0YWZmaW5nIHJhdGlvcywgYW5kIHNjaGVkdWxpbmcuCg==",
          "narration": "Let's walk through the Unit Description from the very top, one field at a time, so nothing gets skipped. First, Unit Name. This combines three things in one line: the unit code, the facility name, and the specific unit or floor, for example, C-C-9-9-1-0-3, University Hospital, 12 North, Surgical I-C-U. Treat this as the unit's full address inside the hospital. Next, Physical Unit, or Department, a short label like I-C-U telling you which broad department this unit sits under. Then, Unit Type, which gets more specific, something like I-C-U dash S-I-C-U, meaning a surgical intensive care unit specifically, not general I-C-U. Below that, Date. This is when the Unit Description was issued or last confirmed. Don't be alarmed if it's a year or more old; that alone doesn't mean it's outdated. Then Facility, spelled out in full, the actual hospital name, followed by City and State. Always read the full facility name and location together, since large health systems can have several facilities with similar unit numbers. Discipline is next, the profession this unit description applies to, such as Registered Nurse. Right next to it, Specialty, the specific clinical specialty, like S-I-C-U. Pay attention to a note that often appears right under Specialty: it's required just to see the certifications and skills sections further down the document. If specialty isn't set correctly, those sections won't display at all. After that, Clinical Track, an additional classification field, used less often but still worth checking if it's filled in. Then four numeric fields in a row: Average Daily Census, meaning the typical number of patients on the unit at any given time; Visits per Day; Rooms; and Beds, the unit's actual bed count. Together, these four give you a quick sense of the unit's size and patient volume. That's the full identification block. Every other section of the Unit Description builds on these basics. Next, we'll move into patient population, staffing ratios, and scheduling."
        },
        {
          "id": "2.4",
          "title": "Unit Description Walkthrough, Part 2: Patient Population, Ratios, Shifts & Scheduling",
          "hasVideo": true,
          "objective": "Read the Patient Age Group, Staffing Ratios, Shift Details, Schedule Requirements, and Unit Systems fields in order.",
          "learn": [
            "Patient Age Group is six checkboxes (Neonates, Infants, Pediatrics, Adolescents, Adults, Geriatrics) defining the population this unit actually treats — a candidate whose real experience doesn't match the checked boxes is not a fit.",
            "Staffing Ratios gives three separate numbers — Days, Nights, Weekends — each written as 1-to-a-number; these can differ from each other, so don't assume one applies to all three.",
            "Shift Details is a table: shift-length/role rows (8 hrs, 10 hrs, 12 hrs, LVN, Tech, CNA) down the side, Day/PM/NOCS start-end times across the top, and a Rotating Shifts yes/no on the right of each row.",
            "Schedule Requirements covers Call Required (yes/no + notes), Float Required (yes/no + notes, e.g. \"when census is down\"), Weekend Coverage (Every Other/Every Third), # Weekend Shifts per Contract, and Scheduling Type (Block/Self/Other).",
            "Unit Systems covers Medication System (Pyxis/Accudose/Omnicell checkboxes) and Documentation system (a text field, most often Epic), plus an Other/Notes field."
          ],
          "skills": [
            "Reading staffing ratio and shift-detail tables",
            "Reading Schedule Requirements and Unit Systems fields"
          ],
          "terms": [
            [
              "NOCS",
              "Shorthand used in the Shift Details table for night shifts, alongside Day and PM columns."
            ]
          ],
          "takeaways": [
            "Staffing ratios can differ between days, nights, and weekends — check all three individually, never assume.",
            "A blank or unchecked field in Schedule Requirements (like Call Required) defaults to no, not \"unspecified.\""
          ],
          "check": {
            "q": "A unit's Staffing Ratios show Days 1:6, Nights 1:6, Weekends 1:5. What should you do?",
            "options": [
              "Assume weekends are also 1:6 since days and nights match",
              "Treat each ratio individually — the weekend ratio (1:5) applies specifically to weekend shifts",
              "Ignore the weekend number since it's unusual",
              "Use only the days ratio for the whole submission"
            ],
            "answer": 1,
            "explain": "Days, Nights, and Weekends are separate fields and can genuinely differ — always read and apply each one individually."
          },
          "video": "clips/2.4.mp4",
          "duration": 140.66,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDcuOTIwCk5vdyBsZXQncyBjb250aW51ZSBpbnRvIHRoZSBuZXh0IGJsb2NrIG9mIHRoZSBVbml0IERlc2NyaXB0aW9uOiBwYXRpZW50IHBvcHVsYXRpb24sIHJhdGlvcywgc2hpZnRzLCBhbmQgc2NoZWR1bGluZyBydWxlcy4KCjIKMDA6MDA6MDcuOTIwIC0tPiAwMDowMDoxNS4wNTQKRmlyc3QsIFBhdGllbnQgQWdlIEdyb3VwLCBzaXggY2hlY2tib3hlczogTmVvbmF0ZXMsIEluZmFudHMsIFBlZGlhdHJpY3MsIEFkb2xlc2NlbnRzLCBBZHVsdHMsIGFuZCBHZXJpYXRyaWNzLgoKMwowMDowMDoxNS4wNTQgLS0+IDAwOjAwOjIwLjAyOQpXaGljaGV2ZXIgYm94ZXMgYXJlIGNoZWNrZWQgZGVmaW5lIHRoZSBwb3B1bGF0aW9uIHRoaXMgdW5pdCBhY3R1YWxseSB0cmVhdHMuCgo0CjAwOjAwOjIwLjAyOSAtLT4gMDA6MDA6MjkuMDYxCkEgY2FuZGlkYXRlIHdob3NlIHJlYWwgZXhwZXJpZW5jZSBkb2Vzbid0IG1hdGNoIHRoZXNlIGNoZWNrZWQgYm94ZXMgaXMgbm90IGEgZml0LCBubyBtYXR0ZXIgaG93IHN0cm9uZyB0aGUgcmVzdCBvZiB0aGVpciBiYWNrZ3JvdW5kIGxvb2tzLgoKNQowMDowMDoyOS4wNjEgLS0+IDAwOjAwOjM4Ljc0OQpSaWdodCBuZXh0IHRvIGl0LCBTdGFmZmluZyBSYXRpb3MsIGJyb2tlbiBpbnRvIHRocmVlIHNlcGFyYXRlIG51bWJlcnM6IERheXMsIE5pZ2h0cywgYW5kIFdlZWtlbmRzLCBlYWNoIHdyaXR0ZW4gYXMgb25lLXRvLWEtbnVtYmVyLCBsaWtlIG9uZS10by1zaXguCgo2CjAwOjAwOjM4Ljc0OSAtLT4gMDA6MDA6NDUuMTYzClRoZXNlIGNhbiBkaWZmZXIgZnJvbSBlYWNoIG90aGVyLCBzbyBkb24ndCBhc3N1bWUgdGhlIGRheSByYXRpbyBhcHBsaWVzIHRvIG5pZ2h0cyBvciB3ZWVrZW5kcyB0b28uCgo3CjAwOjAwOjQ1LjE2MyAtLT4gMDA6MDA6NDguMzcwCkJlbG93IHRoYXQgaXMgU2hpZnQgRGV0YWlscywgbGFpZCBvdXQgYXMgYSB0YWJsZS4KCjgKMDA6MDA6NDguMzcwIC0tPiAwMDowMDo1Ni4yMjUKRG93biB0aGUgbGVmdCBzaWRlIGFyZSBzaGlmdC1sZW5ndGggcm93czogOCBob3VycywgMTAgaG91cnMsIDEyIGhvdXJzLCB0aGVuIHJvd3MgZm9yIHNwZWNpZmljIHJvbGVzLCBMLVYtTiwgVGVjaCwgQy1OLUEuCgo5CjAwOjAwOjU2LjIyNSAtLT4gMDA6MDE6MDMuNTU2CkFjcm9zcyB0aGUgdG9wIGFyZSB0aHJlZSBzaGlmdCB3aW5kb3dzLCBEYXksIFAtTSwgYW5kIE4tTy1DLVMsIHNob3J0IGZvciBuaWdodHMsIGVhY2ggd2l0aCBhIFN0YXJ0IGFuZCBFbmQgdGltZS4KCjEwCjAwOjAxOjAzLjU1NiAtLT4gMDA6MDE6MTUuMzM3CkEgY2hlY2tib3ggb24gdGhlIGxlZnQgbWFya3Mgd2hpY2ggc2hpZnQgbGVuZ3RocyBhbmQgcm9sZXMgYWN0dWFsbHkgYXBwbHkgdG8gdGhpcyB1bml0LCBhbmQgdGhlIFN0YXJ0IGFuZCBFbmQgY29sdW1ucyBmaWxsIGluIHRoZSBhY3R1YWwgY2xvY2sgdGltZXMgZm9yIHdoaWNoZXZlciByb3dzIGFyZSBjaGVja2VkLgoKMTEKMDA6MDE6MTUuMzM3IC0tPiAwMDowMToyNC4zMDQKT24gdGhlIGZhciByaWdodCBvZiBlYWNoIHJvdywgUm90YXRpbmcgU2hpZnRzLCB5ZXMgb3Igbm8sIHRlbGxzIHlvdSB3aGV0aGVyIHN0YWZmIG9uIHRoYXQgcm93IGFyZSBleHBlY3RlZCB0byByb3RhdGUgYmV0d2VlbiBzaGlmdCB0eXBlcy4KCjEyCjAwOjAxOjI0LjMwNCAtLT4gMDA6MDE6MjcuNzczCk5leHQsIFNjaGVkdWxlIFJlcXVpcmVtZW50cywgd2hpY2ggaGFzIHNldmVyYWwgcGFydHMuCgoxMwowMDowMToyNy43NzMgLS0+IDAwOjAxOjMxLjQzOQpDYWxsIFJlcXVpcmVkLCB5ZXMgb3Igbm8sIHdpdGggYSBub3RlcyBmaWVsZCBuZXh0IHRvIGl0LgoKMTQKMDA6MDE6MzEuNDM5IC0tPiAwMDowMTo0MC40NzEKRmxvYXQgUmVxdWlyZWQsIHllcyBvciBubywgYWxzbyB3aXRoIGl0cyBvd24gbm90ZXMgZmllbGQsIHdoaWNoIG9mdGVuIGV4cGxhaW5zIHRoZSBzcGVjaWZpYyBjb25kaXRpb24sIHNvbWV0aGluZyBsaWtlIHdoZW4gY2Vuc3VzIGlzIGRvd24uCgoxNQowMDowMTo0MC40NzEgLS0+IDAwOjAxOjQ0LjAwNgpXZWVrZW5kIENvdmVyYWdlLCBldmVyeSBvdGhlciwgb3IgZXZlcnkgdGhpcmQgd2Vla2VuZC4KCjE2CjAwOjAxOjQ0LjAwNiAtLT4gMDA6MDE6NDcuOTMzCk51bWJlciBvZiBXZWVrZW5kIFNoaWZ0cyBwZXIgQ29udHJhY3QsIGEgcGxhaW4gbnVtYmVyIGZpZWxkLgoKMTcKMDA6MDE6NDcuOTMzIC0tPiAwMDowMTo1NC4yODIKQW5kIFNjaGVkdWxpbmcgVHlwZSwgQmxvY2ssIFNlbGYsIG9yIE90aGVyLCBkZXNjcmliaW5nIGhvdyBzaGlmdHMgYWN0dWFsbHkgZ2V0IGFzc2lnbmVkIHRvIHN0YWZmLgoKMTgKMDA6MDE6NTQuMjgyIC0tPiAwMDowMTo1NS43MjIKRmluYWxseSwgVW5pdCBTeXN0ZW1zLgoKMTkKMDA6MDE6NTUuNzIyIC0tPiAwMDowMjowMy45MDQKTWVkaWNhdGlvbiBTeXN0ZW0sIGNoZWNrYm94ZXMgZm9yIFB5eGlzLCBBY2N1ZG9zZSwgb3IgT21uaWNlbGwsIHRlbGxpbmcgeW91IHdoaWNoIG1lZGljYXRpb24tZGlzcGVuc2luZyBzeXN0ZW0gdGhlIHVuaXQgdXNlcy4KCjIwCjAwOjAyOjAzLjkwNCAtLT4gMDA6MDI6MDkuMjA2CkRvY3VtZW50YXRpb24gc3lzdGVtLCBhIHRleHQgZmllbGQgbmFtaW5nIHRoZSBjaGFydGluZyBwbGF0Zm9ybSwgbW9zdCBvZnRlbiBFcGljLgoKMjEKMDA6MDI6MDkuMjA2IC0tPiAwMDowMjoxNC40NDIKQW5kIGFuIE90aGVyLCBvciBOb3RlcyBmaWVsZCBmb3IgYW55dGhpbmcgdGhhdCBkb2Vzbid0IGZpdCB0aGUgc3RhbmRhcmQgb3B0aW9ucy4KCjIyCjAwOjAyOjE0LjQ0MiAtLT4gMDA6MDI6MTYuOTI5ClRoYXQgY292ZXJzIGV2ZXJ5IGZpZWxkIGluIHRoaXMgYmxvY2suCgoyMwowMDowMjoxNi45MjkgLS0+IDAwOjAyOjIwLjY2MApOZXh0LCB3ZSdsbCBtb3ZlIGludG8gY2VydGlmaWNhdGlvbnMgYW5kIHRoZSBza2lsbHMgbGlzdC4K",
          "narration": "Now let's continue into the next block of the Unit Description: patient population, ratios, shifts, and scheduling rules. First, Patient Age Group, six checkboxes: Neonates, Infants, Pediatrics, Adolescents, Adults, and Geriatrics. Whichever boxes are checked define the population this unit actually treats. A candidate whose real experience doesn't match these checked boxes is not a fit, no matter how strong the rest of their background looks. Right next to it, Staffing Ratios, broken into three separate numbers: Days, Nights, and Weekends, each written as one-to-a-number, like one-to-six. These can differ from each other, so don't assume the day ratio applies to nights or weekends too. Below that is Shift Details, laid out as a table. Down the left side are shift-length rows: 8 hours, 10 hours, 12 hours, then rows for specific roles, L-V-N, Tech, C-N-A. Across the top are three shift windows, Day, P-M, and N-O-C-S, short for nights, each with a Start and End time. A checkbox on the left marks which shift lengths and roles actually apply to this unit, and the Start and End columns fill in the actual clock times for whichever rows are checked. On the far right of each row, Rotating Shifts, yes or no, tells you whether staff on that row are expected to rotate between shift types. Next, Schedule Requirements, which has several parts. Call Required, yes or no, with a notes field next to it. Float Required, yes or no, also with its own notes field, which often explains the specific condition, something like when census is down. Weekend Coverage, every other, or every third weekend. Number of Weekend Shifts per Contract, a plain number field. And Scheduling Type, Block, Self, or Other, describing how shifts actually get assigned to staff. Finally, Unit Systems. Medication System, checkboxes for Pyxis, Accudose, or Omnicell, telling you which medication-dispensing system the unit uses. Documentation system, a text field naming the charting platform, most often Epic. And an Other, or Notes field for anything that doesn't fit the standard options. That covers every field in this block. Next, we'll move into certifications and the skills list."
        },
        {
          "id": "2.5",
          "title": "Unit Description Walkthrough, Part 3: Certifications & Skills",
          "hasVideo": true,
          "objective": "Read the Certifications and Skills sections category by category, and apply the preferred/required asterisk convention correctly.",
          "learn": [
            "Certifications lists the required credentials (e.g., ACLS, BLS, NIHSS) with a note: items marked with an asterisk are preferred, not required — unmarked items are required.",
            "Skills are grouped by clinical category — for example Respiratory (BiPAP/CPAP management*, chest tubes, nasal cannula, oral suctioning*), IV Therapy/Phlebotomy (blood product administration*, peripheral line care*, PICC line management*, starting/maintaining IVs — required, not preferred), Gastrointestinal, Cardiac Monitoring and Emergency Response, Professional Knowledge and Skills, Work Settings (Med/Surg, MS/Tele, Telemetry*), Genitourinary/Renal, Plastics, and an Additional Skills line for anything unit-specific.",
            "The same asterisk convention (preferred vs. required) applies throughout every category — read it consistently rather than assuming it only applies to Certifications.",
            "As covered earlier in this course, Aya-Lotus One reviewers treat even 'preferred' skills and certifications as something they expect a candidate to actually have — the asterisk isn't permission to skip it."
          ],
          "skills": [
            "Reading grouped skills lists",
            "Applying the preferred/required asterisk convention consistently"
          ],
          "terms": [],
          "takeaways": [
            "The asterisk convention (marked = preferred, unmarked = required) applies to both Certifications and every category under Skills.",
            "\"Preferred\" still functions as an expectation at Aya-Lotus One — treat it the same as required when screening a candidate."
          ],
          "check": {
            "q": "On the Unit Description, a skill has no asterisk next to it. What does that mean?",
            "options": [
              "It's optional and can be skipped",
              "It is required, not merely preferred",
              "It only applies to travelers",
              "It means the field is broken"
            ],
            "answer": 1,
            "explain": "Items marked with an asterisk are preferred; unmarked items are required — the convention holds across Certifications and every Skills category."
          },
          "video": "clips/2.5.mp4",
          "duration": 140.42,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDIuNzE4Ck5vdyBsZXQncyBjb3ZlciBjZXJ0aWZpY2F0aW9ucyBhbmQgc2tpbGxzLgoKMgowMDowMDowMi43MTggLS0+IDAwOjAwOjA5LjUxMgpUaGlzIHNlY3Rpb24gaGFzIHRoZSBtb3N0IGluZGl2aWR1YWwgaXRlbXMsIHNvIHdlJ2xsIGdvIHRocm91Z2ggaXQgYnkgY2F0ZWdvcnksIGJ1dCBub3RoaW5nIGdldHMgc2tpcHBlZC4KCjMKMDA6MDA6MDkuNTEyIC0tPiAwMDowMDoxMC45MzYKRmlyc3QsIENlcnRpZmljYXRpb25zLgoKNAowMDowMDoxMC45MzYgLS0+IDAwOjAwOjE0LjMwMQpUaGlzIGpvYiBsaXN0cyB0aHJlZTogQS1DLUwtUywgQi1MLVMsIGFuZCBOLUktSC1TLVMuCgo1CjAwOjAwOjE0LjMwMSAtLT4gMDA6MDA6MjAuODM3Ck5vdGljZSB0aGUgbm90ZSByaWdodCB1bmRlcm5lYXRoOiBjZXJ0aWZpY2F0aW9ucyBtYXJrZWQgd2l0aCBhbiBhc3RlcmlzayBhcmUgcHJlZmVycmVkLCBub3QgcmVxdWlyZWQuCgo2CjAwOjAwOjIwLjgzNyAtLT4gMDA6MDA6MjguMDg0CkhlcmUsIEEtQy1MLVMgaGFzIHRoZSBhc3RlcmlzaywgbWVhbmluZyBpdCdzIHByZWZlcnJlZDsgQi1MLVMgYW5kIE4tSS1ILVMtUywgd2l0aG91dCB0aGUgYXN0ZXJpc2ssIGFyZSByZXF1aXJlZC4KCjcKMDA6MDA6MjguMDg0IC0tPiAwMDowMDozNi4zNjcKVGhhdCBhc3RlcmlzayBjb252ZW50aW9uLCBwcmVmZXJyZWQgdmVyc3VzIHJlcXVpcmVkLCBjYXJyaWVzIHRocm91Z2ggdGhlIGVudGlyZSBTa2lsbHMgc2VjdGlvbiB0b28sIHNvIGtlZXAgaXQgaW4gbWluZCBhcyB3ZSBnby4KCjgKMDA6MDA6MzYuMzY3IC0tPiAwMDowMDozOC45NTUKU2tpbGxzIGFyZSBncm91cGVkIGJ5IGNsaW5pY2FsIGNhdGVnb3J5LgoKOQowMDowMDozOC45NTUgLS0+IDAwOjAwOjUwLjIxNQpVbmRlciBSZXNwaXJhdG9yeTogQmlQQVAgYW5kIENQQVAgbWFuYWdlbWVudCwgbWFya2VkIHByZWZlcnJlZDsgY2hlc3QgdHViZXMsIHNwZWNpZmljYWxseSBFbWVyc29uIGFuZCBQbGV1ckV2YWMgc3lzdGVtczsgbmFzYWwgY2FubnVsYTsgYW5kIG9yYWwgc3VjdGlvbmluZywgbWFya2VkIHByZWZlcnJlZC4KCjEwCjAwOjAwOjUwLjIxNSAtLT4gMDA6MDE6MDQuNzEwClVuZGVyIEktViB0aGVyYXB5IGFuZCBQaGxlYm90b215OiBibG9vZCBwcm9kdWN0IGFkbWluaXN0cmF0aW9uLCBwcmVmZXJyZWQ7IHBlcmlwaGVyYWwgbGluZSBjYXJlIGFuZCBtYW5hZ2VtZW50LCBwcmVmZXJyZWQ7IFBJQ0MgbGluZSBtYW5hZ2VtZW50LCBwcmVmZXJyZWQ7IGFuZCBzdGFydGluZyBhbmQgbWFpbnRhaW5pbmcgSS1Wcywgd2hpY2ggaXMgcmVxdWlyZWQsIG5vdCBwcmVmZXJyZWQuCgoxMQowMDowMTowNC43MTAgLS0+IDAwOjAxOjEyLjk5MwpVbmRlciBHYXN0cm9pbnRlc3RpbmFsOiBjb2xvc3RvbXkgYW5kIGlsZW9zdG9teSBtYW5hZ2VtZW50IGFuZCBjYXJlLCBwcmVmZXJyZWQ7IGFuZCBmZWVkaW5nIHR1YmUgY2FyZSBhbmQgbWFuYWdlbWVudCwgcHJlZmVycmVkLgoKMTIKMDA6MDE6MTIuOTkzIC0tPiAwMDowMToyMy4zNDYKVW5kZXIgQ2FyZGlhYyBNb25pdG9yaW5nIGFuZCBFbWVyZ2VuY3kgUmVzcG9uc2U6IGludGVycHJldGF0aW9uIG9mIGR5c3JoeXRobWlhczsgbWFuYWdlbWVudCBvZiBkeXNyaHl0aG1pYXM7IGFuZCB1c2Ugb2YgUmFwaWQgUmVzcG9uc2Ugb3IgQ29kZSB0ZWFtcywgcHJlZmVycmVkLgoKMTMKMDA6MDE6MjMuMzQ2IC0tPiAwMDowMTozMS40MzUKVW5kZXIgUHJvZmVzc2lvbmFsIEtub3dsZWRnZSBhbmQgU2tpbGxzOiBpc29sYXRpb24gcHJlY2F1dGlvbnMgYW5kIFAtUC1FOyBhbmQgd291bmQgY2FyZSBhbmQgd291bmQgdmFjIG1hbmFnZW1lbnQsIHByZWZlcnJlZC4KCjE0CjAwOjAxOjMxLjQzNSAtLT4gMDA6MDE6NDAuODgyClVuZGVyIFdvcmsgU2V0dGluZ3M6IE1lZC1TdXJnOyBNLVMgc2xhc2ggVGVsZTsgYW5kIFRlbGVtZXRyeSwgcHJlZmVycmVkLCB0ZWxsaW5nIHlvdSB3aGljaCBjYXJlIHNldHRpbmdzIHRoZSBjYW5kaWRhdGUgbmVlZHMgZGlyZWN0IGV4cGVyaWVuY2UgaW4uCgoxNQowMDowMTo0MC44ODIgLS0+IDAwOjAxOjQ4LjAwMApVbmRlciBHZW5pdG91cmluYXJ5IGFuZCBSZW5hbDogcHJlLSBhbmQgcG9zdC1oZW1vZGlhbHlzaXMgbWFuYWdlbWVudCwgcHJlZmVycmVkOyBhbmQgcmVuYWwgZmFpbHVyZSwgcHJlZmVycmVkLgoKMTYKMDA6MDE6NDguMDAwIC0tPiAwMDowMTo1MC43ODMKVW5kZXIgUGxhc3RpY3M6IHN1cmdpY2FsIGRyYWlucywgcHJlZmVycmVkLgoKMTcKMDA6MDE6NTAuNzgzIC0tPiAwMDowMTo1OS41ODMKQW5kIGZpbmFsbHksIGFuIEFkZGl0aW9uYWwgU2tpbGxzIGxpbmUgZm9yIGFueXRoaW5nIGVsc2Ugc3BlY2lmaWMgdG8gdGhpcyB1bml0LCBoZXJlLCBpdCdzIGR5c3JoeXRobWlhIGludGVycHJldGF0aW9uIGFuZCBFLUstRyB0ZXN0aW5nLgoKMTgKMDA6MDE6NTkuNTgzIC0tPiAwMDowMjoxNi4yNzkKVHdvIHRoaW5ncyB0byBjYXJyeSBmb3J3YXJkIGZyb20gdGhpcyB3aG9sZSBzZWN0aW9uOiBmaXJzdCwgdGhhdCBhc3RlcmlzayBtYXJrcyBwcmVmZXJyZWQsIG5vdCByZXF1aXJlZCwgYW5kIHNlY29uZCwgYXMgeW91IGFscmVhZHkga25vdyBmcm9tIGVhcmxpZXIgaW4gdGhpcyBjb3Vyc2UsIEF5YS1Mb3R1cyBPbmUgcmV2aWV3ZXJzIHRlbmQgdG8gdHJlYXQgZXZlbiBwcmVmZXJyZWQgc2tpbGxzIGFzIHNvbWV0aGluZyB0aGV5IGV4cGVjdCB0byBzZWUuCgoxOQowMDowMjoxNi4yNzkgLS0+IDAwOjAyOjIwLjQyMApEb24ndCB0cmVhdCB0aGUgYXN0ZXJpc2sgYXMgcGVybWlzc2lvbiB0byBza2lwIGEgc2tpbGwgZW50aXJlbHkuCg==",
          "narration": "Now let's cover certifications and skills. This section has the most individual items, so we'll go through it by category, but nothing gets skipped. First, Certifications. This job lists three: A-C-L-S, B-L-S, and N-I-H-S-S. Notice the note right underneath: certifications marked with an asterisk are preferred, not required. Here, A-C-L-S has the asterisk, meaning it's preferred; B-L-S and N-I-H-S-S, without the asterisk, are required. That asterisk convention, preferred versus required, carries through the entire Skills section too, so keep it in mind as we go. Skills are grouped by clinical category. Under Respiratory: BiPAP and CPAP management, marked preferred; chest tubes, specifically Emerson and PleurEvac systems; nasal cannula; and oral suctioning, marked preferred. Under I-V therapy and Phlebotomy: blood product administration, preferred; peripheral line care and management, preferred; PICC line management, preferred; and starting and maintaining I-Vs, which is required, not preferred. Under Gastrointestinal: colostomy and ileostomy management and care, preferred; and feeding tube care and management, preferred. Under Cardiac Monitoring and Emergency Response: interpretation of dysrhythmias; management of dysrhythmias; and use of Rapid Response or Code teams, preferred. Under Professional Knowledge and Skills: isolation precautions and P-P-E; and wound care and wound vac management, preferred. Under Work Settings: Med-Surg; M-S slash Tele; and Telemetry, preferred, telling you which care settings the candidate needs direct experience in. Under Genitourinary and Renal: pre- and post-hemodialysis management, preferred; and renal failure, preferred. Under Plastics: surgical drains, preferred. And finally, an Additional Skills line for anything else specific to this unit, here, it's dysrhythmia interpretation and E-K-G testing. Two things to carry forward from this whole section: first, that asterisk marks preferred, not required, and second, as you already know from earlier in this course, Aya-Lotus One reviewers tend to treat even preferred skills as something they expect to see. Don't treat the asterisk as permission to skip a skill entirely."
        },
        {
          "id": "2.6",
          "title": "Unit Description Walkthrough, Part 4: Work Experience, Travel & Program Details",
          "hasVideo": true,
          "objective": "Read the Work Experience and Other Information sections field by field, closing out the full Unit Description walkthrough.",
          "learn": [
            "Work Experience covers Previous Charge Experience (preferred/required), Years of Experience Required (a literal number), Patient Ratio Experience Required (1-to-a-number), and Electronic Documentation (preferred/required + system, usually Epic).",
            "Five more preferred/required fields follow: Teaching Hospital Experience, Community Hospital Experience, LTAC Experience, Trauma Level I Experience, and Trauma Level II Experience.",
            "Other Information covers Unit Accepts 1st Time Traveler (yes/no + notes), Orientation Details (# of hours — the figure that overrides the Job Description if they disagree), Scrubs (Provided checkbox + Color), Pre-Approved Time-Off Per Contract (1 Request/2 Requests/None), and Program Type (Pre-Screen/Client Offer/Auto Offer/Not Enrolled).",
            "A final free-text Other Information box catches anything that doesn't fit elsewhere, followed by a standing disclaimer: the client represents the information is complete, accurate, and up to date, and is responsible for keeping it that way — which is why anything that looks off should be raised, not worked around."
          ],
          "skills": [
            "Reading Work Experience requirement fields",
            "Reading traveler, orientation, scrubs, RTO, and program-type fields"
          ],
          "terms": [
            [
              "Pre-Approved Time-Off Per Contract",
              "A Unit Description field (1 Request/2 Requests/None) stating how many separate RTO windows this specific unit allows — checked before applying the course's one-block RTO rule."
            ]
          ],
          "takeaways": [
            "Every Work Experience field is a genuine requirement to verify against the resume — and remember, \"preferred\" here is still treated as required.",
            "This closes out every field in the Unit Description — the rest of the course is about applying what each one means in practice."
          ],
          "video": "clips/2.6.mp4",
          "duration": 132.24,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDYuMTYzCkxldCdzIGZpbmlzaCB0aGUgVW5pdCBEZXNjcmlwdGlvbiB3aXRoIGl0cyBsYXN0IHR3byBzZWN0aW9uczogV29yayBFeHBlcmllbmNlLCBhbmQgT3RoZXIgSW5mb3JtYXRpb24uCgoyCjAwOjAwOjA2LjE2MyAtLT4gMDA6MDA6MTEuMzUxCldvcmsgRXhwZXJpZW5jZSBzdGFydHMgd2l0aCBQcmV2aW91cyBDaGFyZ2UgRXhwZXJpZW5jZSwgbWFya2VkIHByZWZlcnJlZCBvciByZXF1aXJlZC4KCjMKMDA6MDA6MTEuMzUxIC0tPiAwMDowMDoxNS43NDQKVGhlbiBZZWFycyBvZiBFeHBlcmllbmNlIFJlcXVpcmVkLCBhIHBsYWluIG51bWJlciwgaW4gdGhpcyBleGFtcGxlLCB0d28uCgo0CjAwOjAwOjE1Ljc0NCAtLT4gMDA6MDA6MjEuODQ3ClBhdGllbnQgUmF0aW8gRXhwZXJpZW5jZSBSZXF1aXJlZCwgd3JpdHRlbiB0aGUgc2FtZSB3YXkgYXMgc3RhZmZpbmcgcmF0aW9zIGVhcmxpZXIsIG9uZS10by1hLW51bWJlci4KCjUKMDA6MDA6MjEuODQ3IC0tPiAwMDowMDoyOC44MDQKRWxlY3Ryb25pYyBEb2N1bWVudGF0aW9uLCBtYXJrZWQgcHJlZmVycmVkIG9yIHJlcXVpcmVkLCB3aXRoIGEgZHJvcGRvd24gbmFtaW5nIHRoZSBhY3R1YWwgc3lzdGVtLCBtb3N0IG9mdGVuIEVwaWMuCgo2CjAwOjAwOjI4LjgwNCAtLT4gMDA6MDA6NDAuNzY0ClRoZW4gZml2ZSBtb3JlIHByZWZlcnJlZC1vci1yZXF1aXJlZCBmaWVsZHMgaW4gYSByb3c6IFRlYWNoaW5nIEhvc3BpdGFsIEV4cGVyaWVuY2UsIENvbW11bml0eSBIb3NwaXRhbCBFeHBlcmllbmNlLCBMLVQtQS1DIEV4cGVyaWVuY2UsIFRyYXVtYSBMZXZlbCBPbmUgRXhwZXJpZW5jZSwgYW5kIFRyYXVtYSBMZXZlbCBUd28gRXhwZXJpZW5jZS4KCjcKMDA6MDA6NDAuNzY0IC0tPiAwMDowMDo1Mi40ODEKRXZlcnkgb25lIG9mIHRoZXNlIGlzIGEgZ2VudWluZSByZXF1aXJlbWVudCB0byBjaGVjayBhZ2FpbnN0IHRoZSBjYW5kaWRhdGUncyByZXN1bWUsIG5vdCBhIGZvcm1hbGl0eSwgYW5kIHJlbWVtYmVyLCBhdCBBeWEtTG90dXMgT25lLCBwcmVmZXJyZWQgaW4gdGhpcyBzZWN0aW9uIGlzIHRyZWF0ZWQgdGhlIHNhbWUgYXMgcmVxdWlyZWQuCgo4CjAwOjAwOjUyLjQ4MSAtLT4gMDA6MDA6NTUuNzE1Ck5vdywgT3RoZXIgSW5mb3JtYXRpb24sIHRoZSBkb2N1bWVudCdzIGZpbmFsIHNlY3Rpb24uCgo5CjAwOjAwOjU1LjcxNSAtLT4gMDA6MDE6MDMuNzcxClVuaXQgQWNjZXB0cyBGaXJzdC1UaW1lIFRyYXZlbGVyLCB5ZXMgb3Igbm8sIHdpdGggYSBub3RlcyBmaWVsZCBiZXNpZGUgaXQsIHNvbWV0aW1lcyBzYXlpbmcgc29tZXRoaW5nIGxpa2UgdHJhdmVsIGV4cGVyaWVuY2UgYSBwbHVzLgoKMTAKMDA6MDE6MDMuNzcxIC0tPiAwMDowMToxNi4wOTcKT3JpZW50YXRpb24gRGV0YWlscywgYSBudW1iZXItb2YtaG91cnMgZmllbGQsIHBsdXMgYSBzZXBhcmF0ZSBJbmZvcm1hdGlvbiBmaWVsZCBmb3IgYW55dGhpbmcgYWRkaXRpb25hbDsgcmVtZW1iZXIgdGhpcyBpcyB0aGUgbnVtYmVyIHRoYXQgb3ZlcnJpZGVzIHdoYXRldmVyIHRoZSBKb2IgRGVzY3JpcHRpb24gc2F5cyBpZiB0aGUgdHdvIGRpc2FncmVlLgoKMTEKMDA6MDE6MTYuMDk3IC0tPiAwMDowMToyMC42MTMKU2NydWJzLCBhIFByb3ZpZGVkIGNoZWNrYm94LCBwbHVzIGEgQ29sb3IgZmllbGQgbmFtaW5nIHRoZSByZXF1aXJlZCBjb2xvci4KCjEyCjAwOjAxOjIwLjYxMyAtLT4gMDA6MDE6MzEuNzgxClByZS1BcHByb3ZlZCBUaW1lIE9mZiBwZXIgQ29udHJhY3QsIG9uZSByZXF1ZXN0LCB0d28gcmVxdWVzdHMsIG9yIG5vbmUsIHRlbGxpbmcgeW91IGhvdyBtYW55IHNlcGFyYXRlIFItVC1PIHdpbmRvd3MgdGhpcyBzcGVjaWZpYyB1bml0IGFsbG93cyBiZWZvcmUgeW91IGV2ZW4gYXBwbHkgdGhlIG9uZS1ibG9jayBydWxlLgoKMTMKMDA6MDE6MzEuNzgxIC0tPiAwMDowMTozOS44MzYKUHJvZ3JhbSBUeXBlLCBQcmUtU2NyZWVuLCBDbGllbnQgT2ZmZXIsIEF1dG8gT2ZmZXIsIG9yIE5vdCBFbnJvbGxlZCwgdGVsbGluZyB5b3Ugd2hpY2ggc3VibWlzc2lvbiBwcm9jZXNzIHRoaXMgam9iIGFjdHVhbGx5IGZvbGxvd3MuCgoxNAowMDowMTozOS44MzYgLS0+IDAwOjAxOjQ1LjE0NQpBbmQgZmluYWxseSwgYSBmcmVlLXRleHQgT3RoZXIgSW5mb3JtYXRpb24gYm94IGZvciBhbnl0aGluZyB0aGF0IGRvZXNuJ3QgZml0IGVsc2V3aGVyZS4KCjE1CjAwOjAxOjQ1LjE0NSAtLT4gMDA6MDI6MDMuNzU4CkF0IHRoZSB2ZXJ5IGJvdHRvbSBvZiB0aGUgZG9jdW1lbnQgaXMgYSBzdGFuZGluZyBkaXNjbGFpbWVyOiB0aGUgY2xpZW50IHJlcHJlc2VudHMgdGhhdCB0aGlzIGluZm9ybWF0aW9uIGlzIGNvbXBsZXRlLCBhY2N1cmF0ZSwgYW5kIHVwIHRvIGRhdGUsIGFuZCB0YWtlcyByZXNwb25zaWJpbGl0eSBmb3Iga2VlcGluZyBpdCB0aGF0IHdheSwgd2hpY2ggaXMgZXhhY3RseSB3aHksIGlmIHNvbWV0aGluZyBoZXJlIGV2ZXIgbG9va3Mgb2ZmLCB0aGUgcmlnaHQgbW92ZSBpcyB0byByYWlzZSBpdCwgbm90IGp1c3Qgd29yayBhcm91bmQgaXQuCgoxNgowMDowMjowMy43NTggLS0+IDAwOjAyOjA3LjYwMgpUaGF0J3MgZXZlcnkgZmllbGQgaW4gdGhlIFVuaXQgRGVzY3JpcHRpb24sIGZyb20gdG9wIHRvIGJvdHRvbS4KCjE3CjAwOjAyOjA3LjYwMiAtLT4gMDA6MDI6MTIuMjQwCllvdSBub3cgaGF2ZSB0aGUgY29tcGxldGUgbWFwLCB0aGUgcmVzdCBvZiB0aGlzIGNvdXJzZSBpcyBhYm91dCBhcHBseWluZyBpdC4K",
          "narration": "Let's finish the Unit Description with its last two sections: Work Experience, and Other Information. Work Experience starts with Previous Charge Experience, marked preferred or required. Then Years of Experience Required, a plain number, in this example, two. Patient Ratio Experience Required, written the same way as staffing ratios earlier, one-to-a-number. Electronic Documentation, marked preferred or required, with a dropdown naming the actual system, most often Epic. Then five more preferred-or-required fields in a row: Teaching Hospital Experience, Community Hospital Experience, L-T-A-C Experience, Trauma Level One Experience, and Trauma Level Two Experience. Every one of these is a genuine requirement to check against the candidate's resume, not a formality, and remember, at Aya-Lotus One, preferred in this section is treated the same as required. Now, Other Information, the document's final section. Unit Accepts First-Time Traveler, yes or no, with a notes field beside it, sometimes saying something like travel experience a plus. Orientation Details, a number-of-hours field, plus a separate Information field for anything additional; remember this is the number that overrides whatever the Job Description says if the two disagree. Scrubs, a Provided checkbox, plus a Color field naming the required color. Pre-Approved Time Off per Contract, one request, two requests, or none, telling you how many separate R-T-O windows this specific unit allows before you even apply the one-block rule. Program Type, Pre-Screen, Client Offer, Auto Offer, or Not Enrolled, telling you which submission process this job actually follows. And finally, a free-text Other Information box for anything that doesn't fit elsewhere. At the very bottom of the document is a standing disclaimer: the client represents that this information is complete, accurate, and up to date, and takes responsibility for keeping it that way, which is exactly why, if something here ever looks off, the right move is to raise it, not just work around it. That's every field in the Unit Description, from top to bottom. You now have the complete map, the rest of this course is about applying it."
        },
        {
          "id": "2.7",
          "title": "Reading the Unit Description Fields & Requirements",
          "hasVideo": true,
          "objective": "Interpret the Unit Details fields and the Requirements section's certification rules.",
          "learn": [
            "The Requirements section is universal across a facility's jobs and covers licenses/certifications (e.g., RN license, BLS) plus which issuing bodies are accepted — for example, BLS/ACLS must come from AHA or ARC specifically; no other issuing association is accepted.",
            "Requirements answers questions before you have to ask the client — if you're unsure whether a facility accepts a given certifying body, check Requirements first instead of contacting the client.",
            "The general Job Details section covers status, contract group (which facility grouping the job belongs to), union code, profession, and specialty — largely static, low-risk fields."
          ],
          "skills": [
            "Requirements-section literacy",
            "Certification body verification"
          ],
          "terms": [
            [
              "AHA / ARC",
              "American Heart Association / American Red Cross — for many Aya-Lotus One facilities, the only accepted issuers of BLS/ACLS certification; other issuing bodies are typically rejected."
            ],
            [
              "Contract Group",
              "The facility grouping a job belongs to, shown in Job Details."
            ]
          ],
          "takeaways": [
            "Check Requirements before calling the client about a certification question — the answer is usually already documented.",
            "A BLS/ACLS card from an unlisted issuer is a real rejection risk, not a technicality."
          ],
          "duration": 56.02,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDYuMTI4CkxldCdzIGxvb2sgYXQgdGhlIFJlcXVpcmVtZW50cyBzZWN0aW9uLCBiZWNhdXNlIHRoaXMgb25lIHNldHRpbmcgc2F2ZXMgeW91IGEgcGhvbmUgY2FsbCBhbG1vc3QgZXZlcnkgdGltZS4KCjIKMDA6MDA6MDYuMTI4IC0tPiAwMDowMDoxNi44ODEKUmVxdWlyZW1lbnRzIGFyZSB1bml2ZXJzYWwgYWNyb3NzIGEgZmFjaWxpdHkncyBqb2JzLCBhbmQgdGhleSBzcGVsbCBvdXQgZXhhY3RseSB3aGljaCBsaWNlbnNlcyBhbmQgY2VydGlmaWNhdGlvbnMgYXJlIGFjY2VwdGVkIOKAlCBhbmQganVzdCBhcyBpbXBvcnRhbnQsIHdoaWNoIGlzc3VpbmcgYm9kaWVzIGFyZSBhY2NlcHRlZC4KCjMKMDA6MDA6MTYuODgxIC0tPiAwMDowMDoyNS43MjYKVGFrZSBCLUwtUyBhbmQgQS1DLUwtUzogYXQgbW9zdCBmYWNpbGl0aWVzLCB0aG9zZSBjZXJ0aWZpY2F0aW9ucyBoYXZlIHRvIGNvbWUgc3BlY2lmaWNhbGx5IGZyb20gdGhlIEFtZXJpY2FuIEhlYXJ0IEFzc29jaWF0aW9uIG9yIHRoZSBBbWVyaWNhbiBSZWQgQ3Jvc3MuCgo0CjAwOjAwOjI1LjcyNiAtLT4gMDA6MDA6MjguMDk3Ck5vIG90aGVyIGlzc3VlciB3aWxsIGJlIGFjY2VwdGVkLCBwZXJpb2QuCgo1CjAwOjAwOjI4LjA5NyAtLT4gMDA6MDA6NDMuOTM3ClNvIGlmIHlvdSdyZSBldmVyIHVuc3VyZSB3aGV0aGVyIGEgZmFjaWxpdHkgd2lsbCB0YWtlIGEgY2FuZGlkYXRlJ3MgY2VydGlmaWNhdGlvbiBmcm9tIGEgcGFydGljdWxhciBpc3N1ZXIsIGNoZWNrIFJlcXVpcmVtZW50cyBmaXJzdCDigJQgdGhlIGFuc3dlciBpcyBhbG1vc3QgYWx3YXlzIHNpdHRpbmcgcmlnaHQgdGhlcmUsIGFuZCBpdCBzYXZlcyB5b3UgZnJvbSBjYWxsaW5nIHRoZSBjbGllbnQgdG8gYXNrIHNvbWV0aGluZyB5b3UgY291bGQndmUgbG9va2VkIHVwIHlvdXJzZWxmLgoKNgowMDowMDo0My45MzcgLS0+IDAwOjAwOjUwLjE4MQpUaGUgZ2VuZXJhbCBKb2IgRGV0YWlscyBzZWN0aW9uIG5lYXJieSBjb3ZlcnMgc3RhdHVzLCBjb250cmFjdCBncm91cCwgdW5pb24gY29kZSwgcHJvZmVzc2lvbiwgYW5kIHNwZWNpYWx0eS4KCjcKMDA6MDA6NTAuMTgxIC0tPiAwMDowMDo1Ni4wMjAKVGhlc2UgYXJlIG1vc3RseSBzdGF0aWMsIGxvdy1yaXNrIGZpZWxkcyDigJQgdXNlZnVsIGNvbnRleHQsIGJ1dCBub3Qgd2hlcmUgdGhlIHJlYWwgZGVjaXNpb25zIGdldCBtYWRlLgo=",
          "narration": "Let's look at the Requirements section, because this one setting saves you a phone call almost every time. Requirements are universal across a facility's jobs, and they spell out exactly which licenses and certifications are accepted — and just as important, which issuing bodies are accepted. Take B-L-S and A-C-L-S: at most facilities, those certifications have to come specifically from the American Heart Association or the American Red Cross. No other issuer will be accepted, period. So if you're ever unsure whether a facility will take a candidate's certification from a particular issuer, check Requirements first — the answer is almost always sitting right there, and it saves you from calling the client to ask something you could've looked up yourself. The general Job Details section nearby covers status, contract group, union code, profession, and specialty. These are mostly static, low-risk fields — useful context, but not where the real decisions get made.",
          "video": "clips/2.7.mp4",
          "prerequisite": "2.1"
        },
        {
          "id": "2.8",
          "title": "The Golden Rule: Unit Details Overrides Job Description",
          "hasVideo": true,
          "prerequisite": "2.1",
          "objective": "Apply the rule that Unit Details wins on true conflicts with the Job Description, and recognize when two numbers aren't actually conflicting at all.",
          "learn": [
            "Before calling something a conflict, check whether the two documents are describing different things — for example, one job's Job Description noted 16 hours of non-billable orientation, while its Unit Details specified 48 hours; that isn't a disagreement, it's two facts at once: the total orientation tenure is 48 hours (Unit Details), and 16 of those hours simply can't be billed to the client (Job Description).",
            "Read every field top to bottom without skipping around — the training explicitly warns against jumping straight to the fields that seem important.",
            "When the two documents do state contradictory values for the exact same fact — shift, patient ratio, and the like — Unit Details is the source of truth."
          ],
          "skills": [
            "Distinguishing complementary facts from true conflicts",
            "Systematic field-by-field reading"
          ],
          "terms": [],
          "takeaways": [
            "Unit Details gives the total orientation tenure; Job Description's non-billable note tells you how many of those hours can't be billed to the client — they're complementary facts, not a conflict.",
            "When the two documents truly disagree on the same fact, Unit Details is the source of truth — but check first that they're not simply describing two different things.",
            "Read every field top to bottom; don't skip around looking for the \"important\" parts."
          ],
          "check": {
            "q": "A job's Job Description notes 16 hours of non-billable orientation, and its Unit Details PDF lists 48 hours of orientation. What do these numbers actually mean?",
            "options": [
              "They conflict; use the Job Description's 16 hours",
              "They conflict; use the Unit Details' 48 hours",
              "They aren't in conflict — total orientation is 48 hours (Unit Details), and 16 of those hours are simply non-billable to the client (Job Description)",
              "Ask the client which number is accurate before doing anything else"
            ],
            "answer": 2,
            "explain": "These numbers describe two different things, not a disagreement: Unit Details gives the total orientation length (48 hours), while the Job Description's note tells you how many of those hours can't be billed to the client (16). Both are true at the same time."
          },
          "duration": 61.03,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MTIuMTgzCkhlcmUncyBhbiBpbXBvcnRhbnQgbGVzc29uIGluIHRoaXMgY291cnNlOiBiZWZvcmUgeW91IGNhbGwgc29tZXRoaW5nIGEgY29uZmxpY3QgYmV0d2VlbiB0aGUgSm9iIERlc2NyaXB0aW9uIGFuZCB0aGUgVW5pdCBEZXRhaWxzIFAtRC1GLCBjaGVjayB3aGV0aGVyIHRoZSB0d28gZG9jdW1lbnRzIGFyZSBhY3R1YWxseSBkZXNjcmliaW5nIGRpZmZlcmVudCB0aGluZ3MuCgoyCjAwOjAwOjEyLjE4MyAtLT4gMDA6MDA6MjMuMTQyCkhlcmUncyBhIHJlYWwgZXhhbXBsZSB0aGF0IHRyaXBzIHBlb3BsZSB1cDogb25lIGpvYidzIEpvYiBEZXNjcmlwdGlvbiBub3RlZCBzaXh0ZWVuIGhvdXJzIG9mIG5vbi1iaWxsYWJsZSBvcmllbnRhdGlvbiwgd2hpbGUgaXRzIFVuaXQgRGV0YWlscyBQLUQtRiBsaXN0ZWQgZm9ydHktZWlnaHQgaG91cnMgb2Ygb3JpZW50YXRpb24uCgozCjAwOjAwOjIzLjE0MiAtLT4gMDA6MDA6MjYuMTE1ClRoYXQncyBub3QgYSBkaXNhZ3JlZW1lbnQg4oCUIGl0J3MgdHdvIGZhY3RzIGF0IG9uY2UuCgo0CjAwOjAwOjI2LjExNSAtLT4gMDA6MDA6MzAuMTM3ClRoZSB0b3RhbCBvcmllbnRhdGlvbiB0ZW51cmUgaXMgZm9ydHktZWlnaHQgaG91cnMsIGZyb20gVW5pdCBEZXRhaWxzLgoKNQowMDowMDozMC4xMzcgLS0+IDAwOjAwOjM1LjMyNQpBbmQgc2l4dGVlbiBvZiB0aG9zZSBob3VycyBzaW1wbHkgY2FuJ3QgYmUgYmlsbGVkIHRvIHRoZSBjbGllbnQsIHBlciB0aGUgSm9iIERlc2NyaXB0aW9uLgoKNgowMDowMDozNS4zMjUgLS0+IDAwOjAwOjM3LjEzMgpCb3RoIGFyZSB0cnVlIGF0IHRoZSBzYW1lIHRpbWUuCgo3CjAwOjAwOjM3LjEzMiAtLT4gMDA6MDA6NDUuMDYwCk5vdywgdHJ1ZSBjb25mbGljdHMgZG8gaGFwcGVuIOKAlCB3aGVyZSB0aGUgdHdvIGRvY3VtZW50cyBzdGF0ZSBjb250cmFkaWN0b3J5IHZhbHVlcyBmb3IgdGhlIGV4YWN0IHNhbWUgZmFjdCwgbGlrZSBzaGlmdCBvciBwYXRpZW50IHJhdGlvLgoKOAowMDowMDo0NS4wNjAgLS0+IDAwOjAwOjQ4LjI2NgpXaGVuIHRoYXQgaGFwcGVucywgVW5pdCBEZXRhaWxzIGlzIHRoZSBzb3VyY2Ugb2YgdHJ1dGguCgo5CjAwOjAwOjQ4LjI2NiAtLT4gMDA6MDA6NTEuODgwCkFuZCB3aGlsZSB5b3UncmUgcmVhZGluZywgcmVhZCBldmVyeSBmaWVsZCBmcm9tIHRvcCB0byBib3R0b20uCgoxMAowMDowMDo1MS44ODAgLS0+IDAwOjAxOjAxLjAzMgpEb24ndCBza2lwIGFoZWFkIHRvIHRoZSBwYXJ0cyB0aGF0IHNlZW0gaW1wb3J0YW50IGFuZCBhc3N1bWUgdGhlIHJlc3QgZG9lc24ndCBtYXR0ZXIg4oCUIHRoZSBkZXRhaWxzIHRoYXQgdHJpcCBwZW9wbGUgdXAgYXJlIHVzdWFsbHkgdGhlIG9uZXMgdGhhdCBnZXQgc2tpcHBlZC4K",
          "narration": "Here's an important lesson in this course: before you call something a conflict between the Job Description and the Unit Details P-D-F, check whether the two documents are actually describing different things. Here's a real example that trips people up: one job's Job Description noted sixteen hours of non-billable orientation, while its Unit Details P-D-F listed forty-eight hours of orientation. That's not a disagreement — it's two facts at once. The total orientation tenure is forty-eight hours, from Unit Details. And sixteen of those hours simply can't be billed to the client, per the Job Description. Both are true at the same time. Now, true conflicts do happen — where the two documents state contradictory values for the exact same fact, like shift or patient ratio. When that happens, Unit Details is the source of truth. And while you're reading, read every field from top to bottom. Don't skip ahead to the parts that seem important and assume the rest doesn't matter — the details that trip people up are usually the ones that get skipped.",
          "video": "clips/2.8.mp4"
        }
      ]
    },
    {
      "id": "m3",
      "title": "Patient Match, Ratios & the Auto-Offer Mindset",
      "summary": "Matching population and ratio precisely, floating rules, and why confirmed submissions earn reviewer trust.",
      "lessons": [
        {
          "id": "3.1",
          "title": "Patient Population & Staffing Ratio Must Match Exactly",
          "hasVideo": true,
          "objective": "Verify a candidate's patient-population and staffing-ratio experience before submitting.",
          "learn": [
            "If a unit's patient group is adults and your candidate's experience is with neonates (or any mismatched population), that's an automatic reject — patient age/population must be a genuine match, not a stretch.",
            "Staffing ratio (e.g., 1:6 nights, 1:6 weekends) must be matched specifically — a submission cannot just say the candidate is \"comfortable working the ratio\"; the selling points must state the actual ratio the candidate has handled.",
            "Auto-Offer jobs raise the stakes: the client expects that whatever is in the job requirements has been checked and acknowledged by the recruiter, not just glanced at.",
            "Ask candidates directly what maximum and mid-surge ratios they've handled, not just their typical ratio — a candidate comfortable at 1:6 but able to flex to 1:8 is a stronger selling point than one who has only ever worked 1:6."
          ],
          "skills": [
            "Patient-population verification",
            "Staffing-ratio matching",
            "Selling-point specificity"
          ],
          "terms": [
            [
              "Selling Points",
              "The specific, concrete statements a recruiter writes into a submission confirming a candidate matches stated requirements — e.g., an exact patient ratio, not a vague \"comfortable with ratio.\""
            ],
            [
              "Mid-Surge",
              "A higher-than-normal patient ratio a facility may temporarily require; asking about a candidate's mid-surge experience shows flex capacity beyond their everyday ratio."
            ]
          ],
          "takeaways": [
            "A patient-population mismatch (e.g., neonatal vs. adult experience) is an automatic reject — don't submit hoping it's close enough.",
            "State the literal ratio a candidate has handled in your selling points — \"comfortable with the ratio\" is not sufficient for Auto-Offer jobs."
          ],
          "check": {
            "q": "A unit requires 1:6 patient ratio. Which selling-point statement is acceptable?",
            "options": [
              "\"Candidate is comfortable with the patient ratio.\"",
              "\"Candidate has worked 1:6 and can flex up to 1:8 during mid-surge.\"",
              "No statement is needed if the resume already lists ratios.",
              "\"Candidate is a fast learner and will adjust.\""
            ],
            "answer": 1,
            "explain": "Aya-Lotus One submissions need the literal ratio the candidate has actually handled, not a general comfort statement."
          },
          "duration": 59.21,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDYuNzMyClBhdGllbnQgcG9wdWxhdGlvbiBhbmQgc3RhZmZpbmcgcmF0aW8gYXJlIHR3byBvZiB0aGUgZmFzdGVzdCB3YXlzIHRvIGdldCBhIHN1Ym1pc3Npb24gcmVqZWN0ZWQgaWYgeW91J3JlIG5vdCBjYXJlZnVsLgoKMgowMDowMDowNi43MzIgLS0+IDAwOjAwOjE1LjMwNgpJZiBhIHVuaXQncyBwYXRpZW50IHBvcHVsYXRpb24gaXMgYWR1bHRzLCBhbmQgeW91ciBjYW5kaWRhdGUncyByZWFsIGV4cGVyaWVuY2UgaXMgd2l0aCBuZW9uYXRlcyDigJQgb3IgYW55IG90aGVyIG1pc21hdGNoIOKAlCB0aGF0J3MgYW4gYXV0b21hdGljIHJlamVjdC4KCjMKMDA6MDA6MTUuMzA2IC0tPiAwMDowMDoxOC42NDMKSXQgZG9lc24ndCBtYXR0ZXIgaG93IHN0cm9uZyB0aGUgcmVzdCBvZiB0aGUgcmVzdW1lIGxvb2tzLgoKNAowMDowMDoxOC42NDMgLS0+IDAwOjAwOjIwLjYwMApTdGFmZmluZyByYXRpbyB3b3JrcyB0aGUgc2FtZSB3YXkuCgo1CjAwOjAwOjIwLjYwMCAtLT4gMDA6MDA6MjguNTk4CklmIGEgdW5pdCByZXF1aXJlcyBvbmUtdG8tc2l4LCB5b3VyIHN1Ym1pc3Npb24gY2FuJ3QganVzdCBzYXkgdGhlIGNhbmRpZGF0ZSBpcyBxdW90ZSBjb21mb3J0YWJsZSB3aXRoIHRoZSByYXRpbyB1bnF1b3RlIOKAlCB0aGF0J3MgdG9vIHZhZ3VlLgoKNgowMDowMDoyOC41OTggLS0+IDAwOjAwOjMzLjgzNApZb3VyIHNlbGxpbmcgcG9pbnRzIG5lZWQgdG8gc3RhdGUgdGhlIGFjdHVhbCByYXRpbyB0aGUgY2FuZGlkYXRlIGhhcyBoYW5kbGVkLCBzcGVjaWZpY2FsbHkuCgo3CjAwOjAwOjMzLjgzNCAtLT4gMDA6MDA6NDIuMjM1CkFuZCBvbiBBdXRvLU9mZmVyIGpvYnMgZXNwZWNpYWxseSwgdGhlIGNsaWVudCBleHBlY3RzIHRoYXQgZXZlcnkgcmVxdWlyZW1lbnQgaGFzIGdlbnVpbmVseSBiZWVuIGNoZWNrZWQgYW5kIGFja25vd2xlZGdlZCBieSB5b3UsIG5vdCBqdXN0IHNraW1tZWQuCgo4CjAwOjAwOjQyLjIzNSAtLT4gMDA6MDA6NDkuMTQwCkhlcmUncyBhIHByYWN0aWNhbCB0aXA6IGFzayBjYW5kaWRhdGVzIHdoYXQgdGhlaXIgbWF4aW11bSBhbmQgbWlkLXN1cmdlIHJhdGlvcyBoYXZlIGJlZW4sIG5vdCBqdXN0IHRoZWlyIGV2ZXJ5ZGF5IHJhdGlvLgoKOQowMDowMDo0OS4xNDAgLS0+IDAwOjAwOjU5LjIxMApBIGNhbmRpZGF0ZSB3aG8ncyBjb21mb3J0YWJsZSBhdCBvbmUtdG8tc2l4IGJ1dCBjYW4gZmxleCB0byBvbmUtdG8tZWlnaHQgZHVyaW5nIGEgc3VyZ2UgaXMgYSBub3RpY2VhYmx5IHN0cm9uZ2VyIHN1Ym1pc3Npb24gdGhhbiBvbmUgd2hvJ3Mgb25seSBldmVyIHdvcmtlZCB0aGUgc3RhbmRhcmQgcmF0aW8uCg==",
          "narration": "Patient population and staffing ratio are two of the fastest ways to get a submission rejected if you're not careful. If a unit's patient population is adults, and your candidate's real experience is with neonates — or any other mismatch — that's an automatic reject. It doesn't matter how strong the rest of the resume looks. Staffing ratio works the same way. If a unit requires one-to-six, your submission can't just say the candidate is quote comfortable with the ratio unquote — that's too vague. Your selling points need to state the actual ratio the candidate has handled, specifically. And on Auto-Offer jobs especially, the client expects that every requirement has genuinely been checked and acknowledged by you, not just skimmed. Here's a practical tip: ask candidates what their maximum and mid-surge ratios have been, not just their everyday ratio. A candidate who's comfortable at one-to-six but can flex to one-to-eight during a surge is a noticeably stronger submission than one who's only ever worked the standard ratio.",
          "video": "clips/3.1.mp4"
        },
        {
          "id": "3.2",
          "title": "Floating: Within the Facility vs. Between Facilities",
          "hasVideo": true,
          "objective": "Distinguish the two types of floating requirements and confirm the right one with the candidate.",
          "learn": [
            "Floating can mean two different things: floating between departments/units within the same facility, or floating between two or more entirely different facilities.",
            "When a schedule requirement field for \"Call Required\" or \"Float\" doesn't explicitly say yes, treat it as no — if there's no option marked yes, the default answer is no.",
            "If float is required, confirm with the candidate specifically whether they're okay floating within the facility or between facilities — these are not interchangeable confirmations.",
            "Whichever type applies, it must be written explicitly into the selling points (e.g., \"candidate is okay floating to different facilities\")."
          ],
          "skills": [
            "Float-requirement interpretation",
            "Candidate confirmation calls"
          ],
          "terms": [
            [
              "Float (within-facility)",
              "Being reassigned to a different department or unit inside the same facility during a shift."
            ],
            [
              "Float (between-facility)",
              "Being reassigned to work at a different, separate facility within the same health system."
            ]
          ],
          "takeaways": [
            "If a yes/no field has no \"yes\" marked, treat it as a no by default.",
            "Confirm the specific type of float with the candidate — within-facility and between-facility are different asks with different comfort levels."
          ],
          "duration": 53.06,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDYuNjQ3CkZsb2F0aW5nIGlzIG9uZSBvZiB0aG9zZSB3b3JkcyB0aGF0IG1lYW5zIHR3byBjb21wbGV0ZWx5IGRpZmZlcmVudCB0aGluZ3MgZGVwZW5kaW5nIG9uIGNvbnRleHQsIHNvIGxldCdzIHVudGFuZ2xlIGl0LgoKMgowMDowMDowNi42NDcgLS0+IDAwOjAwOjE4LjA2NQpJdCBjYW4gbWVhbiBmbG9hdGluZyBiZXR3ZWVuIGRlcGFydG1lbnRzIG9yIHVuaXRzIHdpdGhpbiB0aGUgc2FtZSBmYWNpbGl0eSwgb3IgaXQgY2FuIG1lYW4gZmxvYXRpbmcgYmV0d2VlbiB0d28gb3IgbW9yZSBzZXBhcmF0ZSBmYWNpbGl0aWVzIGVudGlyZWx5IOKAlCBhbmQgdGhvc2UgYXJlIHZlcnkgZGlmZmVyZW50IGFza3MgZm9yIGEgY2FuZGlkYXRlLgoKMwowMDowMDoxOC4wNjUgLS0+IDAwOjAwOjI0Ljc2OQpIZXJlJ3MgYSByZWxhdGVkIHJ1bGU6IHdoZW4gYSBzY2hlZHVsZSBmaWVsZCBsaWtlIENhbGwgUmVxdWlyZWQgb3IgRmxvYXQgZG9lc24ndCBleHBsaWNpdGx5IHNheSB5ZXMsIHRyZWF0IGl0IGFzIGEgbm8uCgo0CjAwOjAwOjI0Ljc2OSAtLT4gMDA6MDA6MjguMjM0CklmIHRoZXJlJ3Mgbm8gb3B0aW9uIG1hcmtlZCB5ZXMsIHRoZSBhbnN3ZXIgaXMgbm8sIGZ1bGwgc3RvcC4KCjUKMDA6MDA6MjguMjM0IC0tPiAwMDowMDo0Mi4wOTYKV2hlbiBmbG9hdCBhY3R1YWxseSBpcyByZXF1aXJlZCwgY29uZmlybSB3aXRoIHRoZSBjYW5kaWRhdGUgc3BlY2lmaWNhbGx5IHdoaWNoIGtpbmQgYXBwbGllcyDigJQgd2l0aGluIHRoZSBmYWNpbGl0eSwgb3IgYmV0d2VlbiBmYWNpbGl0aWVzIOKAlCBiZWNhdXNlIHRoZXNlIGFyZW4ndCBpbnRlcmNoYW5nZWFibGUsIGFuZCBhIGNhbmRpZGF0ZSB3aG8ncyBmaW5lIHdpdGggb25lIG1heSBub3QgYmUgZmluZSB3aXRoIHRoZSBvdGhlci4KCjYKMDA6MDA6NDIuMDk2IC0tPiAwMDowMDo0Ni4wMTYKV2hpY2hldmVyIHR5cGUgYXBwbGllcywgd3JpdGUgaXQgZXhwbGljaXRseSBpbnRvIHlvdXIgc2VsbGluZyBwb2ludHMuCgo3CjAwOjAwOjQ2LjAxNiAtLT4gMDA6MDA6NTMuMDYwClNvbWV0aGluZyBsaWtlLCBxdW90ZSBjYW5kaWRhdGUgaXMgb2theSBmbG9hdGluZyB0byBkaWZmZXJlbnQgZmFjaWxpdGllcyB1bnF1b3RlLCBsZWF2ZXMgbm8gcm9vbSBmb3IgbWlzdW5kZXJzdGFuZGluZyBsYXRlci4K",
          "narration": "Floating is one of those words that means two completely different things depending on context, so let's untangle it. It can mean floating between departments or units within the same facility, or it can mean floating between two or more separate facilities entirely — and those are very different asks for a candidate. Here's a related rule: when a schedule field like Call Required or Float doesn't explicitly say yes, treat it as a no. If there's no option marked yes, the answer is no, full stop. When float actually is required, confirm with the candidate specifically which kind applies — within the facility, or between facilities — because these aren't interchangeable, and a candidate who's fine with one may not be fine with the other. Whichever type applies, write it explicitly into your selling points. Something like, quote candidate is okay floating to different facilities unquote, leaves no room for misunderstanding later.",
          "video": "clips/3.2.mp4"
        },
        {
          "id": "3.3",
          "title": "Why Confirmations Matter: How Aya Reviews Vendor Submissions",
          "hasVideo": true,
          "objective": "Understand why thorough, confirmed submissions earn continued attention from client reviewers.",
          "learn": [
            "Aya's account managers handle submissions from many vendors and recruiters at once — a reviewer who sees a pattern of unconfirmed or generic submissions from a given recruiter will simply reject faster or stop reviewing that recruiter's submissions closely, rather than investigate every one.",
            "Within a team, if some recruiters properly check every field and confirm with candidates while others submit without checking, reviewers naturally trust and prioritize the recruiters whose submissions are consistently accurate — and start discounting the others.",
            "This is about earned reputation, not a formal scoring system — the training frames it explicitly as \"perception.\""
          ],
          "skills": [
            "Reviewer-perspective awareness",
            "Submission quality consistency"
          ],
          "terms": [],
          "takeaways": [
            "Consistently thorough submissions build reviewer trust over time — sloppy ones erode it, even without a formal penalty.",
            "Assume every submission is being compared against your own submission history, not evaluated in isolation."
          ],
          "duration": 50.86,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDUuODQwCkxldCdzIHRhbGsgYWJvdXQgc29tZXRoaW5nIHRoYXQgZG9lc24ndCBzaG93IHVwIG9uIGFueSBjaGVja2xpc3QsIGJ1dCBtYXR0ZXJzIGp1c3QgYXMgbXVjaDogcmVwdXRhdGlvbi4KCjIKMDA6MDA6MDUuODQwIC0tPiAwMDowMDoxMS42ODAKQXlhJ3MgYWNjb3VudCBtYW5hZ2VycyBhcmUgcmV2aWV3aW5nIHN1Ym1pc3Npb25zIGZyb20gYSBsb3Qgb2YgdmVuZG9ycyBhbmQgYSBsb3Qgb2YgcmVjcnVpdGVycyBhdCBvbmNlLgoKMwowMDowMDoxMS42ODAgLS0+IDAwOjAwOjI1Ljk2OQpJZiBhIHJldmlld2VyIHN0YXJ0cyBub3RpY2luZyBhIHBhdHRlcm4gb2YgdmFndWUgb3IgdW5jb25maXJtZWQgc3VibWlzc2lvbnMgZnJvbSBhIHBhcnRpY3VsYXIgcmVjcnVpdGVyLCB0aGV5IGRvbid0IGludmVzdGlnYXRlIGVhY2ggb25lIGluZGl2aWR1YWxseSDigJQgdGhleSBqdXN0IHN0YXJ0IHJlamVjdGluZyBmYXN0ZXIsIG9yIHN0b3AgZ2l2aW5nIHRoYXQgcmVjcnVpdGVyJ3Mgc3VibWlzc2lvbnMgbXVjaCBhdHRlbnRpb24gYXQgYWxsLgoKNAowMDowMDoyNS45NjkgLS0+IDAwOjAwOjI3LjY3MApUaGUgZmxpcCBzaWRlIGlzIGp1c3QgYXMgdHJ1ZS4KCjUKMDA6MDA6MjcuNjcwIC0tPiAwMDowMDozOC44OTYKV2hlbiBzb21lIHJlY3J1aXRlcnMgb24gYSB0ZWFtIGNvbnNpc3RlbnRseSBjaGVjayBldmVyeSBmaWVsZCBhbmQgY29uZmlybSBldmVyeSBkZXRhaWwgd2l0aCB0aGUgY2FuZGlkYXRlLCB3aGlsZSBvdGhlcnMgZG9uJ3QsIHJldmlld2VycyBsZWFybiB3aG8gdG8gdHJ1c3Qg4oCUIGFuZCB0aGV5IHN0YXJ0IHByaW9yaXRpemluZyBhY2NvcmRpbmdseS4KCjYKMDA6MDA6MzguODk2IC0tPiAwMDowMDo0MC44ODEKVGhpcyBpc24ndCBhIGZvcm1hbCBzY29yaW5nIHN5c3RlbS4KCjcKMDA6MDA6NDAuODgxIC0tPiAwMDowMDo0NC4yMjYKSXQncyBlYXJuZWQgdHJ1c3QsIGJ1aWx0IG9uZSBhY2N1cmF0ZSBzdWJtaXNzaW9uIGF0IGEgdGltZS4KCjgKMDA6MDA6NDQuMjI2IC0tPiAwMDowMDo1MC44NjAKU28gYXNzdW1lIGV2ZXJ5IHN1Ym1pc3Npb24geW91IHNlbmQgaXMgYmVpbmcgd2VpZ2hlZCBhZ2FpbnN0IHlvdXIgb3duIHRyYWNrIHJlY29yZCwgbm90IGp1ZGdlZCBjb21wbGV0ZWx5IG9uIGl0cyBvd24uCg==",
          "narration": "Let's talk about something that doesn't show up on any checklist, but matters just as much: reputation. Aya's account managers are reviewing submissions from a lot of vendors and a lot of recruiters at once. If a reviewer starts noticing a pattern of vague or unconfirmed submissions from a particular recruiter, they don't investigate each one individually — they just start rejecting faster, or stop giving that recruiter's submissions much attention at all. The flip side is just as true. When some recruiters on a team consistently check every field and confirm every detail with the candidate, while others don't, reviewers learn who to trust — and they start prioritizing accordingly. This isn't a formal scoring system. It's earned trust, built one accurate submission at a time. So assume every submission you send is being weighed against your own track record, not judged completely on its own.",
          "video": "clips/3.3.mp4"
        }
      ]
    },
    {
      "id": "m4",
      "title": "Skills Checklists & Work Experience",
      "summary": "Reading proficiency/frequency ratings, matching skills to the resume, and Aya's practical treatment of \"preferred.\"",
      "lessons": [
        {
          "id": "4.1",
          "title": "Reading the Skills Checklist: Proficiency & Frequency",
          "hasVideo": true,
          "objective": "Interpret a candidate's self-rated skills checklist against a unit's required skills.",
          "learn": [
            "Skills checklists rate candidates on two scales: Proficiency (1=None to 4=Supervise/Teach) and Frequency (1=Never/Observed Only to 4=Daily-Weekly).",
            "Any required skill rated below 3 by the candidate (i.e., a 1 or 2) is a reject risk — a facility will not accept a required skill marked as only \"None\" or \"Intermittent.\"",
            "Unit Details lists which skills are required vs. preferred separately from the checklist — cross-reference both before submitting."
          ],
          "skills": [
            "Skills-checklist interpretation",
            "Reject-risk identification"
          ],
          "terms": [
            [
              "Proficiency Scale",
              "1=None, 2=Intermittent, 3=Experienced, 4=Supervise/Teach — how well a candidate performs a skill."
            ],
            [
              "Frequency Scale",
              "1=Never/Observed Only, 2=Less than 6x/year, 3=Twice a Month, 4=Daily-Weekly — how often a candidate performs a skill."
            ]
          ],
          "takeaways": [
            "A required skill rated 1 or 2 on the checklist is a reject risk — check every required line item, not just the overall score."
          ],
          "check": {
            "q": "A required skill on the checklist is rated 2 (Intermittent) by the candidate. What should you expect?",
            "options": [
              "It's fine as long as the overall average is above 3",
              "This is a reject risk — required skills need a 3 or higher",
              "Frequency doesn't matter, only proficiency does",
              "Only the facility's reviewer needs to worry about this"
            ],
            "answer": 1,
            "explain": "Any required skill self-rated below 3 is treated as a reject risk by the facility."
          },
          "duration": 48.17,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MTUuNzA0ClNraWxscyBjaGVja2xpc3RzIHJhdGUgYSBjYW5kaWRhdGUgb24gdHdvIHNlcGFyYXRlIHNjYWxlczogcHJvZmljaWVuY3ksIGZyb20gb25lIOKAlCBtZWFuaW5nIG5vbmUg4oCUIHVwIHRvIGZvdXIsIG1lYW5pbmcgdGhleSBjYW4gc3VwZXJ2aXNlIG9yIHRlYWNoIHRoZSBza2lsbDsgYW5kIGZyZXF1ZW5jeSwgZnJvbSBvbmUg4oCUIG1lYW5pbmcgbmV2ZXIgb3Igb2JzZXJ2ZWQgb25seSDigJQgdXAgdG8gZm91ciwgbWVhbmluZyBkYWlseSBvciB3ZWVrbHkuCgoyCjAwOjAwOjE1LjcwNCAtLT4gMDA6MDA6MjQuMDU0CkhlcmUncyB0aGUgcnVsZSB0byByZW1lbWJlcjogYW55IHJlcXVpcmVkIHNraWxsIHRoYXQgYSBjYW5kaWRhdGUgcmF0ZXMgYmVsb3cgYSB0aHJlZSDigJQgbWVhbmluZyBhIG9uZSBvciBhIHR3byDigJQgaXMgYSByZWFsIHJlamVjdCByaXNrLgoKMwowMDowMDoyNC4wNTQgLS0+IDAwOjAwOjMxLjE1OApBIGZhY2lsaXR5IGlzbid0IGdvaW5nIHRvIGFjY2VwdCBhIHJlcXVpcmVkIHNraWxsIG1hcmtlZCBhcyBvbmx5IHF1b3RlIG5vbmUgdW5xdW90ZSBvciBxdW90ZSBpbnRlcm1pdHRlbnQgdW5xdW90ZS4KCjQKMDA6MDA6MzEuMTU4IC0tPiAwMDowMDozMy43NzUKU28gZG9uJ3QganVzdCBnbGFuY2UgYXQgdGhlIG92ZXJhbGwgc2NvcmUuCgo1CjAwOjAwOjMzLjc3NSAtLT4gMDA6MDA6NDguMTcwCkdvIGxpbmUgYnkgbGluZSB0aHJvdWdoIGV2ZXJ5IHJlcXVpcmVkIHNraWxsIGFuZCBjaGVjayB0aGUgYWN0dWFsIHJhdGluZywgYmVjYXVzZSBVbml0IERldGFpbHMgbGlzdHMgd2hpY2ggc2tpbGxzIGFyZSByZXF1aXJlZCB2ZXJzdXMgcHJlZmVycmVkIHNlcGFyYXRlbHkgZnJvbSB0aGUgY2hlY2tsaXN0IOKAlCBhbmQgeW91IG5lZWQgdG8gY3Jvc3MtcmVmZXJlbmNlIGJvdGggYmVmb3JlIHlvdSBzdWJtaXQuCg==",
          "narration": "Skills checklists rate a candidate on two separate scales: proficiency, from one — meaning none — up to four, meaning they can supervise or teach the skill; and frequency, from one — meaning never or observed only — up to four, meaning daily or weekly. Here's the rule to remember: any required skill that a candidate rates below a three — meaning a one or a two — is a real reject risk. A facility isn't going to accept a required skill marked as only quote none unquote or quote intermittent unquote. So don't just glance at the overall score. Go line by line through every required skill and check the actual rating, because Unit Details lists which skills are required versus preferred separately from the checklist — and you need to cross-reference both before you submit.",
          "video": "clips/4.1.mp4"
        },
        {
          "id": "4.2",
          "title": "Matching Checklist Skills to the Resume",
          "hasVideo": true,
          "prerequisite": "4.1",
          "objective": "Cross-check that required skills appear consistently across the checklist, Unit Details, and the resume.",
          "learn": [
            "When reviewing a profile, confirm that every required skill (per Unit Details/checklist) is also reflected in the resume itself — not just checked off on a form.",
            "Sometimes a required skill goes by a different name on the checklist than in the unit requirements (e.g., \"cardiac monitoring and emergency response\" appearing under another label) — trace the skill under whatever name it uses and make sure it's represented in the resume regardless of naming.",
            "If a required skill (e.g., \"starting and maintaining IVs,\" or line management for less acute units) is missing from the resume, treat it the same as if it were missing from the checklist — it needs to be added or clarified before submission."
          ],
          "skills": [
            "Cross-document skill verification",
            "Terminology mapping across documents"
          ],
          "terms": [],
          "takeaways": [
            "A required skill under a different name is still a required skill — trace it across documents rather than pattern-matching on exact wording.",
            "The resume, the checklist, and Unit Details all need to agree on required skills before you submit."
          ],
          "duration": 45.82,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDguMTY2Ck9uY2UgeW91J3ZlIGNoZWNrZWQgdGhlIHJhdGluZ3MsIHRoZSBuZXh0IHN0ZXAgaXMgbWFraW5nIHN1cmUgdGhvc2Ugc2tpbGxzIGFjdHVhbGx5IHNob3cgdXAgb24gdGhlIHJlc3VtZSDigJQgbm90IGp1c3QgY2hlY2tlZCBvZmYgb24gYSBmb3JtIHNvbWV3aGVyZS4KCjIKMDA6MDA6MDguMTY2IC0tPiAwMDowMDoxNS4wMTgKSGVyZSdzIGEgd3JpbmtsZTogc29tZXRpbWVzIGEgcmVxdWlyZWQgc2tpbGwgZ29lcyBieSBhIGRpZmZlcmVudCBuYW1lIG9uIHRoZSBjaGVja2xpc3QgdGhhbiBpdCBkb2VzIGluIHRoZSB1bml0IHJlcXVpcmVtZW50cy4KCjMKMDA6MDA6MTUuMDE4IC0tPiAwMDowMDoyMi4wODgKU29tZXRoaW5nIGxpa2UgcXVvdGUgY2FyZGlhYyBtb25pdG9yaW5nIGFuZCBlbWVyZ2VuY3kgcmVzcG9uc2UgdW5xdW90ZSBtaWdodCBhcHBlYXIgdW5kZXIgYSBjb21wbGV0ZWx5IGRpZmZlcmVudCBsYWJlbCBlbHNld2hlcmUuCgo0CjAwOjAwOjIyLjA4OCAtLT4gMDA6MDA6MzEuMjk2CldoZW4gdGhhdCBoYXBwZW5zLCB0cmFjZSB0aGUgc2tpbGwgdW5kZXIgd2hhdGV2ZXIgbmFtZSBpdCdzIHVzaW5nLCBhbmQgY29uZmlybSBpdCdzIGdlbnVpbmVseSByZXByZXNlbnRlZCBpbiB0aGUgcmVzdW1lIOKAlCBkb24ndCBqdXN0IHBhdHRlcm4tbWF0Y2ggb24gdGhlIGV4YWN0IHdvcmRpbmcuCgo1CjAwOjAwOjMxLjI5NiAtLT4gMDA6MDA6NDIuMjAzCkFuZCBpZiBhIHJlcXVpcmVkIHNraWxsLCBsaWtlIHN0YXJ0aW5nIGFuZCBtYWludGFpbmluZyBJLVZzLCBvciBsaW5lIG1hbmFnZW1lbnQgZm9yIGxlc3MgYWN1dGUgdW5pdHMsIGlzIG1pc3NpbmcgZnJvbSB0aGUgcmVzdW1lLCB0cmVhdCB0aGF0IGV4YWN0bHkgdGhlIHNhbWUgYXMgaWYgaXQgd2VyZSBtaXNzaW5nIGZyb20gdGhlIGNoZWNrbGlzdC4KCjYKMDA6MDA6NDIuMjAzIC0tPiAwMDowMDo0NS44MjAKSXQgbmVlZHMgdG8gYmUgYWRkZWQgb3IgY2xhcmlmaWVkIGJlZm9yZSB5b3Ugc3VibWl0IOKAlCBub3QgYXNzdW1lZC4K",
          "narration": "Once you've checked the ratings, the next step is making sure those skills actually show up on the resume — not just checked off on a form somewhere. Here's a wrinkle: sometimes a required skill goes by a different name on the checklist than it does in the unit requirements. Something like quote cardiac monitoring and emergency response unquote might appear under a completely different label elsewhere. When that happens, trace the skill under whatever name it's using, and confirm it's genuinely represented in the resume — don't just pattern-match on the exact wording. And if a required skill, like starting and maintaining I-Vs, or line management for less acute units, is missing from the resume, treat that exactly the same as if it were missing from the checklist. It needs to be added or clarified before you submit — not assumed.",
          "video": "clips/4.2.mp4"
        },
        {
          "id": "4.3",
          "title": "Work Experience: When \"Preferred\" Really Means \"Required\"",
          "hasVideo": true,
          "objective": "Apply Aya-Lotus One's practical treatment of \"preferred\" work-experience fields as functionally required.",
          "learn": [
            "In the Work Experience section, fields like charge-nurse experience, teaching-hospital experience, or specific trauma-level experience may be marked \"preferred\" rather than \"required\" — but in practice, Aya-Lotus One reviewers treat \"preferred\" in this section as required. Submit candidates who actually have it.",
            "\"Two years of experience\" means a literal two years — one year and eleven months, or ten months, does not qualify, regardless of how close it is.",
            "The same literal-years rule applies to specific systems too: if EMR/charting experience (e.g., Epic) is required or effectively required, and years-of-experience is also listed, the years requirement applies to that system specifically, not just general nursing experience.",
            "When a candidate is short on a specific requirement (e.g., less Epic experience than ideal), acknowledge the shortfall honestly but frame it positively in the selling points — e.g., noting genuine comfort with the system — rather than omitting the gap."
          ],
          "skills": [
            "Preferred-vs-required judgment",
            "Literal experience-duration verification",
            "Honest positive framing in selling points"
          ],
          "terms": [
            [
              "Preferred (Work Experience)",
              "In the Work Experience section specifically, treat \"preferred\" as functionally required — called out as an Aya-Lotus One-specific practice, not a general VMS rule."
            ]
          ],
          "takeaways": [
            "\"Preferred\" in the Work Experience section should be read as required in practice at Aya-Lotus One.",
            "Years-of-experience requirements are literal — round up only in your own head, never in the submission."
          ],
          "check": {
            "q": "Unit Details marks charge-nurse experience as \"preferred\" (not required). What should you do?",
            "options": [
              "Ignore it since it's only preferred",
              "Treat it as required in practice and submit candidates who actually have charge experience",
              "Ask the candidate to claim charge experience regardless",
              "Only worry about it if the job is Auto-Offer"
            ],
            "answer": 1,
            "explain": "Aya-Lotus One reviewers treat \"preferred\" in the Work Experience section as functionally required."
          },
          "duration": 64.54,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDUuMzExCkhlcmUncyBvbmUgb2YgdGhlIG1vc3QgaW1wb3J0YW50LCBhbmQgbW9zdCBBeWEtc3BlY2lmaWMsIHRoaW5ncyB5b3UnbGwgbGVhcm4gaW4gdGhpcyBjb3Vyc2UuCgoyCjAwOjAwOjA1LjMxMSAtLT4gMDA6MDA6MTcuODk2CkluIHRoZSBXb3JrIEV4cGVyaWVuY2Ugc2VjdGlvbiwgeW91J2xsIG9mdGVuIHNlZSBmaWVsZHMgbGlrZSBjaGFyZ2UtbnVyc2UgZXhwZXJpZW5jZSwgdGVhY2hpbmctaG9zcGl0YWwgZXhwZXJpZW5jZSwgb3Igc3BlY2lmaWMgdHJhdW1hLWxldmVsIGV4cGVyaWVuY2UgbWFya2VkIHF1b3RlIHByZWZlcnJlZCB1bnF1b3RlIHJhdGhlciB0aGFuIHF1b3RlIHJlcXVpcmVkIHVucXVvdGUuCgozCjAwOjAwOjE3Ljg5NiAtLT4gMDA6MDA6MjAuMjYzCkluIHByYWN0aWNlLCB0cmVhdCBwcmVmZXJyZWQgYXMgcmVxdWlyZWQuCgo0CjAwOjAwOjIwLjI2MyAtLT4gMDA6MDA6MjYuNzI4ClN1Ym1pdCBjYW5kaWRhdGVzIHdobyBnZW51aW5lbHkgaGF2ZSB0aGF0IGV4cGVyaWVuY2Ug4oCUIGRvbid0IHJlbHkgb24gdGhlIHNvZnRlciB3b3JkaW5nIGFzIGFuIGV4Y3VzZSB0byBza2lwIGl0LgoKNQowMDowMDoyNi43MjggLS0+IDAwOjAwOjMxLjExNQpBbmQgd2hlbiBhIGpvYiBzYXlzIHR3byB5ZWFycyBvZiBleHBlcmllbmNlLCB0aGF0IG1lYW5zIGEgbGl0ZXJhbCB0d28geWVhcnMuCgo2CjAwOjAwOjMxLjExNSAtLT4gMDA6MDA6MzUuMjE0Ck9uZSB5ZWFyIGFuZCBlbGV2ZW4gbW9udGhzIGRvZXNuJ3QgY291bnQsIG5vIG1hdHRlciBob3cgY2xvc2UgaXQgc2VlbXMuCgo3CjAwOjAwOjM1LjIxNCAtLT4gMDA6MDA6NDkuMjQyClRoYXQgc2FtZSBsaXRlcmFsLXllYXJzIHJ1bGUgYXBwbGllcyB0byBzcGVjaWZpYyBzeXN0ZW1zIHRvbyDigJQgaWYgYSBqb2IgZWZmZWN0aXZlbHkgcmVxdWlyZXMgRXBpYyBleHBlcmllbmNlLCBhbmQgYWxzbyBsaXN0cyB5ZWFycyBvZiBleHBlcmllbmNlLCB0aGF0IHllYXJzIHJlcXVpcmVtZW50IGFwcGxpZXMgc3BlY2lmaWNhbGx5IHRvIEVwaWMsIG5vdCBqdXN0IGdlbmVyYWwgbnVyc2luZyBleHBlcmllbmNlIG92ZXJhbGwuCgo4CjAwOjAwOjQ5LjI0MiAtLT4gMDA6MDE6MDIuNTIwCklmIHlvdXIgY2FuZGlkYXRlIGZhbGxzIGEgbGl0dGxlIHNob3J0IG9uIHNvbWV0aGluZyBzcGVjaWZpYywgYmUgaG9uZXN0IGFib3V0IGl0LCBidXQgZnJhbWUgaXQgcG9zaXRpdmVseSBpbiB5b3VyIHNlbGxpbmcgcG9pbnRzIOKAlCBmb3IgZXhhbXBsZSwgbm90aW5nIGdlbnVpbmUgY29tZm9ydCB3aXRoIHRoZSBzeXN0ZW0gZXZlbiBpZiB0aGUgdG90YWwgeWVhcnMgYXJlbid0IHF1aXRlIHRoZXJlIHlldC4KCjkKMDA6MDE6MDIuNTIwIC0tPiAwMDowMTowNC41NDAKQWNrbm93bGVkZ2UgdGhlIGdhcDsgZG9uJ3QgaGlkZSBpdC4K",
          "narration": "Here's one of the most important, and most Aya-specific, things you'll learn in this course. In the Work Experience section, you'll often see fields like charge-nurse experience, teaching-hospital experience, or specific trauma-level experience marked quote preferred unquote rather than quote required unquote. In practice, treat preferred as required. Submit candidates who genuinely have that experience — don't rely on the softer wording as an excuse to skip it. And when a job says two years of experience, that means a literal two years. One year and eleven months doesn't count, no matter how close it seems. That same literal-years rule applies to specific systems too — if a job effectively requires Epic experience, and also lists years of experience, that years requirement applies specifically to Epic, not just general nursing experience overall. If your candidate falls a little short on something specific, be honest about it, but frame it positively in your selling points — for example, noting genuine comfort with the system even if the total years aren't quite there yet. Acknowledge the gap; don't hide it.",
          "video": "clips/4.3.mp4"
        }
      ]
    },
    {
      "id": "m5",
      "title": "Facility Details & Selling Points",
      "summary": "Why exact facility address matters, and a small detail — scrub color — that has ended assignments.",
      "lessons": [
        {
          "id": "5.1",
          "title": "Facility Type, Trauma Level, Address & Travel Radius",
          "hasVideo": true,
          "objective": "Record facility-specific details accurately, since they vary by location within the same health system.",
          "learn": [
            "Large health systems (e.g., Cone Health) operate multiple physical locations, each with its own trauma level, bed size, and teaching-hospital status — always record the specific facility address, not just the system name, since these details change location to location.",
            "Facility type (e.g., private, non-profit, short-term acute care) is another field that varies by location and should be verified against the specific address on the job.",
            "Local-radius rules (e.g., a 50-mile radius) determine whether a candidate is considered \"local\" or a traveler — check the candidate's address against the job's address to apply this correctly, and note that a valid driver's license may be required to support travel eligibility."
          ],
          "skills": [
            "Facility-detail verification",
            "Local-radius / travel-eligibility checks"
          ],
          "terms": [
            [
              "Local Radius Rule",
              "A facility-defined distance (e.g., 50 miles) from the job site within which a candidate is considered local rather than a traveler."
            ]
          ],
          "takeaways": [
            "Never rely on the health-system name alone for trauma level, bed size, or teaching status — always check the specific facility address on the job.",
            "Radius rules directly affect whether a candidate qualifies as local or traveler — check the candidate's address against the job's, every time."
          ],
          "duration": 55.25,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MTAuMTA2CkxhcmdlIGhlYWx0aCBzeXN0ZW1zIG9mdGVuIG9wZXJhdGUgbXVsdGlwbGUgcGh5c2ljYWwgbG9jYXRpb25zIHVuZGVyIG9uZSBuYW1lLCBhbmQgZWFjaCBsb2NhdGlvbiBjYW4gaGF2ZSBpdHMgb3duIHRyYXVtYSBsZXZlbCwgYmVkIHNpemUsIGFuZCB0ZWFjaGluZy1ob3NwaXRhbCBzdGF0dXMuCgoyCjAwOjAwOjEwLjEwNiAtLT4gMDA6MDA6MTUuMTg5CkNvbmUgSGVhbHRoIGlzIGEgZ29vZCBleGFtcGxlIOKAlCBpdCdzIG5vdCBvbmUgYnVpbGRpbmcsIGl0J3Mgc2V2ZXJhbCwgZWFjaCBkaWZmZXJlbnQuCgozCjAwOjAwOjE1LjE4OSAtLT4gMDA6MDA6MjQuODExClNvIGFsd2F5cyByZWNvcmQgdGhlIHNwZWNpZmljIGZhY2lsaXR5IGFkZHJlc3Mgb24gdGhlIGpvYiwgbm90IGp1c3QgdGhlIGhlYWx0aCBzeXN0ZW0ncyBuYW1lLCBiZWNhdXNlIHRoZXNlIGRldGFpbHMgZ2VudWluZWx5IGNoYW5nZSBmcm9tIGxvY2F0aW9uIHRvIGxvY2F0aW9uLgoKNAowMDowMDoyNC44MTEgLS0+IDAwOjAwOjMzLjQ2NQpGYWNpbGl0eSB0eXBlIOKAlCBwcml2YXRlLCBub24tcHJvZml0LCBzaG9ydC10ZXJtIGFjdXRlIGNhcmUsIGFuZCBzbyBvbiDigJQgd29ya3MgdGhlIHNhbWUgd2F5IGFuZCBzaG91bGQgYmUgY2hlY2tlZCBhZ2FpbnN0IHRoYXQgc3BlY2lmaWMgYWRkcmVzcy4KCjUKMDA6MDA6MzMuNDY1IC0tPiAwMDowMDozNi4zNjkKT25lIG1vcmUgdGhpbmcgdG8gd2F0Y2ggZm9yOiBsb2NhbC1yYWRpdXMgcnVsZXMuCgo2CjAwOjAwOjM2LjM2OSAtLT4gMDA6MDA6NDQuMDU1CkEgZmFjaWxpdHkgbWlnaHQgZGVmaW5lIGEgZmlmdHktbWlsZSByYWRpdXMsIGZvciBleGFtcGxlLCB0aGF0IGRldGVybWluZXMgd2hldGhlciBhIGNhbmRpZGF0ZSBjb3VudHMgYXMgbG9jYWwgb3IgYXMgYSB0cmF2ZWxlci4KCjcKMDA6MDA6NDQuMDU1IC0tPiAwMDowMDo1NS4yNTAKQ2hlY2sgdGhlIGNhbmRpZGF0ZSdzIGFkZHJlc3MgYWdhaW5zdCB0aGUgam9iJ3MgYWRkcmVzcyBldmVyeSB0aW1lIHRvIGFwcGx5IHRoaXMgY29ycmVjdGx5LCBhbmQga2VlcCBpbiBtaW5kIHRoYXQgYSB2YWxpZCBkcml2ZXIncyBsaWNlbnNlIG1heSBiZSByZXF1aXJlZCB0byBzdXBwb3J0IHRyYXZlbCBlbGlnaWJpbGl0eS4K",
          "narration": "Large health systems often operate multiple physical locations under one name, and each location can have its own trauma level, bed size, and teaching-hospital status. Cone Health is a good example — it's not one building, it's several, each different. So always record the specific facility address on the job, not just the health system's name, because these details genuinely change from location to location. Facility type — private, non-profit, short-term acute care, and so on — works the same way and should be checked against that specific address. One more thing to watch for: local-radius rules. A facility might define a fifty-mile radius, for example, that determines whether a candidate counts as local or as a traveler. Check the candidate's address against the job's address every time to apply this correctly, and keep in mind that a valid driver's license may be required to support travel eligibility.",
          "video": "clips/5.1.mp4"
        },
        {
          "id": "5.2",
          "title": "Scrub Colors: A Small Detail That Can End an Assignment",
          "hasVideo": true,
          "objective": "Recognize why scrub-color requirements must be confirmed with the candidate and documented before submission.",
          "learn": [
            "Scrub color requirements matter because a candidate's prior facility may have used a different required color (e.g., red) than the new facility requires (e.g., blue) — candidates don't always own scrubs in every required color.",
            "Beyond the stated color requirement, note whether scrubs will be provided by the facility or not — if \"provided\" isn't checked, the candidate needs to source their own scrubs in the correct color before starting.",
            "This isn't a minor detail: a real case cited in training involved a candidate showing up in the wrong-color scrubs, which led to the facility ending the assignment on the spot.",
            "Confirm scrub color (and whether it's provided) directly with the candidate, and write the confirmation into the selling points."
          ],
          "skills": [
            "Scrub-requirement verification",
            "Real-world consequence awareness"
          ],
          "terms": [],
          "takeaways": [
            "Always confirm scrub color and provision with the candidate before submission — don't assume they already own the right color.",
            "A wrong-scrub-color incident has actually ended an assignment on day one; treat this field as high-stakes, not cosmetic."
          ],
          "check": {
            "q": "A job requires blue scrubs and does not mark scrubs as \"provided.\" What should you do before submitting?",
            "options": [
              "Nothing — scrub color is cosmetic and rarely enforced",
              "Confirm with the candidate that they have (or will get) blue scrubs, since the facility won't provide them, and note it in selling points",
              "Assume the candidate's current scrubs are close enough",
              "Only check this for Auto-Offer jobs"
            ],
            "answer": 1,
            "explain": "Scrub color and provision must be confirmed with the candidate — a mismatch has caused a facility to end an assignment on arrival."
          },
          "duration": 48.26,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDUuMjkzClRoaXMgbmV4dCBkZXRhaWwgc291bmRzIHNtYWxsLCBidXQgaXQgaGFzIGdlbnVpbmVseSBlbmRlZCBhc3NpZ25tZW50cyDigJQgc28gdGFrZSBpdCBzZXJpb3VzbHkuCgoyCjAwOjAwOjA1LjI5MyAtLT4gMDA6MDA6MTIuMTIyClNjcnViIGNvbG9yIG1hdHRlcnMgYmVjYXVzZSBhIGNhbmRpZGF0ZSdzIHByZXZpb3VzIGZhY2lsaXR5IG1pZ2h0IGhhdmUgcmVxdWlyZWQgYSBkaWZmZXJlbnQgY29sb3IgdGhhbiB0aGUgbmV3IG9uZSBkb2VzLgoKMwowMDowMDoxMi4xMjIgLS0+IDAwOjAwOjE5LjE3OQpTb21lb25lIGNvbWluZyBmcm9tIGEgZmFjaWxpdHkgdGhhdCB1c2VkIHJlZCBzY3J1YnMgbWF5IG5vdCBvd24gYSBzaW5nbGUgYmx1ZSBzZXQsIGlmIHRoYXQncyB3aGF0IHRoZSBuZXcgZmFjaWxpdHkgcmVxdWlyZXMuCgo0CjAwOjAwOjE5LjE3OSAtLT4gMDA6MDA6MjMuNjc1CkJleW9uZCB0aGUgY29sb3IgaXRzZWxmLCBjaGVjayB3aGV0aGVyIHNjcnVicyB3aWxsIGJlIHByb3ZpZGVkIGJ5IHRoZSBmYWNpbGl0eS4KCjUKMDA6MDA6MjMuNjc1IC0tPiAwMDowMDozMC42NzUKSWYgcXVvdGUgcHJvdmlkZWQgdW5xdW90ZSBpc24ndCBjaGVja2VkLCB0aGUgY2FuZGlkYXRlIG5lZWRzIHRvIHNvdXJjZSB0aGUgY29ycmVjdCBjb2xvciB0aGVtc2VsdmVzIGJlZm9yZSB0aGVpciBmaXJzdCBkYXkuCgo2CjAwOjAwOjMwLjY3NSAtLT4gMDA6MDA6NDAuNDA2CkhlcmUncyB3aHkgdGhpcyBtYXR0ZXJzIHNvIG11Y2g6IGEgcmVhbCBjYXNlIGZyb20gdHJhaW5pbmcgaW52b2x2ZWQgYSBjYW5kaWRhdGUgd2hvIHNob3dlZCB1cCBpbiB0aGUgd3JvbmctY29sb3Igc2NydWJzLCBhbmQgdGhlIGZhY2lsaXR5IGVuZGVkIHRoZSBhc3NpZ25tZW50IG9uIHRoZSBzcG90LgoKNwowMDowMDo0MC40MDYgLS0+IDAwOjAwOjQ4LjI2MApBbHdheXMgY29uZmlybSBzY3J1YiBjb2xvciwgYW5kIHdoZXRoZXIgaXQncyBwcm92aWRlZCwgZGlyZWN0bHkgd2l0aCB0aGUgY2FuZGlkYXRlIOKAlCBhbmQgd3JpdGUgdGhhdCBjb25maXJtYXRpb24gaW50byB5b3VyIHNlbGxpbmcgcG9pbnRzLgo=",
          "narration": "This next detail sounds small, but it has genuinely ended assignments — so take it seriously. Scrub color matters because a candidate's previous facility might have required a different color than the new one does. Someone coming from a facility that used red scrubs may not own a single blue set, if that's what the new facility requires. Beyond the color itself, check whether scrubs will be provided by the facility. If quote provided unquote isn't checked, the candidate needs to source the correct color themselves before their first day. Here's why this matters so much: a real case from training involved a candidate who showed up in the wrong-color scrubs, and the facility ended the assignment on the spot. Always confirm scrub color, and whether it's provided, directly with the candidate — and write that confirmation into your selling points.",
          "video": "clips/5.2.mp4"
        }
      ]
    },
    {
      "id": "m6",
      "title": "Reading the Rate Table",
      "summary": "Bill rate, the on-call/callback distinction, and how state law affects holiday multipliers.",
      "lessons": [
        {
          "id": "6.1",
          "title": "Bill Rate & Overtime Multipliers",
          "hasVideo": true,
          "objective": "Read a job's rate table fields, including bill rate and overtime multiplier.",
          "learn": [
            "The rate table includes bill rate, \"pay when paid\" status, and the overtime multiplier — e.g., overtime after 48 hours in one week at a 1.25x multiplier.",
            "The overtime multiplier describes both what the facility bills at and what must be paid to the candidate for hours over the threshold — it's not just an internal billing detail.",
            "A charge-nurse premium (an added rate for working as charge) is a separate line from the base and overtime rates."
          ],
          "skills": [
            "Rate-table literacy",
            "Overtime-multiplier interpretation"
          ],
          "terms": [
            [
              "Pay When Paid",
              "A billing-status field on the rate table indicating whether payment terms are contingent on the facility's own payment to the vendor."
            ],
            [
              "Overtime Multiplier",
              "The rate multiplier (e.g., 1.25x) applied to hours worked beyond a weekly threshold (e.g., 48 hours), governing both facility billing and candidate pay."
            ]
          ],
          "takeaways": [
            "The overtime multiplier isn't just a billing number — it directly determines what the candidate is owed once they cross the weekly hour threshold."
          ],
          "duration": 32.18,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDEuOTA3CkxldCdzIHJlYWQgYSByYXRlIHRhYmxlIHByb3Blcmx5LgoKMgowMDowMDowMS45MDcgLS0+IDAwOjAwOjEzLjk4MQpZb3UnbGwgdHlwaWNhbGx5IHNlZSB0aGUgYmlsbCByYXRlLCBhIHF1b3RlIHBheSB3aGVuIHBhaWQgdW5xdW90ZSBzdGF0dXMsIGFuZCB0aGUgb3ZlcnRpbWUgbXVsdGlwbGllciDigJQgZm9yIGV4YW1wbGUsIG92ZXJ0aW1lIGtpY2tpbmcgaW4gYWZ0ZXIgZm9ydHktZWlnaHQgaG91cnMgaW4gb25lIHdlZWssIGF0IGEgb25lLXBvaW50LXR3by1maXZlIG11bHRpcGxpZXIuCgozCjAwOjAwOjEzLjk4MSAtLT4gMDA6MDA6MjUuMzA1ClRoYXQgbXVsdGlwbGllciBpc24ndCBqdXN0IGEgYmlsbGluZyBkZXRhaWwgZm9yIHRoZSBiYWNrIG9mZmljZSDigJQgaXQgZGlyZWN0bHkgZGV0ZXJtaW5lcyB3aGF0IHRoZSBmYWNpbGl0eSBiaWxscyBhdCwgYW5kIHdoYXQgaGFzIHRvIGJlIHBhaWQgdG8gdGhlIGNhbmRpZGF0ZSBvbmNlIHRoZXkgY3Jvc3MgdGhhdCB3ZWVrbHkgdGhyZXNob2xkLgoKNAowMDowMDoyNS4zMDUgLS0+IDAwOjAwOjMyLjE4MApZb3UnbGwgYWxzbyB1c3VhbGx5IHNlZSBhIHNlcGFyYXRlIGNoYXJnZS1udXJzZSBwcmVtaXVtIGxpc3RlZCBvbiBpdHMgb3duIGxpbmUsIGFwYXJ0IGZyb20gdGhlIGJhc2UgYW5kIG92ZXJ0aW1lIHJhdGVzLgo=",
          "narration": "Let's read a rate table properly. You'll typically see the bill rate, a quote pay when paid unquote status, and the overtime multiplier — for example, overtime kicking in after forty-eight hours in one week, at a one-point-two-five multiplier. That multiplier isn't just a billing detail for the back office — it directly determines what the facility bills at, and what has to be paid to the candidate once they cross that weekly threshold. You'll also usually see a separate charge-nurse premium listed on its own line, apart from the base and overtime rates.",
          "video": "clips/6.1.mp4"
        },
        {
          "id": "6.2",
          "title": "On-Call vs. Callback: The Difference That Confuses Everyone",
          "hasVideo": true,
          "prerequisite": "6.1",
          "objective": "Correctly distinguish on-call pay from callback pay when explaining rates to a candidate.",
          "learn": [
            "On-call means a candidate, after their shift ends, must remain reachable and available to return to the facility during a defined window — they're paid a flat on-call rate for simply being available, whether or not they're actually called in.",
            "Callback means the facility actually calls the candidate back in to work additional hours after their shift ended (or while off) — those worked hours are paid at the callback rate (a multiplier, e.g., 1.25x), separate from the flat on-call availability rate.",
            "Example: a shift ends at 7:30pm; if the candidate is on call afterward and does get called back in until 9:30pm, they're paid the on-call flat rate for availability plus the callback multiplier rate for the hours actually worked from 7:30-9:30pm.",
            "These two rates are frequently confused by new recruiters — being able to explain the distinction clearly to a candidate is a core competency, not a nice-to-have."
          ],
          "skills": [
            "On-call vs. callback distinction",
            "Explaining rate structures to candidates"
          ],
          "terms": [
            [
              "On-Call Rate",
              "A flat rate paid for being available/reachable to return to the facility during a defined window, regardless of whether the candidate is actually called in."
            ],
            [
              "Callback Rate",
              "The (typically multiplied) rate paid for hours actually worked after being called back to the facility outside a scheduled shift."
            ]
          ],
          "takeaways": [
            "On-call pays for availability; callback pays for hours actually worked after being called in — they can both apply in the same window."
          ],
          "check": {
            "q": "A candidate's shift ends at 7:30pm. They're on call afterward and get called back to work from 7:30-9:30pm. How is this paid?",
            "options": [
              "Only the on-call flat rate for the whole window",
              "The on-call flat rate for availability, plus the callback multiplier for the 7:30-9:30pm hours actually worked",
              "Only the callback rate for the entire on-call window",
              "Neither rate applies since the shift already ended"
            ],
            "answer": 1,
            "explain": "On-call pays for being available; callback pays the multiplier rate specifically for hours actually worked after being called back in."
          },
          "duration": 58.32,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDUuMzIyCk9uLWNhbGwgYW5kIGNhbGxiYWNrIHBheSBjb25mdXNlIGFsbW9zdCBldmVyeW9uZSBhdCBmaXJzdCwgc28gbGV0J3Mgd2FsayB0aHJvdWdoIGl0IGNhcmVmdWxseS4KCjIKMDA6MDA6MDUuMzIyIC0tPiAwMDowMDoxMy40MTkKT24tY2FsbCBtZWFucyB0aGF0IGFmdGVyIGEgY2FuZGlkYXRlJ3Mgc2hpZnQgZW5kcywgdGhleSBoYXZlIHRvIHN0YXkgcmVhY2hhYmxlIGFuZCBhdmFpbGFibGUgdG8gcmV0dXJuIHRvIHRoZSBmYWNpbGl0eSBkdXJpbmcgYSBkZWZpbmVkIHdpbmRvdy4KCjMKMDA6MDA6MTMuNDE5IC0tPiAwMDowMDoxOS42NDgKVGhleSBnZXQgcGFpZCBhIGZsYXQgb24tY2FsbCByYXRlIHNpbXBseSBmb3IgYmVpbmcgYXZhaWxhYmxlIOKAlCB3aGV0aGVyIG9yIG5vdCB0aGV5J3JlIGFjdHVhbGx5IGNhbGxlZCBiYWNrIGluLgoKNAowMDowMDoxOS42NDggLS0+IDAwOjAwOjI2LjIxNgpDYWxsYmFjayBtZWFucyB0aGUgZmFjaWxpdHkgYWN0dWFsbHkgZG9lcyBjYWxsIHRoZW0gYmFjayBpbiB0byB3b3JrIGFkZGl0aW9uYWwgaG91cnMsIG91dHNpZGUgdGhlaXIgc2NoZWR1bGVkIHNoaWZ0LgoKNQowMDowMDoyNi4yMTYgLS0+IDAwOjAwOjMzLjE4MApUaG9zZSBhY3R1YWxseS13b3JrZWQgaG91cnMgZ2V0IHBhaWQgYXQgdGhlIGNhbGxiYWNrIHJhdGUg4oCUIHR5cGljYWxseSBhIG11bHRpcGxpZXIsIGxpa2Ugb25lLXBvaW50LXR3by1maXZlIHRpbWVzIHRoZSBiYXNlLgoKNgowMDowMDozMy4xODAgLS0+IDAwOjAwOjM3LjAzMApIZXJlJ3MgYSBjbGVhbiBleGFtcGxlOiBhIHNoaWZ0IGVuZHMgYXQgc2V2ZW4tdGhpcnR5IGluIHRoZSBldmVuaW5nLgoKNwowMDowMDozNy4wMzAgLS0+IDAwOjAwOjQxLjY3MwpUaGUgY2FuZGlkYXRlIGlzIG9uIGNhbGwgYWZ0ZXJ3YXJkLCBhbmQgZG9lcyBnZXQgY2FsbGVkIGJhY2sgaW4gdW50aWwgbmluZS10aGlydHkuCgo4CjAwOjAwOjQxLjY3MyAtLT4gMDA6MDA6NTEuNDY5ClRoZXknZCBiZSBwYWlkIHRoZSBmbGF0IG9uLWNhbGwgcmF0ZSBmb3IgYmVpbmcgYXZhaWxhYmxlLCBwbHVzIHRoZSBjYWxsYmFjayBtdWx0aXBsaWVyIHNwZWNpZmljYWxseSBmb3IgdGhlIHR3byBob3VycyB0aGV5IGFjdHVhbGx5IHdvcmtlZCwgZnJvbSBzZXZlbi10aGlydHkgdG8gbmluZS10aGlydHkuCgo5CjAwOjAwOjUxLjQ2OSAtLT4gMDA6MDA6NTguMzIwCkJlaW5nIGFibGUgdG8gZXhwbGFpbiB0aGF0IGRpc3RpbmN0aW9uIGNsZWFybHkgdG8gYSBjYW5kaWRhdGUsIHdpdGhvdXQgZnVtYmxpbmcgaXQsIGlzIGEgY29yZSBza2lsbCDigJQgbm90IGEgbmljZS10by1oYXZlLgo=",
          "narration": "On-call and callback pay confuse almost everyone at first, so let's walk through it carefully. On-call means that after a candidate's shift ends, they have to stay reachable and available to return to the facility during a defined window. They get paid a flat on-call rate simply for being available — whether or not they're actually called back in. Callback means the facility actually does call them back in to work additional hours, outside their scheduled shift. Those actually-worked hours get paid at the callback rate — typically a multiplier, like one-point-two-five times the base. Here's a clean example: a shift ends at seven-thirty in the evening. The candidate is on call afterward, and does get called back in until nine-thirty. They'd be paid the flat on-call rate for being available, plus the callback multiplier specifically for the two hours they actually worked, from seven-thirty to nine-thirty. Being able to explain that distinction clearly to a candidate, without fumbling it, is a core skill — not a nice-to-have.",
          "video": "clips/6.2.mp4"
        },
        {
          "id": "6.3",
          "title": "Holiday Multipliers, State Law & Vaccine Compliance",
          "hasVideo": true,
          "objective": "Apply holiday-pay multipliers correctly and handle vaccination-compliance requirements.",
          "learn": [
            "Facility details list observed holidays and the multiplier for working them (e.g., 1.25x) — but the multiplier actually owed can be governed by state law rather than just the facility's stated default, so check state rules before quoting a rate to a candidate or client.",
            "A facility's stated multiplier is a floor, not necessarily the ceiling — if state law mandates a higher multiplier (e.g., 1.5x) than the facility lists, the higher, legally-mandated rate applies.",
            "COVID-19 and flu vaccination requirements are typically required at time of offer — confirm the candidate's vaccination status directly, and if there's a medical or religious exemption request, escalate to the onboarding team before assuming it will be accepted, since many facilities do not grant exemptions."
          ],
          "skills": [
            "Holiday-rate verification against state law",
            "Vaccine-compliance escalation"
          ],
          "terms": [
            [
              "Minimum Wage Rate",
              "A rate floor listed on facility details, distinct from the negotiated bill/pay rate, that a facility cannot legally pay below."
            ]
          ],
          "takeaways": [
            "Always check state law against the facility's listed holiday multiplier — the higher, legally mandated rate wins.",
            "Never assume a medical or religious vaccine exemption will be accepted — escalate every exemption request to onboarding before committing to the candidate."
          ],
          "duration": 52.27,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDcuNjEyCkZhY2lsaXR5IGRldGFpbHMgd2lsbCBsaXN0IG9ic2VydmVkIGhvbGlkYXlzIGFuZCB0aGUgbXVsdGlwbGllciBmb3Igd29ya2luZyB0aGVtIOKAlCBvZnRlbiBvbmUtcG9pbnQtdHdvLWZpdmUgdGltZXMgdGhlIGJhc2UgcmF0ZS4KCjIKMDA6MDA6MDcuNjEyIC0tPiAwMDowMDoxNS4zNDIKQnV0IGhlcmUncyB0aGUgY2F0Y2g6IHRoZSBtdWx0aXBsaWVyIHlvdSBhY3R1YWxseSBvd2UgY2FuIGJlIGdvdmVybmVkIGJ5IHN0YXRlIGxhdywgbm90IGp1c3Qgd2hhdGV2ZXIgdGhlIGZhY2lsaXR5J3MgZGVmYXVsdCBzYXlzLgoKMwowMDowMDoxNS4zNDIgLS0+IDAwOjAwOjE4Ljk2OQpUcmVhdCB0aGUgZmFjaWxpdHkncyBsaXN0ZWQgbnVtYmVyIGFzIGEgZmxvb3IsIG5vdCBhIGNlaWxpbmcuCgo0CjAwOjAwOjE4Ljk2OSAtLT4gMDA6MDA6MjYuNTIyCklmIHN0YXRlIGxhdyBtYW5kYXRlcyBzb21ldGhpbmcgaGlnaGVyIOKAlCBzYXksIG9uZS1wb2ludC1maXZlIHRpbWVzIOKAlCB0aGUgaGlnaGVyLCBsZWdhbGx5LXJlcXVpcmVkIHJhdGUgaXMgdGhlIG9uZSB0aGF0IGFwcGxpZXMuCgo1CjAwOjAwOjI2LjUyMiAtLT4gMDA6MDA6MzEuMjc5CkFsd2F5cyBjaGVjayBzdGF0ZSBsYXcgYmVmb3JlIHF1b3RpbmcgYSBob2xpZGF5IHJhdGUgdG8gYSBjYW5kaWRhdGUgb3IgYSBjbGllbnQuCgo2CjAwOjAwOjMxLjI3OSAtLT4gMDA6MDA6MzYuNTcxClNlcGFyYXRlbHksIENPVklELTE5IGFuZCBmbHUgdmFjY2luYXRpb24gcmVxdWlyZW1lbnRzIGFyZSB0eXBpY2FsbHkgZHVlIGF0IHRpbWUgb2Ygb2ZmZXIuCgo3CjAwOjAwOjM2LjU3MSAtLT4gMDA6MDA6NDcuMjE1CkNvbmZpcm0gdGhlIGNhbmRpZGF0ZSdzIHZhY2NpbmF0aW9uIHN0YXR1cyBkaXJlY3RseSDigJQgYW5kIGlmIHRoZXkgcmVxdWVzdCBhIG1lZGljYWwgb3IgcmVsaWdpb3VzIGV4ZW1wdGlvbiwgZXNjYWxhdGUgdGhhdCB0byB0aGUgb25ib2FyZGluZyB0ZWFtIGJlZm9yZSBhc3N1bWluZyBpdCdsbCBiZSBhY2NlcHRlZC4KCjgKMDA6MDA6NDcuMjE1IC0tPiAwMDowMDo1Mi4yNzAKUGxlbnR5IG9mIGZhY2lsaXRpZXMgc2ltcGx5IGRvbid0IGdyYW50IGV4ZW1wdGlvbnMsIHNvIG5ldmVyIG1ha2UgdGhhdCBjYWxsIHlvdXJzZWxmLgo=",
          "narration": "Facility details will list observed holidays and the multiplier for working them — often one-point-two-five times the base rate. But here's the catch: the multiplier you actually owe can be governed by state law, not just whatever the facility's default says. Treat the facility's listed number as a floor, not a ceiling. If state law mandates something higher — say, one-point-five times — the higher, legally-required rate is the one that applies. Always check state law before quoting a holiday rate to a candidate or a client. Separately, COVID-19 and flu vaccination requirements are typically due at time of offer. Confirm the candidate's vaccination status directly — and if they request a medical or religious exemption, escalate that to the onboarding team before assuming it'll be accepted. Plenty of facilities simply don't grant exemptions, so never make that call yourself.",
          "video": "clips/6.3.mp4"
        }
      ]
    },
    {
      "id": "m7",
      "title": "Requested Time Off & Onboarding Risk",
      "summary": "The one-block RTO rule, and why RTO timing is treated as a real cancellation risk.",
      "lessons": [
        {
          "id": "7.1",
          "title": "Requested Time Off: The One-Block Rule",
          "hasVideo": true,
          "objective": "Apply Aya-Lotus One's rule that only a single, continuous block of requested time off (RTO) is allowed per assignment.",
          "learn": [
            "Only one continuous block of RTO is accepted per assignment — e.g., a candidate needing days off on the 10th and 12th must request it as one continuous block, \"10th through 12th,\" not as two separate non-adjacent days (\"10th and 12th\").",
            "RTO must be evaluated across the candidate's entire assignment window, from the actual start date through the end date — not just around the middle of the contract.",
            "Getting this right requires directly asking the candidate what time off they need and for what specific dates, rather than assuming none is needed just because none was mentioned."
          ],
          "skills": [
            "RTO-policy application",
            "Precise date-range confirmation with candidates"
          ],
          "terms": [
            [
              "RTO",
              "Requested Time Off — under Aya-Lotus One's policy, limited to a single continuous block per assignment, not scattered individual days."
            ]
          ],
          "takeaways": [
            "RTO has to be one continuous block — always ask for a date range, not a list of separate days.",
            "Ask the candidate proactively about needed time off; don't wait for them to bring it up."
          ],
          "check": {
            "q": "A candidate needs the 10th and the 12th off, with no other days off needed. How should this RTO be requested?",
            "options": [
              "As two separate single-day requests: the 10th, and the 12th",
              "As one continuous block: the 10th through the 12th",
              "RTO cannot be requested at all in this case",
              "Only the 12th needs to be requested"
            ],
            "answer": 1,
            "explain": "Aya-Lotus One only accepts a single continuous block of RTO — non-adjacent single days must be requested as one spanning block."
          },
          "duration": 42.17,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDcuNjQwCkF5YS1Mb3R1cyBPbmUgaGFzIG9uZSBmaXJtIHJ1bGUgYWJvdXQgcmVxdWVzdGVkIHRpbWUgb2ZmLCBvciBSLVQtTzogb25seSBhIHNpbmdsZSwgY29udGludW91cyBibG9jayBpcyBhY2NlcHRlZCBwZXIgYXNzaWdubWVudC4KCjIKMDA6MDA6MDcuNjQwIC0tPiAwMDowMDoxOC44MjkKSGVyZSdzIHRoZSBjbGFzc2ljIG1pc3Rha2Ug4oCUIGlmIGEgY2FuZGlkYXRlIG5lZWRzIHRoZSB0ZW50aCBhbmQgdGhlIHR3ZWxmdGggb2ZmLCB3aXRoIG5vdGhpbmcgaW4gYmV0d2VlbiwgdGhhdCBoYXMgdG8gYmUgcmVxdWVzdGVkIGFzIG9uZSBjb250aW51b3VzIGJsb2NrOiB0aGUgdGVudGggdGhyb3VnaCB0aGUgdHdlbGZ0aC4KCjMKMDA6MDA6MTguODI5IC0tPiAwMDowMDoyMC4zMzMKTm90IGFzIHR3byBzZXBhcmF0ZSBkYXlzLgoKNAowMDowMDoyMC4zMzMgLS0+IDAwOjAwOjMxLjc2MwpBbmQgUi1ULU8gbmVlZHMgdG8gYmUgZXZhbHVhdGVkIGFjcm9zcyB0aGUgY2FuZGlkYXRlJ3MgZW50aXJlIGFzc2lnbm1lbnQgd2luZG93LCBmcm9tIHRoZSByZWFsIHN0YXJ0IGRhdGUgYWxsIHRoZSB3YXkgdGhyb3VnaCB0aGUgZW5kIGRhdGUg4oCUIG5vdCBqdXN0IHNvbWV3aGVyZSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBjb250cmFjdC4KCjUKMDA6MDA6MzEuNzYzIC0tPiAwMDowMDozNC44OTEKTm9uZSBvZiB0aGlzIHdvcmtzLCB0aG91Z2gsIHVubGVzcyB5b3UgYWN0dWFsbHkgYXNrLgoKNgowMDowMDozNC44OTEgLS0+IDAwOjAwOjQyLjE3MApEb24ndCBhc3N1bWUgYSBjYW5kaWRhdGUgbmVlZHMgbm8gdGltZSBvZmYganVzdCBiZWNhdXNlIHRoZXkgaGF2ZW4ndCBtZW50aW9uZWQgaXQg4oCUIGFzayBkaXJlY3RseSwgYW5kIGdldCBzcGVjaWZpYyBkYXRlcy4K",
          "narration": "Aya-Lotus One has one firm rule about requested time off, or R-T-O: only a single, continuous block is accepted per assignment. Here's the classic mistake — if a candidate needs the tenth and the twelfth off, with nothing in between, that has to be requested as one continuous block: the tenth through the twelfth. Not as two separate days. And R-T-O needs to be evaluated across the candidate's entire assignment window, from the real start date all the way through the end date — not just somewhere in the middle of the contract. None of this works, though, unless you actually ask. Don't assume a candidate needs no time off just because they haven't mentioned it — ask directly, and get specific dates.",
          "video": "clips/7.1.mp4"
        },
        {
          "id": "7.2",
          "title": "Why RTO Timing Can Cancel an Entire Assignment",
          "hasVideo": true,
          "prerequisite": "7.1",
          "objective": "Explain why RTO conflicts near onboarding are treated as a major cancellation risk, and how to mitigate it.",
          "learn": [
            "The real risk window isn't just the contract dates — it includes the onboarding/compliance period leading up to the start date. RTO or vacation plans that fall during that window can jeopardize the whole placement.",
            "A real case cited in training: a candidate went on vacation and was injured while away (a fractured leg), and the entire assignment had to be cancelled as a result — illustrating why every planned absence across the full window needs to be surfaced up front.",
            "This is framed explicitly as \"risk mitigation\": the goal isn't to guarantee nothing will ever go wrong, but to surface every known risk (planned absences, travel plans) before a client commits to an offer, so nobody is blindsided later.",
            "If a candidate's known plans conflict with the compliance timeline (documents, exams, etc. due before the start date), that conflict must be raised and resolved before submission, not discovered afterward."
          ],
          "skills": [
            "Risk-mitigation framing",
            "Full-timeline (onboarding-to-end) verification"
          ],
          "terms": [
            [
              "Risk Mitigation",
              "Proactively surfacing anything that could jeopardize a placement (planned absences, compliance timing conflicts) before an offer is made, rather than assuming it will work out."
            ]
          ],
          "takeaways": [
            "The RTO risk window starts at onboarding, not at the assignment's official start date.",
            "Surfacing a risk doesn't guarantee it won't happen — but failing to surface it is what actually damages trust when something does go wrong."
          ],
          "duration": 55.9,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDcuOTI3CkhlcmUncyBzb21ldGhpbmcgdGhhdCBzb3VuZHMgbGlrZSBhIHNtYWxsIHNjaGVkdWxpbmcgZGV0YWlsIGJ1dCBpcyBhY3R1YWxseSBvbmUgb2YgdGhlIGJpZ2dlc3QgY2FuY2VsbGF0aW9uIHJpc2tzIGluIHRoaXMgd2hvbGUgcHJvY2Vzcy4KCjIKMDA6MDA6MDcuOTI3IC0tPiAwMDowMDoxNS45MTMKVGhlIHJlYWwgcmlzayB3aW5kb3cgaXNuJ3QganVzdCB0aGUgY29udHJhY3QgZGF0ZXMg4oCUIGl0IGluY2x1ZGVzIHRoZSBvbmJvYXJkaW5nIGFuZCBjb21wbGlhbmNlIHBlcmlvZCBsZWFkaW5nIHJpZ2h0IHVwIHRvIHRoZSBzdGFydCBkYXRlLgoKMwowMDowMDoxNS45MTMgLS0+IDAwOjAwOjIyLjI2NwpJZiBhIGNhbmRpZGF0ZSdzIHZhY2F0aW9uIG9yIHRpbWUtb2ZmIHBsYW5zIGxhbmQgZHVyaW5nIHRoYXQgd2luZG93LCB0aGUgZW50aXJlIHBsYWNlbWVudCBjYW4gYmUgamVvcGFyZGl6ZWQuCgo0CjAwOjAwOjIyLjI2NyAtLT4gMDA6MDA6MzAuMzExCkEgcmVhbCBjYXNlIGZyb20gdHJhaW5pbmc6IGEgY2FuZGlkYXRlIHdlbnQgb24gdmFjYXRpb24sIHdhcyBpbmp1cmVkIHdoaWxlIGF3YXksIGFuZCB0aGUgd2hvbGUgYXNzaWdubWVudCBoYWQgdG8gYmUgY2FuY2VsbGVkIGFzIGEgcmVzdWx0LgoKNQowMDowMDozMC4zMTEgLS0+IDAwOjAwOjM3LjE4OQpUaGF0J3MgZXhhY3RseSB3aHkgZXZlcnkgcGxhbm5lZCBhYnNlbmNlIGFjcm9zcyB0aGUgZnVsbCB3aW5kb3cg4oCUIG9uYm9hcmRpbmcgaW5jbHVkZWQg4oCUIG5lZWRzIHRvIGJlIHN1cmZhY2VkIHVwIGZyb250LgoKNgowMDowMDozNy4xODkgLS0+IDAwOjAwOjQyLjc4NQpUaGlzIGlzIHdoYXQncyBtZWFudCBieSByaXNrIG1pdGlnYXRpb246IHRoZSBnb2FsIGlzbid0IGd1YXJhbnRlZWluZyBub3RoaW5nIHdpbGwgZXZlciBnbyB3cm9uZy4KCjcKMDA6MDA6NDIuNzg1IC0tPiAwMDowMDo0NS44MTYKSXQncyBtYWtpbmcgc3VyZSBub3RoaW5nIGNhdGNoZXMgYW55b25lIGJ5IHN1cnByaXNlLgoKOAowMDowMDo0NS44MTYgLS0+IDAwOjAwOjU1LjkwMApJZiBhIGNhbmRpZGF0ZSdzIGtub3duIHBsYW5zIGNvbmZsaWN0IHdpdGggdGhlIGNvbXBsaWFuY2UgdGltZWxpbmUg4oCUIGRvY3VtZW50cywgZXhhbXMsIGFueXRoaW5nIGR1ZSBiZWZvcmUgdGhlIHN0YXJ0IGRhdGUg4oCUIHJhaXNlIHRoYXQgY29uZmxpY3QgYmVmb3JlIHlvdSBzdWJtaXQsIG5vdCBhZnRlci4K",
          "narration": "Here's something that sounds like a small scheduling detail but is actually one of the biggest cancellation risks in this whole process. The real risk window isn't just the contract dates — it includes the onboarding and compliance period leading right up to the start date. If a candidate's vacation or time-off plans land during that window, the entire placement can be jeopardized. A real case from training: a candidate went on vacation, was injured while away, and the whole assignment had to be cancelled as a result. That's exactly why every planned absence across the full window — onboarding included — needs to be surfaced up front. This is what's meant by risk mitigation: the goal isn't guaranteeing nothing will ever go wrong. It's making sure nothing catches anyone by surprise. If a candidate's known plans conflict with the compliance timeline — documents, exams, anything due before the start date — raise that conflict before you submit, not after.",
          "video": "clips/7.2.mp4"
        }
      ]
    },
    {
      "id": "m8",
      "title": "Compliance Gates & Travel Eligibility",
      "summary": "Hard pass/fail requirements, first-time-traveler readiness, and the two-year travel-eligibility rule.",
      "lessons": [
        {
          "id": "8.1",
          "title": "Non-Negotiables: EKG Exams and Other Compliance Gates",
          "hasVideo": true,
          "objective": "Treat pass/fail compliance requirements (like an EKG exam) as hard gates with no exceptions.",
          "learn": [
            "Some requirements are pass/fail gates with zero flexibility — e.g., some clients require all RNs to pass an EKG competency exam during onboarding regardless of specialty; if they don't pass it, they cannot start the assignment, full stop.",
            "This is also framed as risk mitigation: flagging the requirement clearly up front doesn't guarantee the candidate will pass, but it ensures nobody is surprised if they don't.",
            "These hard gates should be explained plainly to the candidate ahead of time so there's no ambiguity about what's riding on them."
          ],
          "skills": [
            "Hard-gate compliance identification",
            "Setting clear candidate expectations"
          ],
          "terms": [],
          "takeaways": [
            "Pass/fail compliance items have no exceptions — communicate them as absolute requirements, not friendly suggestions."
          ],
          "duration": 33.17,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDIuMTMyClNvbWUgcmVxdWlyZW1lbnRzIHNpbXBseSBkb24ndCBiZW5kLgoKMgowMDowMDowMi4xMzIgLS0+IDAwOjAwOjEwLjY2MgpBbiBFS0cgY29tcGV0ZW5jeSBleGFtIHRoYXQgYSBjYW5kaWRhdGUgbXVzdCBwYXNzIGR1cmluZyBvbmJvYXJkaW5nIGlzIGEgZ29vZCBleGFtcGxlIOKAlCBpZiB0aGV5IGRvbid0IHBhc3MgaXQsIHRoZXkgY2Fubm90IHN0YXJ0IHRoZSBhc3NpZ25tZW50LgoKMwowMDowMDoxMC42NjIgLS0+IDAwOjAwOjEzLjY4MwpUaGVyZSdzIG5vIHBhcnRpYWwgY3JlZGl0IGFuZCBubyBleGNlcHRpb24gcHJvY2Vzcy4KCjQKMDA6MDA6MTMuNjgzIC0tPiAwMDowMDoyNS41ODgKVGhpcyBpcyByaXNrIG1pdGlnYXRpb24gYWdhaW4sIGp1c3QgaW4gYSBkaWZmZXJlbnQgZm9ybTogZmxhZ2dpbmcgdGhlIHJlcXVpcmVtZW50IGNsZWFybHkgdXAgZnJvbnQgZG9lc24ndCBndWFyYW50ZWUgdGhlIGNhbmRpZGF0ZSB3aWxsIHBhc3MgaXQsIGJ1dCBpdCBkb2VzIGd1YXJhbnRlZSBub2JvZHkncyBibGluZHNpZGVkIGlmIHRoZXkgZG9uJ3QuCgo1CjAwOjAwOjI1LjU4OCAtLT4gMDA6MDA6MzMuMTcwCkV4cGxhaW4gaGFyZCBnYXRlcyBsaWtlIHRoaXMgdG8gdGhlIGNhbmRpZGF0ZSBwbGFpbmx5IGFuZCBlYXJseSwgc28gdGhlcmUncyB6ZXJvIGFtYmlndWl0eSBhYm91dCB3aGF0J3MgYWN0dWFsbHkgcmlkaW5nIG9uIHRoZW0uCg==",
          "narration": "Some requirements simply don't bend. An EKG competency exam that a candidate must pass during onboarding is a good example — if they don't pass it, they cannot start the assignment. There's no partial credit and no exception process. This is risk mitigation again, just in a different form: flagging the requirement clearly up front doesn't guarantee the candidate will pass it, but it does guarantee nobody's blindsided if they don't. Explain hard gates like this to the candidate plainly and early, so there's zero ambiguity about what's actually riding on them.",
          "video": "clips/8.1.mp4"
        },
        {
          "id": "8.2",
          "title": "First-Time Travelers: What to Confirm Before You Submit",
          "hasVideo": true,
          "objective": "Assess and document a first-time traveler's readiness before submission.",
          "learn": [
            "Jobs that accept first-time travelers still carry real risk — new travelers can struggle with unfamiliar housing, environment, and culture shock in ways that experienced travelers have already adapted to.",
            "A genuine selling point for a first-time traveler is having a support system in the destination area — e.g., knowing the city already, or having friends or family nearby — since that mitigates the adjustment risk.",
            "Always get explicit confirmation from a first-time traveler that they understand what a travel assignment involves, so they don't back out mid-process once the reality sets in."
          ],
          "skills": [
            "First-time-traveler risk assessment",
            "Support-system-based selling points"
          ],
          "terms": [],
          "takeaways": [
            "A first-time traveler with a local support system (friends, family, familiarity with the area) is a stronger, more specific submission than one without."
          ],
          "duration": 42.6,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDUuMTIxCkpvYnMgdGhhdCBhY2NlcHQgZmlyc3QtdGltZSB0cmF2ZWxlcnMgc3RpbGwgY2FycnkgcmVhbCByaXNrLCBhbmQgaXQncyB3b3J0aCBuYW1pbmcgY2xlYXJseS4KCjIKMDA6MDA6MDUuMTIxIC0tPiAwMDowMDoxNi4yNjMKQSBicmFuZC1uZXcgdHJhdmVsZXIgY2FuIHN0cnVnZ2xlIHdpdGggdW5mYW1pbGlhciBob3VzaW5nLCBhbiB1bmZhbWlsaWFyIGVudmlyb25tZW50LCBhbmQgYSBmYWlyIGFtb3VudCBvZiBjdWx0dXJlIHNob2NrIOKAlCBjaGFsbGVuZ2VzIHRoYXQgYW4gZXhwZXJpZW5jZWQgdHJhdmVsZXIgaGFzIHVzdWFsbHkgYWxyZWFkeSB3b3JrZWQgdGhyb3VnaC4KCjMKMDA6MDA6MTYuMjYzIC0tPiAwMDowMDoyMi43OTEKU28gaGVyZSdzIGEgZ2VudWluZWx5IHVzZWZ1bCBzZWxsaW5nIHBvaW50IGZvciBhIGZpcnN0LXRpbWUgdHJhdmVsZXI6IGEgcmVhbCBzdXBwb3J0IHN5c3RlbSBpbiB0aGUgZGVzdGluYXRpb24gYXJlYS4KCjQKMDA6MDA6MjIuNzkxIC0tPiAwMDowMDoyNi45NTYKTWF5YmUgdGhleSBhbHJlYWR5IGtub3cgdGhlIGNpdHksIG9yIHRoZXkndmUgZ290IGZyaWVuZHMgb3IgZmFtaWx5IG5lYXJieS4KCjUKMDA6MDA6MjYuOTU2IC0tPiAwMDowMDozMi4yNDUKVGhhdCBzaW5nbGUgZGV0YWlsIG1lYW5pbmdmdWxseSBsb3dlcnMgdGhlIHJpc2sgb2YgdGhlIHBsYWNlbWVudCBmYWxsaW5nIGFwYXJ0IG1pZC1hc3NpZ25tZW50LgoKNgowMDowMDozMi4yNDUgLS0+IDAwOjAwOjQyLjYwMApBbmQgYWx3YXlzIGdldCBleHBsaWNpdCBjb25maXJtYXRpb24gdGhhdCBhIGZpcnN0LXRpbWUgdHJhdmVsZXIgYWN0dWFsbHkgdW5kZXJzdGFuZHMgd2hhdCBhIHRyYXZlbCBhc3NpZ25tZW50IGludm9sdmVzIOKAlCB5b3UgZG9uJ3Qgd2FudCB0aGVtIGJhY2tpbmcgb3V0IG9uY2UgdGhlIHJlYWxpdHkgb2YgaXQgc2V0cyBpbi4K",
          "narration": "Jobs that accept first-time travelers still carry real risk, and it's worth naming clearly. A brand-new traveler can struggle with unfamiliar housing, an unfamiliar environment, and a fair amount of culture shock — challenges that an experienced traveler has usually already worked through. So here's a genuinely useful selling point for a first-time traveler: a real support system in the destination area. Maybe they already know the city, or they've got friends or family nearby. That single detail meaningfully lowers the risk of the placement falling apart mid-assignment. And always get explicit confirmation that a first-time traveler actually understands what a travel assignment involves — you don't want them backing out once the reality of it sets in.",
          "video": "clips/8.2.mp4"
        },
        {
          "id": "8.3",
          "title": "The Two-Year Rule: Who Actually Qualifies as a Traveler",
          "hasVideo": true,
          "prerequisite": "8.2",
          "objective": "Apply the general rule for minimum staff experience required for travel eligibility, and recognize facility-specific exceptions.",
          "learn": [
            "The general rule: a candidate needs a minimum of two years of staff (non-travel) experience in a specific specialty to be considered eligible to work that specialty as a traveler.",
            "This is a general rule, not universal — some facilities set their own thresholds; one example cited was Cleveland Clinic Ohio, described as requiring roughly 10-18 months of home/staff experience before considering someone travel-eligible for their facility specifically.",
            "When in doubt about a facility-specific exception, verify rather than assume the general two-year rule applies everywhere."
          ],
          "skills": [
            "Travel-eligibility rule application",
            "Facility-specific exception verification"
          ],
          "terms": [
            [
              "Travel-Eligible",
              "Having enough staff (non-travel) experience in a given specialty — generally two years, though some facilities vary — to be submitted for a travel assignment in that specialty."
            ]
          ],
          "takeaways": [
            "Two years of specialty staff experience is the general rule for travel eligibility — but always check for facility-specific variations before assuming it applies."
          ],
          "check": {
            "q": "What is the general minimum staff experience needed in a specialty for a candidate to be considered travel-eligible in that specialty?",
            "options": [
              "6 months",
              "1 year",
              "2 years",
              "5 years"
            ],
            "answer": 2,
            "explain": "The general rule cited in training is two years of staff experience in the specialty, though some facilities set their own thresholds."
          },
          "duration": 37.61,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MTIuNjMzCkhlcmUncyB0aGUgZ2VuZXJhbCBydWxlIGZvciB0cmF2ZWwgZWxpZ2liaWxpdHk6IGEgY2FuZGlkYXRlIG5lZWRzIGEgbWluaW11bSBvZiB0d28geWVhcnMgb2Ygc3RhZmYg4oCUIG1lYW5pbmcgbm9uLXRyYXZlbCDigJQgZXhwZXJpZW5jZSBpbiBhIHNwZWNpZmljIHNwZWNpYWx0eSBiZWZvcmUgdGhleSdyZSBjb25zaWRlcmVkIGVsaWdpYmxlIHRvIHRyYXZlbCBpbiB0aGF0IHNwZWNpYWx0eS4KCjIKMDA6MDA6MTIuNjMzIC0tPiAwMDowMDoxNS43NDgKQnV0IHRyZWF0IHRoYXQgYXMgYSBnZW5lcmFsIHJ1bGUsIG5vdCBhIHVuaXZlcnNhbCBvbmUuCgozCjAwOjAwOjE1Ljc0OCAtLT4gMDA6MDA6MjkuNjUwClNvbWUgZmFjaWxpdGllcyBzZXQgdGhlaXIgb3duIHRocmVzaG9sZHMg4oCUIENsZXZlbGFuZCBDbGluaWMgaW4gT2hpbywgZm9yIGluc3RhbmNlLCBoYXMgYmVlbiBkZXNjcmliZWQgYXMgbG9va2luZyBmb3Igc29tZXRoaW5nIGNsb3NlciB0byB0ZW4gdG8gZWlnaHRlZW4gbW9udGhzIG9mIGhvbWUgZXhwZXJpZW5jZSBiZWZvcmUgY29uc2lkZXJpbmcgc29tZW9uZSB0cmF2ZWwtZWxpZ2libGUgdGhlcmUgc3BlY2lmaWNhbGx5LgoKNAowMDowMDoyOS42NTAgLS0+IDAwOjAwOjM3LjYxMApTbyB3aGVuIHlvdSdyZSBub3Qgc3VyZSB3aGV0aGVyIGEgZmFjaWxpdHkgaGFzIGl0cyBvd24gZXhjZXB0aW9uLCBjaGVjayDigJQgZG9uJ3QganVzdCBhc3N1bWUgdGhlIHN0YW5kYXJkIHR3by15ZWFyIHJ1bGUgYXBwbGllcyBldmVyeXdoZXJlLgo=",
          "narration": "Here's the general rule for travel eligibility: a candidate needs a minimum of two years of staff — meaning non-travel — experience in a specific specialty before they're considered eligible to travel in that specialty. But treat that as a general rule, not a universal one. Some facilities set their own thresholds — Cleveland Clinic in Ohio, for instance, has been described as looking for something closer to ten to eighteen months of home experience before considering someone travel-eligible there specifically. So when you're not sure whether a facility has its own exception, check — don't just assume the standard two-year rule applies everywhere.",
          "video": "clips/8.3.mp4"
        }
      ]
    },
    {
      "id": "m9",
      "title": "The Screening Conversation",
      "summary": "Completing the job overview questionnaire truthfully, and treating screening as a real conversation.",
      "lessons": [
        {
          "id": "9.1",
          "title": "The Job Overview Questionnaire: Why Y/N Means Y/N",
          "hasVideo": true,
          "objective": "Correctly complete the job's screening questionnaire based on an actual conversation with the candidate.",
          "learn": [
            "Every job's overview section includes a short questionnaire — e.g., \"Is your candidate aware they're being submitted to this location and have they reviewed the job description?\", \"Is your candidate flexible with scheduling and aware of the client's zero-tolerance policy?\", \"Are there any barriers (e.g., upcoming vacation) that would prevent your candidate from completing compliance on time?\" — often with a hard compliance deadline spelled out right in the question, such as \"12 Noon EST the Wednesday prior to the start date.\"",
            "Answers must be entered as the literal letters \"Y\" or \"N\" — not the words \"yes\" or \"no.\"",
            "Critically, these answers must reflect an actual conversation you had with the candidate about each question — not your own assumption or a default \"yes\" applied to every field."
          ],
          "skills": [
            "Screening-questionnaire completion",
            "Candidate-conversation discipline"
          ],
          "terms": [],
          "takeaways": [
            "Y/N fields mean the literal letter, not the word.",
            "Every questionnaire answer must reflect a real conversation with the candidate about that specific question — never assume."
          ],
          "check": {
            "q": "How should the job overview questionnaire's yes/no fields be answered?",
            "options": [
              "Type the word \"Yes\" or \"No\"",
              "Type the literal letter \"Y\" or \"N\", based on an actual conversation with the candidate",
              "Leave blank if unsure",
              "Always answer \"Y\" to move faster through Auto-Offer jobs"
            ],
            "answer": 1,
            "explain": "Fields must use the literal Y/N letters, and every answer must be grounded in a real conversation with the candidate."
          },
          "duration": 49.94,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDYuMTg3CkV2ZXJ5IGpvYidzIG92ZXJ2aWV3IHNlY3Rpb24gaW5jbHVkZXMgYSBzaG9ydCBxdWVzdGlvbm5haXJlLCBhbmQgZ2V0dGluZyB0aGlzIHJpZ2h0IG1hdHRlcnMgbW9yZSB0aGFuIGl0IGxvb2tzLgoKMgowMDowMDowNi4xODcgLS0+IDAwOjAwOjE0LjMyNApZb3UnbGwgdHlwaWNhbGx5IHNlZSBxdWVzdGlvbnMgbGlrZTogaXMgeW91ciBjYW5kaWRhdGUgYXdhcmUgdGhleSdyZSBiZWluZyBzdWJtaXR0ZWQgdG8gdGhpcyBsb2NhdGlvbiwgYW5kIGhhdmUgdGhleSByZXZpZXdlZCB0aGUgam9iIGRlc2NyaXB0aW9uPwoKMwowMDowMDoxNC4zMjQgLS0+IDAwOjAwOjE5LjQ1MgpJcyB5b3VyIGNhbmRpZGF0ZSBmbGV4aWJsZSB3aXRoIHNjaGVkdWxpbmcsIGFuZCBhd2FyZSBvZiB0aGUgY2xpZW50J3MgemVyby10b2xlcmFuY2UgcG9saWN5PwoKNAowMDowMDoxOS40NTIgLS0+IDAwOjAwOjMzLjYwOQpBcmUgdGhlcmUgYW55IGJhcnJpZXJzIOKAlCBhbiB1cGNvbWluZyB2YWNhdGlvbiwgZm9yIGV4YW1wbGUg4oCUIHRoYXQgd291bGQgcHJldmVudCB5b3VyIGNhbmRpZGF0ZSBmcm9tIGNvbXBsZXRpbmcgY29tcGxpYW5jZSBvbiB0aW1lLCBvZnRlbiBieSBhIHNwZWNpZmljIGhhcmQgZGVhZGxpbmUgc3BlbGxlZCBvdXQgcmlnaHQgaW4gdGhlIHF1ZXN0aW9uLCBsaWtlIG5vb24gRWFzdGVybiB0aGUgV2VkbmVzZGF5IGJlZm9yZSB0aGUgc3RhcnQgZGF0ZT8KCjUKMDA6MDA6MzMuNjA5IC0tPiAwMDowMDozNC40NDUKVHdvIHJ1bGVzIGhlcmUuCgo2CjAwOjAwOjM0LjQ0NSAtLT4gMDA6MDA6MzguNzM3CkZpcnN0LCBhbnN3ZXJzIGdvIGluIGFzIHRoZSBsaXRlcmFsIGxldHRlcnMgWSBvciBOIOKAlCBub3QgdGhlIHdvcmRzIHllcyBvciBuby4KCjcKMDA6MDA6MzguNzM3IC0tPiAwMDowMDo0Ni44NzQKU2Vjb25kLCBhbmQgZmFyIG1vcmUgaW1wb3J0YW50OiBldmVyeSBzaW5nbGUgYW5zd2VyIGhhcyB0byByZWZsZWN0IGFuIGFjdHVhbCBjb252ZXJzYXRpb24geW91IGhhZCB3aXRoIHRoZSBjYW5kaWRhdGUgYWJvdXQgdGhhdCBzcGVjaWZpYyBxdWVzdGlvbi4KCjgKMDA6MDA6NDYuODc0IC0tPiAwMDowMDo0OS45NDAKTmV2ZXIgZGVmYXVsdCB0byB5ZXMgYWNyb3NzIHRoZSBib2FyZCwgYW5kIG5ldmVyIGd1ZXNzLgo=",
          "narration": "Every job's overview section includes a short questionnaire, and getting this right matters more than it looks. You'll typically see questions like: is your candidate aware they're being submitted to this location, and have they reviewed the job description? Is your candidate flexible with scheduling, and aware of the client's zero-tolerance policy? Are there any barriers — an upcoming vacation, for example — that would prevent your candidate from completing compliance on time, often by a specific hard deadline spelled out right in the question, like noon Eastern the Wednesday before the start date? Two rules here. First, answers go in as the literal letters Y or N — not the words yes or no. Second, and far more important: every single answer has to reflect an actual conversation you had with the candidate about that specific question. Never default to yes across the board, and never guess.",
          "video": "clips/9.1.mp4"
        },
        {
          "id": "9.2",
          "title": "Matching the Candidate to the Patient Population",
          "hasVideo": true,
          "objective": "Confirm a candidate is genuinely comfortable with the specific patient population and conditions described in the job.",
          "learn": [
            "The Job Description's opening questions (e.g., about observing/caring for patients with specific respiratory, medical, or end-of-life conditions) exist to confirm the candidate is comfortable with the actual patient population they'd encounter — not just the unit's specialty label.",
            "A real example from training: a candidate ultimately declined a placement because caring for patients at end of life conflicted with their personal religious beliefs — a conflict that only surfaced because the recruiter actually screened for it.",
            "Checking a box that a candidate was \"screened\" only has value if a real conversation happened about the specific conditions and situations described in the job — not a generic confirmation that the resume matches the specialty."
          ],
          "skills": [
            "Patient-condition screening",
            "Substantive candidate conversations"
          ],
          "terms": [],
          "takeaways": [
            "\"I screened the candidate\" should mean a specific conversation about the job's actual patient population and conditions — not a formality."
          ],
          "duration": 47.5,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MTcuNTQ4ClRoZSBKb2IgRGVzY3JpcHRpb24ncyBvcGVuaW5nIHF1ZXN0aW9ucyDigJQgYWJvdXQgYSBwYXRpZW50J3MgcmVzcGlyYXRvcnkgY29uZGl0aW9uLCBnZW5lcmFsIG1lZGljYWwgbmVlZHMsIG9yIGV2ZW4gZW5kLW9mLWxpZmUgY2FyZSDigJQgZXhpc3QgZm9yIG9uZSByZWFzb246IHRvIGNvbmZpcm0gdGhlIGNhbmRpZGF0ZSBpcyBnZW51aW5lbHkgY29tZm9ydGFibGUgd2l0aCB0aGUgcmVhbCBwYXRpZW50IHBvcHVsYXRpb24gdGhleSdkIGJlIHdvcmtpbmcgd2l0aCwgbm90IGp1c3QgdGhlIHVuaXQncyBzcGVjaWFsdHkgbGFiZWwgb24gcGFwZXIuCgoyCjAwOjAwOjE3LjU0OCAtLT4gMDA6MDA6MjguNjk0CkhlcmUncyBhIHJlYWwgZXhhbXBsZSB0aGF0IHNob3dzIGV4YWN0bHkgd2h5IHRoaXMgbWF0dGVyczogYSBjYW5kaWRhdGUgdWx0aW1hdGVseSBkZWNsaW5lZCBhIHBsYWNlbWVudCBiZWNhdXNlIGNhcmluZyBmb3IgcGF0aWVudHMgYXQgZW5kIG9mIGxpZmUgY29uZmxpY3RlZCB3aXRoIHRoZWlyIHBlcnNvbmFsIHJlbGlnaW91cyBiZWxpZWZzLgoKMwowMDowMDoyOC42OTQgLS0+IDAwOjAwOjMyLjY5NgpUaGF0IGNvbmZsaWN0IG9ubHkgY2FtZSB0byBsaWdodCBiZWNhdXNlIHRoZSByZWNydWl0ZXIgYWN0dWFsbHkgYXNrZWQuCgo0CjAwOjAwOjMyLjY5NiAtLT4gMDA6MDA6NDcuNTAwCkNoZWNraW5nIGEgYm94IHRoYXQgc2F5cyBhIGNhbmRpZGF0ZSB3YXMgcXVvdGUgc2NyZWVuZWQgdW5xdW90ZSBvbmx5IG1lYW5zIHNvbWV0aGluZyBpZiBhIHJlYWwgY29udmVyc2F0aW9uIGhhcHBlbmVkIGFib3V0IHRoZSBzcGVjaWZpYyBjb25kaXRpb25zIGFuZCBzaXR1YXRpb25zIGRlc2NyaWJlZCBpbiB0aGF0IGpvYiDigJQgbm90IGEgZ2VuZXJpYyBjb25maXJtYXRpb24gdGhhdCB0aGUgcmVzdW1lIHJvdWdobHkgbWF0Y2hlcyB0aGUgc3BlY2lhbHR5Lgo=",
          "narration": "The Job Description's opening questions — about a patient's respiratory condition, general medical needs, or even end-of-life care — exist for one reason: to confirm the candidate is genuinely comfortable with the real patient population they'd be working with, not just the unit's specialty label on paper. Here's a real example that shows exactly why this matters: a candidate ultimately declined a placement because caring for patients at end of life conflicted with their personal religious beliefs. That conflict only came to light because the recruiter actually asked. Checking a box that says a candidate was quote screened unquote only means something if a real conversation happened about the specific conditions and situations described in that job — not a generic confirmation that the resume roughly matches the specialty.",
          "video": "clips/9.2.mp4"
        },
        {
          "id": "9.3",
          "title": "Screening Is a Conversation, Not a Checkbox",
          "hasVideo": true,
          "prerequisite": "9.1",
          "objective": "Internalize the discipline of reading every field methodically rather than rushing to submit.",
          "learn": [
            "The overall expectation is to go through a job's documents item by item, without skipping — this takes longer at first, but becomes fast to skim once the pattern is familiar.",
            "Every \"yes\" or confirmation entered on a submission should trace back to something the recruiter actually verified or a conversation they actually had — not a convenient assumption.",
            "This discipline is what separates submissions that get taken seriously by client reviewers from ones that get quietly deprioritized over time."
          ],
          "skills": [
            "Methodical document review",
            "Submission integrity"
          ],
          "terms": [],
          "takeaways": [
            "Go item by item, every time — the speed comes later, once the pattern is familiar, not by skipping steps now."
          ],
          "duration": 36.46,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDQuODQ2CkxldCdzIGNsb3NlIHRoaXMgcGFydCBvZiB0aGUgY291cnNlIHdpdGggdGhlIGRpc2NpcGxpbmUgdGhhdCB0aWVzIGV2ZXJ5dGhpbmcgdG9nZXRoZXIuCgoyCjAwOjAwOjA0Ljg0NiAtLT4gMDA6MDA6MDkuODA1ClRoZSBleHBlY3RhdGlvbiBpcyB0byBnbyB0aHJvdWdoIGEgam9iJ3MgZG9jdW1lbnRzIGl0ZW0gYnkgaXRlbSwgd2l0aG91dCBza2lwcGluZyBhaGVhZC4KCjMKMDA6MDA6MDkuODA1IC0tPiAwMDowMDoxNy4xODcKSXQgdGFrZXMgbG9uZ2VyIGF0IGZpcnN0LCBhbmQgdGhhdCdzIGZpbmUg4oCUIHlvdSdsbCBsZWFybiB0byBza2ltIHRoZSBmYW1pbGlhciBwYXJ0cyBxdWlja2x5IG9uY2UgdGhlIHBhdHRlcm4gYmVjb21lcyBzZWNvbmQgbmF0dXJlLgoKNAowMDowMDoxNy4xODcgLS0+IDAwOjAwOjI2LjY1NQpXaGF0IG1hdHRlcnMgaXMgdGhpczogZXZlcnkgeWVzLCBldmVyeSBjb25maXJtYXRpb24geW91IGVudGVyIG9uIGEgc3VibWlzc2lvbiwgc2hvdWxkIHRyYWNlIGJhY2sgdG8gc29tZXRoaW5nIHlvdSBhY3R1YWxseSB2ZXJpZmllZCwgb3IgYSBjb252ZXJzYXRpb24geW91IGFjdHVhbGx5IGhhZC4KCjUKMDA6MDA6MjYuNjU1IC0tPiAwMDowMDoyOC4yMzMKTm90IGEgY29udmVuaWVudCBhc3N1bXB0aW9uLgoKNgowMDowMDoyOC4yMzMgLS0+IDAwOjAwOjM2LjQ2MApUaGF0IGRpc2NpcGxpbmUgaXMgZXhhY3RseSB3aGF0IHNlcGFyYXRlcyBzdWJtaXNzaW9ucyB0aGF0IGNsaWVudCByZXZpZXdlcnMgdGFrZSBzZXJpb3VzbHkgZnJvbSB0aGUgb25lcyB0aGF0IHF1aWV0bHkgZ2V0IGRlcHJpb3JpdGl6ZWQgb3ZlciB0aW1lLgo=",
          "narration": "Let's close this part of the course with the discipline that ties everything together. The expectation is to go through a job's documents item by item, without skipping ahead. It takes longer at first, and that's fine — you'll learn to skim the familiar parts quickly once the pattern becomes second nature. What matters is this: every yes, every confirmation you enter on a submission, should trace back to something you actually verified, or a conversation you actually had. Not a convenient assumption. That discipline is exactly what separates submissions that client reviewers take seriously from the ones that quietly get deprioritized over time.",
          "video": "clips/9.3.mp4"
        }
      ]
    },
    {
      "id": "m10",
      "title": "Building the Submittal Packet",
      "summary": "The Right-Sourcing cover sheet, standardized resume formatting, and validating facility claims independently.",
      "lessons": [
        {
          "id": "10.1",
          "title": "The Right-Sourcing Cover Sheet, Field by Field",
          "hasVideo": false,
          "objective": "Complete a Right-Sourcing cover sheet accurately and consistently for any client.",
          "learn": [
            "The cover sheet format is standardized across clients (e.g., UNC, Mount Sinai, NYCHH) — the same fields and structure apply regardless of which health system the submission is going to.",
            "Key fields: candidate name, permanent address, contact information, how soon the candidate is available (must match what's stated in the portal), interview availability by day of the week, shift preference (state \"nights\" explicitly if applicable — don't let it default silently), and weekend availability.",
            "Certifications listed on the cover sheet (e.g., BLS, ACLS, NIHSS) must match what's on the resume exactly — as must state license number and education details.",
            "Previous relevant experience should list the candidate's specific experience in that unit's specialty — hospital name, location, and duration — using judgment on how many contracts to include; recruiters are coached to be consistent, not to pad with every tangentially related contract."
          ],
          "skills": [
            "Cover-sheet completion",
            "Cross-document consistency (cover sheet vs. resume)"
          ],
          "terms": [
            [
              "Right-Sourcing Cover Sheet",
              "The standardized submittal cover sheet used across HonorVet's healthcare clients, capturing candidate availability, certifications, licensure, and relevant experience."
            ]
          ],
          "takeaways": [
            "Certifications, license numbers, and education on the cover sheet must exactly match the resume — mismatches are a common rejection cause.",
            "Availability stated on the cover sheet must match what's recorded in the portal — don't let the two drift apart."
          ],
          "duration": 63.07,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDUuMzUwCk5vdyBsZXQncyBidWlsZCB0aGUgc3VibWl0dGFsIHBhY2tldCBpdHNlbGYsIHN0YXJ0aW5nIHdpdGggdGhlIFJpZ2h0LVNvdXJjaW5nIGNvdmVyIHNoZWV0LgoKMgowMDowMDowNS4zNTAgLS0+IDAwOjAwOjE1LjkzMQpUaGUgZm9ybWF0IGlzIHN0YW5kYXJkaXplZCBhY3Jvc3MgY2xpZW50cyDigJQgVS1OLUMsIE1vdW50IFNpbmFpLCBOZXcgWW9yay1QcmVzYnl0ZXJpYW4g4oCUIHNvIHRoZSBzYW1lIGZpZWxkcyBhbmQgc3RydWN0dXJlIGFwcGx5IG5vIG1hdHRlciB3aGljaCBoZWFsdGggc3lzdGVtIHlvdSdyZSBzdWJtaXR0aW5nIHRvLgoKMwowMDowMDoxNS45MzEgLS0+IDAwOjAwOjM2LjAyMwpLZXkgZmllbGRzIGluY2x1ZGUgdGhlIGNhbmRpZGF0ZSdzIG5hbWUsIHBlcm1hbmVudCBhZGRyZXNzLCBhbmQgY29udGFjdCBpbmZvcm1hdGlvbjsgaG93IHNvb24gdGhleSdyZSBhdmFpbGFibGUsIHdoaWNoIGhhcyB0byBtYXRjaCB3aGF0J3Mgc3RhdGVkIGluIHRoZSBwb3J0YWw7IHRoZWlyIGludGVydmlldyBhdmFpbGFiaWxpdHkgYnkgZGF5IG9mIHRoZSB3ZWVrOyBzaGlmdCBwcmVmZXJlbmNlIOKAlCBzdGF0ZSBxdW90ZSBuaWdodHMgdW5xdW90ZSBleHBsaWNpdGx5IGlmIGl0IGFwcGxpZXMsIGRvbid0IGxldCBpdCBkZWZhdWx0IHNpbGVudGx5OyBhbmQgd2Vla2VuZCBhdmFpbGFiaWxpdHkuCgo0CjAwOjAwOjM2LjAyMyAtLT4gMDA6MDA6NDUuNzcyCkNlcnRpZmljYXRpb25zIGxpc3RlZCBvbiB0aGUgY292ZXIgc2hlZXQg4oCUIEItTC1TLCBBLUMtTC1TLCBOLUktSC1TLVMg4oCUIGhhdmUgdG8gbWF0Y2ggdGhlIHJlc3VtZSBleGFjdGx5LCBhbmQgc28gZG9lcyB0aGUgc3RhdGUgbGljZW5zZSBudW1iZXIgYW5kIGVkdWNhdGlvbiBkZXRhaWxzLgoKNQowMDowMDo0NS43NzIgLS0+IDAwOjAwOjU3LjQ4MgpGb3IgcHJldmlvdXMgcmVsZXZhbnQgZXhwZXJpZW5jZSwgbGlzdCB0aGUgY2FuZGlkYXRlJ3Mgc3BlY2lmaWMgZXhwZXJpZW5jZSBpbiB0aGF0IHVuaXQncyBzcGVjaWFsdHkg4oCUIGhvc3BpdGFsIG5hbWUsIGxvY2F0aW9uLCBhbmQgZHVyYXRpb24g4oCUIGFuZCB1c2UgZ29vZCBqdWRnbWVudCBvbiBob3cgbWFueSBjb250cmFjdHMgdG8gaW5jbHVkZS4KCjYKMDA6MDA6NTcuNDgyIC0tPiAwMDowMTowMy4wNzAKQmUgY29uc2lzdGVudCBhY3Jvc3Mgc3VibWlzc2lvbnMsIG5vdCBwYWRkZWQgd2l0aCBldmVyeSBsb29zZWx5IHJlbGF0ZWQgY29udHJhY3QgeW91IGNhbiBmaW5kLgo=",
          "narration": "Now let's build the submittal packet itself, starting with the Right-Sourcing cover sheet. The format is standardized across clients — U-N-C, Mount Sinai, New York-Presbyterian — so the same fields and structure apply no matter which health system you're submitting to. Key fields include the candidate's name, permanent address, and contact information; how soon they're available, which has to match what's stated in the portal; their interview availability by day of the week; shift preference — state quote nights unquote explicitly if it applies, don't let it default silently; and weekend availability. Certifications listed on the cover sheet — B-L-S, A-C-L-S, N-I-H-S-S — have to match the resume exactly, and so does the state license number and education details. For previous relevant experience, list the candidate's specific experience in that unit's specialty — hospital name, location, and duration — and use good judgment on how many contracts to include. Be consistent across submissions, not padded with every loosely related contract you can find.",
          "audio": "audio/10.1.mp3",
          "image": "images/cover-sheet-sample.png",
          "imageAlt": "Sample Right-Sourcing submission cover sheet with placeholder candidate data",
          "imageCaption": "Sample cover sheet shown with placeholder data for illustration — every real submission must use the candidate's actual information, matching the resume exactly."
        },
        {
          "id": "10.2",
          "title": "Standard Resume Formatting Rules",
          "hasVideo": false,
          "prerequisite": "10.1",
          "objective": "Format a candidate's resume to the standardized submission format before it goes out.",
          "learn": [
            "The candidate's name should not appear in the body of the resume itself — use a generic descriptor instead (e.g., \"highly skilled registered nurse\").",
            "Professional summaries are typically 6-7 concise bullet points highlighting the candidate's core strengths and specialties.",
            "Formatting conventions: facility name is bolded, location is not bolded, and dates plus job title follow a consistent unbolded style — applied the same way across every entry.",
            "Each professional experience entry should include facility type, position type, bed count, trauma level (where applicable), patient ratio, and charting/EMR system — mirroring what the job's Unit Details will ask for.",
            "Employment gaps must always be explained — even briefly (e.g., \"actively pursuing nursing opportunities and available to start work immediately\") rather than left blank."
          ],
          "skills": [
            "Standardized resume formatting",
            "Gap documentation"
          ],
          "terms": [],
          "takeaways": [
            "Never include the candidate's name in the resume body — use a neutral role descriptor instead.",
            "Every employment gap needs an explanation, even a short one — a blank gap reads as a red flag."
          ],
          "practice": "Using the sample resume format, rewrite one job entry from a candidate's real resume to match the standard structure: bolded facility name, unbolded location/dates/title, and a bullet list of duties.",
          "duration": 60.29,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDUuMDI0ClJlc3VtZSBmb3JtYXR0aW5nIGhhcyBhIHN0YW5kYXJkIHRvIGZvbGxvdywgYW5kIGl0J3Mgd29ydGggZG9pbmcgcmlnaHQgZXZlcnkgdGltZS4KCjIKMDA6MDA6MDUuMDI0IC0tPiAwMDowMDoxNC44ODkKVGhlIGNhbmRpZGF0ZSdzIG5hbWUgc2hvdWxkIG5ldmVyIGFwcGVhciBpbiB0aGUgYm9keSBvZiB0aGUgcmVzdW1lIGl0c2VsZiDigJQgdXNlIGEgZ2VuZXJpYyBkZXNjcmlwdG9yIGluc3RlYWQsIGxpa2UgcXVvdGUgaGlnaGx5IHNraWxsZWQgcmVnaXN0ZXJlZCBudXJzZSB1bnF1b3RlLgoKMwowMDowMDoxNC44ODkgLS0+IDAwOjAwOjIyLjM2NApQcm9mZXNzaW9uYWwgc3VtbWFyaWVzIHJ1biBzaXggdG8gc2V2ZW4gY29uY2lzZSBidWxsZXQgcG9pbnRzIGhpZ2hsaWdodGluZyB0aGUgY2FuZGlkYXRlJ3MgY29yZSBzdHJlbmd0aHMgYW5kIHNwZWNpYWx0aWVzLgoKNAowMDowMDoyMi4zNjQgLS0+IDAwOjAwOjMzLjU3NgpPbiBmb3JtYXR0aW5nOiB0aGUgZmFjaWxpdHkgbmFtZSBpcyBib2xkZWQsIHRoZSBsb2NhdGlvbiBpcyBub3QsIGFuZCBkYXRlcyBwbHVzIGpvYiB0aXRsZSBmb2xsb3cgYSBjb25zaXN0ZW50LCB1bmJvbGRlZCBzdHlsZSB0aHJvdWdob3V0IOKAlCBhcHBsaWVkIGV4YWN0bHkgdGhlIHNhbWUgd2F5IGluIGV2ZXJ5IGVudHJ5LgoKNQowMDowMDozMy41NzYgLS0+IDAwOjAwOjQ3LjU0NgpFYWNoIHByb2Zlc3Npb25hbCBleHBlcmllbmNlIGVudHJ5IHNob3VsZCBpbmNsdWRlIGZhY2lsaXR5IHR5cGUsIHBvc2l0aW9uIHR5cGUsIGJlZCBjb3VudCwgdHJhdW1hIGxldmVsIHdoZXJlIGl0IGFwcGxpZXMsIHBhdGllbnQgcmF0aW8sIGFuZCB0aGUgY2hhcnRpbmcgb3IgRS1NLVIgc3lzdGVtIHVzZWQg4oCUIG1pcnJvcmluZyB3aGF0IHRoZSBqb2IncyBVbml0IERldGFpbHMgd2lsbCBhc2sgZm9yLgoKNgowMDowMDo0Ny41NDYgLS0+IDAwOjAwOjU3LjY1NQpBbmQgZW1wbG95bWVudCBnYXBzIGFsd2F5cyBuZWVkIGFuIGV4cGxhbmF0aW9uLCBldmVuIGEgc2hvcnQgb25lLCBsaWtlIHF1b3RlIGFjdGl2ZWx5IHB1cnN1aW5nIG51cnNpbmcgb3Bwb3J0dW5pdGllcyBhbmQgYXZhaWxhYmxlIHRvIHN0YXJ0IHdvcmsgaW1tZWRpYXRlbHkgdW5xdW90ZS4KCjcKMDA6MDA6NTcuNjU1IC0tPiAwMDowMTowMC4yOTAKQSBibGFuayBnYXAgcmVhZHMgYXMgYSByZWQgZmxhZyBldmVyeSB0aW1lLgo=",
          "narration": "Resume formatting has a standard to follow, and it's worth doing right every time. The candidate's name should never appear in the body of the resume itself — use a generic descriptor instead, like quote highly skilled registered nurse unquote. Professional summaries run six to seven concise bullet points highlighting the candidate's core strengths and specialties. On formatting: the facility name is bolded, the location is not, and dates plus job title follow a consistent, unbolded style throughout — applied exactly the same way in every entry. Each professional experience entry should include facility type, position type, bed count, trauma level where it applies, patient ratio, and the charting or E-M-R system used — mirroring what the job's Unit Details will ask for. And employment gaps always need an explanation, even a short one, like quote actively pursuing nursing opportunities and available to start work immediately unquote. A blank gap reads as a red flag every time.",
          "audio": "audio/10.2.mp3"
        },
        {
          "id": "10.3",
          "title": "Facility Validation via ASD & References at Submittal",
          "hasVideo": false,
          "objective": "Validate facility claims independently and complete reference checks before submitting.",
          "learn": [
            "Trauma level, bed size, and facility type claims should be validated independently — using a resource like the American Hospital Directory (ASD/AHD) — rather than trusted at face value from the resume or the candidate's own description.",
            "It doesn't matter what's written in the resume if it doesn't hold up against the independently verified facility data — the verified source wins.",
            "References must be verified at the time of submittal, not left for later; results are marked (accepted or rejected) directly in JobDiva with supporting notes — a reference can't be submitted without documentation of the outcome.",
            "Driver's license is not automatically mandatory, but if a facility does require one, the address on the license must match the candidate's stated permanent address — a mismatch has caused real rejections."
          ],
          "skills": [
            "Independent facility-data verification",
            "Reference-check documentation",
            "License/address consistency checks"
          ],
          "terms": [
            [
              "ASD / American Hospital Directory",
              "An independent reference used to verify a facility's actual trauma level, bed size, and facility type — used to check claims rather than trusting the resume or candidate description alone."
            ]
          ],
          "takeaways": [
            "Verify facility details independently via a resource like the American Hospital Directory — don't take resume claims at face value.",
            "A driver's license address that doesn't match the candidate's stated permanent address is a real, documented cause of rejection."
          ],
          "check": {
            "q": "Where should a recruiter verify a candidate's claimed facility trauma level and bed size, rather than trusting the resume alone?",
            "options": [
              "The candidate's LinkedIn profile",
              "An independent source like the American Hospital Directory (ASD)",
              "There's no need to verify — the resume is always accurate",
              "The client's marketing website only"
            ],
            "answer": 1,
            "explain": "Facility claims should be validated independently, e.g. via the American Hospital Directory, rather than trusted at face value."
          },
          "duration": 52.63,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDQuNDExCkJlZm9yZSBhbnl0aGluZyBnb2VzIG91dCwgdHdvIG1vcmUgdGhpbmdzIG5lZWQgaW5kZXBlbmRlbnQgdmVyaWZpY2F0aW9uLgoKMgowMDowMDowNC40MTEgLS0+IDAwOjAwOjE4LjA3NApGaXJzdCwgdHJhdW1hIGxldmVsLCBiZWQgc2l6ZSwgYW5kIGZhY2lsaXR5IHR5cGUgY2xhaW1zIHNob3VsZG4ndCBiZSB0cnVzdGVkIGF0IGZhY2UgdmFsdWUgZnJvbSBhIHJlc3VtZSBvciBhIGNhbmRpZGF0ZSdzIG93biBkZXNjcmlwdGlvbiDigJQgdmFsaWRhdGUgdGhlbSBpbmRlcGVuZGVudGx5LCB1c2luZyBhIHJlc291cmNlIGxpa2UgdGhlIEFtZXJpY2FuIEhvc3BpdGFsIERpcmVjdG9yeS4KCjMKMDA6MDA6MTguMDc0IC0tPiAwMDowMDoyNC4yNjIKSWYgdGhlIHJlc3VtZSBzYXlzIG9uZSB0aGluZyBhbmQgdGhlIHZlcmlmaWVkIGRhdGEgc2F5cyBhbm90aGVyLCB0aGUgdmVyaWZpZWQgc291cmNlIHdpbnMsIGZ1bGwgc3RvcC4KCjQKMDA6MDA6MjQuMjYyIC0tPiAwMDowMDoyOS4xNjQKU2Vjb25kLCByZWZlcmVuY2VzIG5lZWQgdG8gYmUgdmVyaWZpZWQgYXQgdGltZSBvZiBzdWJtaXR0YWwsIG5vdCBsZWZ0IGZvciBsYXRlci4KCjUKMDA6MDA6MjkuMTY0IC0tPiAwMDowMDozNi44MjMKUmVzdWx0cyDigJQgYWNjZXB0ZWQgb3IgcmVqZWN0ZWQg4oCUIGdldCBtYXJrZWQgZGlyZWN0bHkgaW4gSm9iRGl2YSB3aXRoIHN1cHBvcnRpbmcgbm90ZXM7IGEgcmVmZXJlbmNlIGNhbid0IGdvIG91dCB1bmRvY3VtZW50ZWQuCgo2CjAwOjAwOjM2LjgyMyAtLT4gMDA6MDA6NDkuMjYwCk9uZSBtb3JlIGRldGFpbCB3b3J0aCByZW1lbWJlcmluZzogYSBkcml2ZXIncyBsaWNlbnNlIGlzbid0IGF1dG9tYXRpY2FsbHkgbWFuZGF0b3J5LCBidXQgaWYgYSBmYWNpbGl0eSBkb2VzIHJlcXVpcmUgb25lLCB0aGUgYWRkcmVzcyBvbiB0aGF0IGxpY2Vuc2UgaGFzIHRvIG1hdGNoIHRoZSBjYW5kaWRhdGUncyBzdGF0ZWQgcGVybWFuZW50IGFkZHJlc3MuCgo3CjAwOjAwOjQ5LjI2MCAtLT4gMDA6MDA6NTIuNjMwCkEgbWlzbWF0Y2ggdGhlcmUgaGFzIGNhdXNlZCByZWFsLCBhdm9pZGFibGUgcmVqZWN0aW9ucy4K",
          "narration": "Before anything goes out, two more things need independent verification. First, trauma level, bed size, and facility type claims shouldn't be trusted at face value from a resume or a candidate's own description — validate them independently, using a resource like the American Hospital Directory. If the resume says one thing and the verified data says another, the verified source wins, full stop. Second, references need to be verified at time of submittal, not left for later. Results — accepted or rejected — get marked directly in JobDiva with supporting notes; a reference can't go out undocumented. One more detail worth remembering: a driver's license isn't automatically mandatory, but if a facility does require one, the address on that license has to match the candidate's stated permanent address. A mismatch there has caused real, avoidable rejections.",
          "audio": "audio/10.3.mp3"
        }
      ]
    },
    {
      "id": "m11",
      "title": "Course Recap",
      "summary": "The full recruiter journey in Aya-Lotus One, from opening a job to a defensible submission.",
      "lessons": [
        {
          "id": "11.1",
          "title": "End-to-End Recap: From Job Posting to Submission",
          "hasVideo": false,
          "objective": "Recap the full recruiter workflow in Aya-Lotus One from opening a job to a defensible submission.",
          "learn": [
            "Full flow recap: open the job's Attachments (Job Description + Unit Details) → resolve any conflicts in favor of Unit Details → verify patient population, ratio, and required skills against the resume and checklist → confirm floating, scrub color, RTO, and travel eligibility directly with the candidate → complete the screening questionnaire truthfully (Y/N based on real conversations) → build the Right-Sourcing cover sheet and standardized resume → validate facility claims independently and complete reference checks → submit.",
            "Supporting threads throughout: \"selling points\" as the recruiter's core skill (turning verified matches into specific, confident statements), risk mitigation (surfacing RTO/compliance conflicts before they become cancellations), and reviewer trust (submissions are judged against your history, not in isolation).",
            "When unsure which document or field governs a decision, remember the course's repeated rule of thumb: Unit Details overrides Job Description, and \"preferred\" in Work Experience should be read as required."
          ],
          "skills": [
            "End-to-end process fluency"
          ],
          "terms": [],
          "takeaways": [
            "Every tool and rule in this course supports one linear goal: verify thoroughly, confirm directly with the candidate, and submit something a client reviewer can trust without having to double-check it themselves."
          ],
          "duration": 78.07,
          "captions": "V0VCVlRUCgoxCjAwOjAwOjAwLjAwMCAtLT4gMDA6MDA6MDEuNzQyCkxldCdzIGJyaW5nIGl0IGFsbCB0b2dldGhlci4KCjIKMDA6MDA6MDEuNzQyIC0tPiAwMDowMDoxMC44MjQKVGhlIGZ1bGwgZmxvdyBsb29rcyBsaWtlIHRoaXM6IG9wZW4gdGhlIGpvYidzIGF0dGFjaG1lbnRzIOKAlCBKb2IgRGVzY3JpcHRpb24gYW5kIFVuaXQgRGV0YWlscyDigJQgYW5kIHJlc29sdmUgYW55IGNvbmZsaWN0cyBpbiBmYXZvciBvZiBVbml0IERldGFpbHMuCgozCjAwOjAwOjEwLjgyNCAtLT4gMDA6MDA6MTYuNDg1ClZlcmlmeSBwYXRpZW50IHBvcHVsYXRpb24sIHJhdGlvLCBhbmQgcmVxdWlyZWQgc2tpbGxzIGFnYWluc3QgdGhlIHJlc3VtZSBhbmQgdGhlIGNoZWNrbGlzdC4KCjQKMDA6MDA6MTYuNDg1IC0tPiAwMDowMDoyMy43NjMKQ29uZmlybSBmbG9hdGluZywgc2NydWIgY29sb3IsIHJlcXVlc3RlZCB0aW1lIG9mZiwgYW5kIHRyYXZlbCBlbGlnaWJpbGl0eSBkaXJlY3RseSB3aXRoIHRoZSBjYW5kaWRhdGUg4oCUIG5ldmVyIGFzc3VtZS4KCjUKMDA6MDA6MjMuNzYzIC0tPiAwMDowMDoyOS45ODQKQ29tcGxldGUgdGhlIHNjcmVlbmluZyBxdWVzdGlvbm5haXJlIHRydXRoZnVsbHksIHdpdGggWSBvciBOIGFuc3dlcnMgZ3JvdW5kZWQgaW4gcmVhbCBjb252ZXJzYXRpb25zLgoKNgowMDowMDoyOS45ODQgLS0+IDAwOjAwOjM0LjAyNwpCdWlsZCB0aGUgUmlnaHQtU291cmNpbmcgY292ZXIgc2hlZXQgYW5kIHRoZSBzdGFuZGFyZGl6ZWQgcmVzdW1lLgoKNwowMDowMDozNC4wMjcgLS0+IDAwOjAwOjM4LjM4MgpWYWxpZGF0ZSBmYWNpbGl0eSBjbGFpbXMgaW5kZXBlbmRlbnRseSwgYW5kIGNvbXBsZXRlIHJlZmVyZW5jZSBjaGVja3MuCgo4CjAwOjAwOjM4LjM4MiAtLT4gMDA6MDA6MzkuMTI4ClRoZW4gc3VibWl0LgoKOQowMDowMDozOS4xMjggLS0+IDAwOjAxOjAwLjM0MQpUaHJlZSB0aHJlYWRzIHJ1biB1bmRlcm5lYXRoIGFsbCBvZiBpdDogc2VsbGluZyBwb2ludHMsIHdoaWNoIHR1cm4gYSB2ZXJpZmllZCBtYXRjaCBpbnRvIGEgc3BlY2lmaWMsIGNvbmZpZGVudCBzdGF0ZW1lbnQgaW5zdGVhZCBvZiBhIHZhZ3VlIG9uZTsgcmlzayBtaXRpZ2F0aW9uLCB3aGljaCBtZWFucyBzdXJmYWNpbmcgUi1ULU8gYW5kIGNvbXBsaWFuY2UgY29uZmxpY3RzIGJlZm9yZSB0aGV5IGJlY29tZSBjYW5jZWxsYXRpb25zOyBhbmQgcmV2aWV3ZXIgdHJ1c3QsIHNpbmNlIGV2ZXJ5IHN1Ym1pc3Npb24gaXMganVkZ2VkIGFnYWluc3QgeW91ciBoaXN0b3J5LCBub3QgaW4gaXNvbGF0aW9uLgoKMTAKMDA6MDE6MDAuMzQxIC0tPiAwMDowMToxNC44MzUKQW5kIHdoZW5ldmVyIHlvdSdyZSBub3Qgc3VyZSB3aGljaCBkb2N1bWVudCBvciBmaWVsZCBzaG91bGQgd2luLCByZW1lbWJlciB0aGUgdHdvIHJ1bGVzIG9mIHRodW1iIGZyb20gdGhpcyBjb3Vyc2U6IFVuaXQgRGV0YWlscyBvdmVycmlkZXMgdGhlIEpvYiBEZXNjcmlwdGlvbiwgYW5kIHF1b3RlIHByZWZlcnJlZCB1bnF1b3RlIGluIFdvcmsgRXhwZXJpZW5jZSBzaG91bGQgYmUgcmVhZCBhcyByZXF1aXJlZC4KCjExCjAwOjAxOjE0LjgzNSAtLT4gMDA6MDE6MTguMDcwCkNvbmdyYXR1bGF0aW9ucyBvbiBjb21wbGV0aW5nIEF5YS1Mb3R1cyBPbmUgTWFzdGVyeS4K",
          "narration": "Let's bring it all together. The full flow looks like this: open the job's attachments — Job Description and Unit Details — and resolve any conflicts in favor of Unit Details. Verify patient population, ratio, and required skills against the resume and the checklist. Confirm floating, scrub color, requested time off, and travel eligibility directly with the candidate — never assume. Complete the screening questionnaire truthfully, with Y or N answers grounded in real conversations. Build the Right-Sourcing cover sheet and the standardized resume. Validate facility claims independently, and complete reference checks. Then submit. Three threads run underneath all of it: selling points, which turn a verified match into a specific, confident statement instead of a vague one; risk mitigation, which means surfacing R-T-O and compliance conflicts before they become cancellations; and reviewer trust, since every submission is judged against your history, not in isolation. And whenever you're not sure which document or field should win, remember the two rules of thumb from this course: Unit Details overrides the Job Description, and quote preferred unquote in Work Experience should be read as required. Congratulations on completing Aya-Lotus One Mastery.",
          "audio": "audio/11.1.mp3"
        }
      ]
    }
  ]
};

const FINAL_ASSESSMENT = [
  {
    "q": "What is Aya-Lotus One?",
    "options": [
      "HonorVet's internal ATS",
      "A client-facing Vendor Management System (VMS) portal used to source and submit candidates",
      "A resume-parsing tool",
      "A payroll system"
    ],
    "answer": 1
  },
  {
    "q": "When a job's Job Description and Unit Details PDF disagree, which one governs?",
    "options": [
      "Job Description",
      "Unit Details",
      "Whichever was updated most recently",
      "Neither — escalate to the client every time"
    ],
    "answer": 1
  },
  {
    "q": "For BLS/ACLS certification, which issuing bodies does Aya-Lotus One typically accept?",
    "options": [
      "Any nationally recognized issuer",
      "Only AHA (American Heart Association) or ARC (American Red Cross)",
      "Only state boards of nursing",
      "Any issuer as long as the card isn't expired"
    ],
    "answer": 1
  },
  {
    "q": "A unit requires 1:6 patient ratio. What must a compliant selling point say?",
    "options": [
      "\"Candidate is comfortable with the ratio\"",
      "The literal ratio the candidate has actually handled (e.g., 1:6, flexes to 1:8)",
      "Nothing — ratio is covered by the resume alone",
      "That the candidate is a fast learner"
    ],
    "answer": 1
  },
  {
    "q": "A required skill is self-rated 2 (Intermittent) on a candidate's skills checklist. What does this mean?",
    "options": [
      "No issue as long as the average score is high",
      "This is a reject risk — required skills need a 3 or higher",
      "Only proficiency matters, not this rating",
      "It only matters for Auto-Offer jobs"
    ],
    "answer": 1
  },
  {
    "q": "In the Work Experience section, how should Aya-Lotus One recruiters treat a \"preferred\" (not required) qualification?",
    "options": [
      "Ignore it, since it's optional by definition",
      "Treat it as functionally required in practice",
      "Only worry about it for travel assignments",
      "Ask the client whether it's really required"
    ],
    "answer": 1
  },
  {
    "q": "What is the difference between on-call pay and callback pay?",
    "options": [
      "They are the same thing",
      "On-call pays for being available; callback pays for hours actually worked after being called back in",
      "Callback only applies to holidays",
      "On-call only applies to charge nurses"
    ],
    "answer": 1
  },
  {
    "q": "What is Aya-Lotus One's rule for Requested Time Off (RTO)?",
    "options": [
      "Unlimited individual days may be requested",
      "Only one continuous block of time off is accepted per assignment",
      "RTO is never allowed on travel assignments",
      "RTO must be requested at least a year in advance"
    ],
    "answer": 1
  },
  {
    "q": "Why is RTO timing near onboarding treated as a major risk?",
    "options": [
      "It isn't — only mid-contract RTO matters",
      "Because conflicts during onboarding/compliance can jeopardize or cancel the entire placement",
      "Because it affects the candidate's pay rate",
      "Because it requires client sign-off in writing"
    ],
    "answer": 1
  },
  {
    "q": "What is the general minimum staff experience needed in a specialty for a candidate to be travel-eligible in that specialty?",
    "options": [
      "6 months",
      "1 year",
      "2 years",
      "5 years"
    ],
    "answer": 2
  },
  {
    "q": "How should the job overview questionnaire's yes/no fields be completed?",
    "options": [
      "Type the word \"Yes\" or \"No\"",
      "Type the literal letter \"Y\" or \"N\", based on an actual conversation with the candidate",
      "Leave blank if unsure",
      "Default to \"Y\" on every field"
    ],
    "answer": 1
  },
  {
    "q": "Where should a recruiter independently verify a candidate's claimed facility trauma level and bed size?",
    "options": [
      "The candidate's LinkedIn profile",
      "An independent source like the American Hospital Directory (ASD)",
      "There's no need — trust the resume",
      "The client's marketing website only"
    ],
    "answer": 1
  },
  {
    "q": "Where does the \"Unit Details\" PDF attached in JobDiva actually come from?",
    "options": [
      "It is generated automatically by JobDiva",
      "It is downloaded from the Unit field link in Aya-Lotus One and uploaded to JobDiva for team-wide access",
      "It is emailed by the client directly to JobDiva support",
      "It has no connection to Aya-Lotus One"
    ],
    "answer": 1
  }
];

window.COURSE = COURSE;
window.fmtTime = fmt;
window.FINAL_ASSESSMENT = FINAL_ASSESSMENT;
