import re
import sys
import filetype
sys.path.append(".")
from database import db

#General validations
def validate_contact_info(nombre, email, phone, comuna):
    validations = [
        validate_contact_name(nombre),
        validate_contact_email(email),
        validate_contact_phone(phone),
        validate_comuna(comuna)
    ]
    return all(validations)

def validate_files(file_list):
    if not (1<=len(file_list)<=3):
        return False
    
    ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg"}
    ALLOWED_MIMETYPES = {"image/jpeg", "image/png"}

    for file in file_list:
        if file is None or file.filename == "":
            return False
    
        ftype_guess = filetype.guess(file)
        if ftype_guess is None or ftype_guess.extension not in ALLOWED_EXTENSIONS:
            return False

        if ftype_guess.mime not in ALLOWED_MIMETYPES:
            return False
    return True

def validate_device(device):
    validations = [
        validate_dev_name(device["nombre"]),
        validate_dev_description(device["descripcion"]),
        validate_dev_type(device["tipo"]),
        validate_dev_years(device["anos"]),
        validate_dev_state(device["estado"])
    ]
    return all(validations)


#Contact info validations
def validate_contact_name(nombre):
    strip_nombre = nombre.strip()
    if not strip_nombre:
        return False
    #Santitizacion
    if not re.match(r'^[a-zA-Z0-9\s\-_]*$', strip_nombre):
        return False
    return (3 <= len(strip_nombre) <= 80)

def validate_contact_email(email):
    if not email:
        return False
    pattern = r'^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$'
    valid_format = re.match(pattern, email) is not None

    return valid_format

def validate_contact_phone(phone):
    if not phone or phone.strip() == "":
        return True

    length_valid = 8 <= len(phone) <= 15
    valid_format = bool(re.match(r'^[0-9]+$', phone))

    return valid_format and length_valid

def validate_comuna(comuna):
    if not bool(re.match(r'^[0-9]+$', comuna)):
        return False
    #Ya validamos que no son input malicioso, ahora vemos que exista
    value = db.get_comuna_by_id(comuna)
    if value is None:
        return False
    return True

#Device info validation
def validate_dev_name(nombre):
    strip_nombre = nombre.strip()
    if not strip_nombre:
        return False
    #Santitizacion
    if not re.match(r'^[a-zA-Z0-9\s\-_]*$', strip_nombre):
        return False
    return (3 <= len(strip_nombre))

def validate_dev_description(desc):
    if desc == "":
        return True
    if not isinstance(desc, str):
        return False
    if not re.match(r'^[a-zA-Z0-9\s!?,.]*$', desc):
        return False
    return True

def validate_dev_type(tipo):
    opt = [
        "pantalla",
        "notebook",
        "tablet",
        "celular",
        "consola",
        "mouse",
        "teclado",
        "impresora",
        "parlante",
        "audífonos",
        "otro"
    ]
    if tipo not in opt:
        return False
    return True

def validate_dev_years(year):
    if year is None:
        return False
    
    if not isinstance(year, int):
        return False
    
    if not (1 <= year <= 99):
        return False

    return True


def validate_dev_state(estado):
    opt = ['funciona perfecto', 'funciona a medias', 'no funciona']
    
    if estado not in opt:
        return False
    return True

#Comentario validations
def validate_comment(name, text):
    validations = [
        validate_comment_name(name),
        validate_comment_text(text)
    ]
    return all(validations)

def validate_comment_name(nombre):
    strip_nombre = nombre.strip()
    if not strip_nombre:
        return False
    #Santitizacion caracteres
    if not re.match(r'^[a-zA-Z0-9\s\-_]*$', strip_nombre):
        return False
    
    return (3 <= len(strip_nombre) <= 80)

def validate_comment_text(texto):
    strip_texto = texto.strip()
    if not strip_texto:
        return False
    if not isinstance(texto, str):
        return False
    texto_sin_espacios = texto.replace(" ", "")
    if len(texto_sin_espacios)<5:
        return False
    #Sanitizacion
    if not re.match(r'^[a-zA-Z0-9\s!?,.]*$', texto):
        return False
    return True