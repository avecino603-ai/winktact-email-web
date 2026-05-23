with open("app.js", "r", encoding="utf-8") as f:
    for idx, line in enumerate(f):
        if "addEventListener" in line or "onload" in line or "init" in line:
            if "click" not in line and "change" not in line:
                print(f"Line {idx+1}: {line.strip()}")
