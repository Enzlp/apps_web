import re
from database import db

def validate_contact_info(nombre, email, phone, comuna):
    valid_res = validate_contact_name(nombre) and validate_contact_email(email) and validate_contact_phone(phone) and validate_comuna(comuna)
    return valid_res

def validate_contact_name(nombre):
    if not nombre:
        return False
    length_valid = (3 <= len(nombre.strip()) <= 80)
    return length_valid

def validate_contact_email(email):
    if not email:
        return False
    pattern = r'^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$'
    valid_format = re.match(pattern, email) is not None

    return valid_format

def validate_contact_phone(phone):
    if not phone:
        return True

    length_valid = 8 <= len(phone) <= 15
    valid_format = bool(re.match(r'^[0-9]+$', phone))

    return valid_format and length_valid

def validate_comuna(comuna):
    db_name = db.get_comuna_by_id(comuna)
    if db_name is not None and db_name == comuna:
        return True
    return False