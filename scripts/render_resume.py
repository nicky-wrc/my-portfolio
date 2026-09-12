"""Render the resume for browser viewing without automatic PDF requests.

Requires PyMuPDF: python -m pip install pymupdf
Run again after replacing public/Resume_Worachat.pdf.
"""

import hashlib
import json
from pathlib import Path

import pymupdf

root = Path(__file__).resolve().parents[1]
source = root / "public" / "Resume_Worachat.pdf"
version = hashlib.sha256(source.read_bytes()).hexdigest()[:12]
output = root / "public" / "resume-preview"
output.mkdir(exist_ok=True)
pages = []
with pymupdf.open(source) as document:
    for index, page in enumerate(document):
        filename = f"{version}-page-{index + 1}.png"
        pixmap = page.get_pixmap(matrix=pymupdf.Matrix(2, 2), alpha=False)
        pixmap.save(output / filename)
        pages.append({
            "src": f"/resume-preview/{filename}",
            "width": pixmap.width,
            "height": pixmap.height,
            "text": page.get_text(),
        })
(root / "src" / "data" / "resume-preview.json").write_text(
    json.dumps(pages, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
)
print(f"Rendered {len(pages)} resume pages ({version}).")
