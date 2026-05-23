import openpyxl

excel_path = r"C:\Users\drive\Downloads\Base_Pergamino_Winktact.xlsx"

try:
    wb = openpyxl.load_workbook(excel_path, data_only=True)
    sheet = wb.active
    rows = list(sheet.iter_rows(values_only=True))
    if not rows:
        print("Empty sheet.")
        sys.exit(0)
    
    headers = [str(h).strip() if h else "" for h in rows[0]]
    print("Headers:", headers)
    
    email_idx = -1
    nombre_idx = -1
    rubro_idx = -1
    ciudad_idx = -1
    
    for i, h in enumerate(headers):
        h_lower = h.lower()
        if "email" in h_lower or "mail" in h_lower or "correo" in h_lower:
            email_idx = i
        elif "nombre" in h_lower or "business" in h_lower or "negocio" in h_lower or "empresa" in h_lower:
            nombre_idx = i
        elif "rubro" in h_lower or "categor" in h_lower:
            rubro_idx = i
        elif "ciudad" in h_lower or "localidad" in h_lower:
            ciudad_idx = i

    print(f"Indices found: email={email_idx}, nombre={nombre_idx}, rubro={rubro_idx}, ciudad={ciudad_idx}")
    
    valid_contacts = []
    no_email_count = 0
    invalid_email_count = 0
    
    for row in rows[1:]:
        # Skip empty rows
        if not any(row):
            continue
            
        nombre = str(row[nombre_idx]).strip() if nombre_idx != -1 and row[nombre_idx] is not None else ""
        email = str(row[email_idx]).strip() if email_idx != -1 and row[email_idx] is not None else ""
        rubro = str(row[rubro_idx]).strip() if rubro_idx != -1 and row[rubro_idx] is not None else "General"
        ciudad = str(row[ciudad_idx]).strip() if ciudad_idx != -1 and row[ciudad_idx] is not None else "Pergamino"
        
        if not email:
            no_email_count += 1
            continue
            
        if "@" not in email:
            invalid_email_count += 1
            continue
            
        valid_contacts.append({
            "name": nombre,
            "email": email,
            "category": rubro,
            "city": ciudad
        })
        
    print(f"Total rows in Excel (excluding header): {len(rows)-1}")
    print(f"Rows without email: {no_email_count}")
    print(f"Rows with invalid email: {invalid_email_count}")
    print(f"Valid contacts with email: {len(valid_contacts)}")
    
    # Print first 10 valid contacts
    print("\nFirst 10 valid contacts:")
    for c in valid_contacts[:10]:
        print(c)
        
except Exception as e:
    print("Error:", e)
