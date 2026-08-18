import fitz  # PyMuPDF
import sys, os

TEMPLATE = r"C:\Users\Tanya Awasthi\OneDrive - HonorVet Technologies\Desktop\Training Content\Certificate — Tanya — HonorVet Technologies.pdf"
FONT_DIR = r"C:\Users\Tanya Awasthi\App-AI\aya-training\session1\fonts"

RED = (238/255, 26/255, 15/255)
INK = (35/255, 31/255, 32/255)
GRAY = (85/255, 85/255, 85/255)

F_REGULAR = os.path.join(FONT_DIR, "Poppins-Regular-full.ttf")
F_SEMIBOLD = os.path.join(FONT_DIR, "Poppins-SemiBold-full.ttf")
F_BOLD = os.path.join(FONT_DIR, "Poppins-Bold-full.ttf")
F_EXTRABOLD = os.path.join(FONT_DIR, "Poppins-ExtraBold-full.ttf")
F_ITALIC = os.path.join(FONT_DIR, "Poppins-SemiBoldItalic-full.ttf")
F_COURIER = os.path.join(FONT_DIR, "CourierNewBold-full.ttf")


def fit_size(text, fontfile, max_width, start_size, min_size=6):
    font = fitz.Font(fontfile=fontfile)
    size = start_size
    while size > min_size:
        if font.text_length(text, fontsize=size) <= max_width:
            return size
        size -= 0.5
    return min_size


def centered_textbox(page, rect, text, fontfile, size, color, align=fitz.TEXT_ALIGN_CENTER, tag="x"):
    rc = page.insert_textbox(rect, text, fontsize=size, fontname="F-" + tag, fontfile=fontfile,
                              color=color, align=align)
    print(f"  insert_textbox[{tag}] rc={rc} text={text[:40]!r}")
    return rc


def generate(name, course_title, description, score_pct, lessons_done, lessons_total, date_str, out_path):
    doc = fitz.open(TEMPLATE)
    page = doc[0]

    # --- redact the four dynamic regions (course heading, name, description, score line, date) ---
    # NOTE: insert_textbox needs noticeably more vertical room than raw font
    # ascender/descender would suggest (confirmed empirically), so these are
    # sized generously within the blank bands between the surrounding static
    # lines of the template (title / "certify that" / "has completed" / score
    # badge / signature block / date label).
    regions = [
        fitz.Rect(150, 224, 692, 252),   # course title heading
        fitz.Rect(150, 263, 692, 304),   # name
        fitz.Rect(180, 304, 662, 340),   # description paragraph
        fitz.Rect(150, 340, 692, 356),   # score/lessons line
        fitz.Rect(255, 428, 398, 449),   # date
    ]
    for r in regions:
        page.add_redact_annot(r, fill=(1, 1, 1))
    page.apply_redactions(images=fitz.PDF_REDACT_IMAGE_NONE)

    # --- course title heading ---
    heading_rect = fitz.Rect(150, 224, 692, 252)
    hsize = fit_size(course_title, F_EXTRABOLD, 542, 13, min_size=9)
    centered_textbox(page, heading_rect, course_title, F_EXTRABOLD, hsize, INK, tag="heading")

    # --- name ---
    name_rect = fitz.Rect(150, 263, 692, 304)
    nsize = fit_size(name, F_EXTRABOLD, 500, 22, min_size=14)
    centered_textbox(page, name_rect, name, F_EXTRABOLD, nsize, RED, tag="name")

    # --- description paragraph (2-3 lines) ---
    desc_rect = fitz.Rect(180, 304, 662, 340)
    centered_textbox(page, desc_rect, description, F_REGULAR, 7.2, GRAY, tag="desc")

    # --- score / lessons line ---
    score_text = f"Score: {score_pct}%   |   Lessons: {lessons_done}/{lessons_total}"
    score_rect = fitz.Rect(150, 340, 692, 356)
    centered_textbox(page, score_rect, score_text, F_SEMIBOLD, 8.5, RED, tag="score")

    # --- date ---
    date_rect = fitz.Rect(255, 428, 398, 449)
    centered_textbox(page, date_rect, date_str, F_COURIER, 12, INK, tag="date")

    doc.save(out_path)
    doc.close()
    print("saved:", out_path)


if __name__ == "__main__":
    out = r"C:\Users\Tanya Awasthi\App-AI\aya-training\session1\aya_certificate_sample.pdf"
    generate(
        name="Jordan Smith",
        course_title="Aya-Lotus One Mastery for Healthcare Staffing Recruiters",
        description=("has successfully completed the Aya-Lotus One Mastery for Healthcare Staffing Recruiters "
                      "immersive training program, demonstrating knowledge of navigating the Aya-Lotus One VMS "
                      "portal, reading and interpreting the Unit Description field by field, matching candidates "
                      "to job requirements, and building complete, defensible submittals."),
        score_pct=92,
        lessons_done=33,
        lessons_total=33,
        date_str="August 18, 2026",
        out_path=out,
    )
