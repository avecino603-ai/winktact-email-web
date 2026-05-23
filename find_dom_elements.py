with open("app.js", "r", encoding="utf-8") as f:
    for idx, line in enumerate(f):
        if "document.getElementById" in line and idx < 950:
            print(f"Line {idx+1}: {line.strip()}")
