import openpyxl
import json
import urllib.parse
import sys

excel_path = r"C:\Users\drive\Downloads\Base_Pergamino_Winktact_Actualizada.xlsx"

try:
    wb = openpyxl.load_workbook(excel_path, data_only=True)
    sheet = wb.active
    rows = list(sheet.iter_rows(values_only=True))
    
    headers = [str(h).strip() if h else "" for h in rows[0]]
    email_idx = -1
    nombre_idx = -1
    rubro_idx = -1
    
    for i, h in enumerate(headers):
        h_lower = h.lower()
        if "email" in h_lower or "mail" in h_lower or "correo" in h_lower:
            email_idx = i
        elif "nombre" in h_lower or "business" in h_lower or "negocio" in h_lower or "empresa" in h_lower:
            nombre_idx = i
        elif "rubro" in h_lower or "categor" in h_lower:
            rubro_idx = i

    db = {}
    for row in rows[1:]:
        if not any(row):
            continue
            
        nombre = str(row[nombre_idx]).strip() if nombre_idx != -1 and row[nombre_idx] is not None else ""
        email = str(row[email_idx]).strip() if email_idx != -1 and row[email_idx] is not None else ""
        rubro = str(row[rubro_idx]).strip() if rubro_idx != -1 and row[rubro_idx] is not None else "General"
        
        # Clean email (unquote %20, strip, replace multiple spaces)
        email = urllib.parse.unquote(email).strip()
        
        # Filter fake/placeholder emails
        if not email or "@" not in email or email.lower() in ["ejemplo@mail.com", "email@mail.com", "test@test.com", "ejemplo@gmail.com"]:
            continue
            
        rubro = rubro.strip()
        
        if rubro not in db:
            db[rubro] = []
        db[rubro].append({
            "name": nombre,
            "email": email
        })

    # Print total count
    total_emails = sum(len(v) for v in db.values())
    print(f"Total cleaned and valid emails: {total_emails}")
    
    # Save the DB structure to a temporary text file
    with open("extracted_db.json", "w", encoding="utf-8") as out:
        json.dump(db, out, ensure_ascii=False, indent=2)
    print("Database JSON successfully written to extracted_db.json")

except Exception as e:
    print("Error:", e)
