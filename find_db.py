with open("app.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

found = False
db_lines = []
brace_count = 0

for line in lines:
    if "const LOCAL_BUSINESS_DB" in line or found:
        found = True
        db_lines.append(line)
        brace_count += line.count("[") - line.count("]")
        if brace_count == 0 and len(db_lines) > 5:
            # We reached the end of the declaration
            break

print("".join(db_lines[:60]))
