with open("app.js", "r", encoding="utf-8") as f:
    for idx, line in enumerate(f):
        if "rubroCheckboxes" in line or "getSelectedRubros" in line:
            print(f"Line {idx+1}: {line.strip()}")
