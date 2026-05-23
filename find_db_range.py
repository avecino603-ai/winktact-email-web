with open("app.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

start_line = -1
end_line = -1
brace_count = 0
for idx, line in enumerate(lines):
    if "const LOCAL_BUSINESS_DB =" in line:
        start_line = idx
        brace_count = 0
    if start_line != -1:
        brace_count += line.count("{") - line.count("}")
        if brace_count == 0 and idx > start_line:
            end_line = idx
            break

print(f"Start line: {start_line + 1}")
print(f"End line: {end_line + 1}")
print("First 3 lines of DB:")
print("".join(lines[start_line:start_line+3]))
print("Last 3 lines of DB:")
print("".join(lines[end_line-2:end_line+1]))
