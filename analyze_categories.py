import openpyxl
from collections import Counter

excel_path = r"C:\Users\drive\Downloads\Base_Pergamino_Winktact.xlsx"

try:
    wb = openpyxl.load_workbook(excel_path, data_only=True)
    sheet = wb.active
    rows = list(sheet.iter_rows(values_only=True))
    if not rows:
        print("Empty sheet.")
        sys.exit(0)
    
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
            
    categories = []
    for row in rows[1:]:
        if not any(row):
            continue
        email = str(row[email_idx]).strip() if email_idx != -1 and row[email_idx] is not None else ""
        rubro = str(row[rubro_idx]).strip() if rubro_idx != -1 and row[rubro_idx] is not None else "General"
        
        if email and "@" in email:
            categories.append(rubro)
            
    c = Counter(categories)
    print("Categories and counts of valid emails:")
    for cat, count in c.most_common():
        print(f" - {cat}: {count}")
        
except Exception as e:
    print("Error:", e)
