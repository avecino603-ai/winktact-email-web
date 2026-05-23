import json

# Load new database
with open("extracted_db.json", "r", encoding="utf-8") as f:
    new_db = json.load(f)

# Format as JS constant
js_db_content = "const LOCAL_BUSINESS_DB = " + json.dumps(new_db, ensure_ascii=False, indent=2) + ";\n"

# Read app.js
with open("app.js", "r", encoding="utf-8") as f:
    app_lines = f.readlines()

# Find the start and end indices of LOCAL_BUSINESS_DB in app.js
start_idx = -1
end_idx = -1
brace_count = 0

for idx, line in enumerate(app_lines):
    if "const LOCAL_BUSINESS_DB =" in line:
        start_idx = idx
        brace_count = 0
    if start_idx != -1:
        brace_count += line.count("{") - line.count("}")
        if brace_count == 0 and idx > start_idx:
            end_idx = idx
            break

if start_idx != -1 and end_idx != -1:
    # Replace the lines
    new_app_lines = app_lines[:start_idx] + [js_db_content] + app_lines[end_idx + 1:]
    
    # Save back to app.js
    with open("app.js", "w", encoding="utf-8") as f:
        f.writelines(new_app_lines)
    print("Successfully injected new database into app.js!")
else:
    print("Error: Could not locate LOCAL_BUSINESS_DB in app.js")
