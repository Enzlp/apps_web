import pymysql
import json
import datetime
from datetime import date

DB_NAME = "tarea2"
DB_USERNAME = "cc5002"
DB_PASSWORD = "programacionweb"
DB_HOST = "localhost"
DB_PORT = 3306
DB_CHARSET = "utf8"

with open('database/querys.json', 'r') as querys:
    QUERY_DICT = json.load(querys)

# -- conn --
def get_conn():
    conn = pymysql.connect(
        db = DB_NAME,
        user = DB_USERNAME,
        passwd = DB_PASSWORD,
        host=DB_HOST,
        port=DB_PORT,
        charset=DB_CHARSET
    )
    return conn

#-- querys --

#Creation queries
def create_contact(nombre, email, celular, comuna_id):
    conn = get_conn()
    cursor = conn.cursor()
    current_date = datetime.date.today()
    cursor.execute(QUERY_DICT["create_contact"], (nombre, email, celular, comuna_id, current_date))
    conn.commit()
    cursor.execute(QUERY_DICT["last_contact_added"]) #Darme el id recien creado
    new_id = cursor.fetchone()[0]
    #Cerrar conexion
    cursor.close()
    conn.close()
    return new_id

def add_device(contacto_id, nombre, descripcion, tipo, anos_uso, estado):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["add_device"], (contacto_id, nombre, descripcion, tipo, anos_uso, estado))
    conn.commit()
    cursor.execute(QUERY_DICT["last_device_added"])
    new_id = cursor.fetchone()[0]
    #Cerrar conexion
    cursor.close()
    conn.close()
    return new_id

def add_file(ruta_archivo, nombre_archivo, dispositivo_id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["add_file"], (ruta_archivo, nombre_archivo, dispositivo_id))
    conn.commit()
    #Cerrar conexion
    cursor.close()
    conn.close()

def create_comment(nombre, texto, dispositivo_id):
    conn = get_conn()
    cursor = conn.cursor()
    fecha = date.today()
    cursor.execute(QUERY_DICT["create_comment"], (nombre, texto, fecha, dispositivo_id))
    conn.commit()
    cursor.close()
    conn.close()

#Get functions
def get_comuna_by_id(id_comuna):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_comuna_by_id"], (id_comuna))
    comuna = cursor.fetchone()
    #Cerrar conexion
    cursor.close()
    conn.close()
    return comuna

def get_contacto_by_id(id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_contacto_by_id"], (id))
    contacto = cursor.fetchone()
    #Cerrar conexion
    cursor.close()
    conn.close()
    return contacto

def get_archivo_by_dispositivo_id(id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_archivo_by_dispositivo_id"], (id))
    archivos = cursor.fetchall()
    #Cerrar conexion
    cursor.close()
    conn.close()
    return archivos

def get_device_by_id(id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_device_by_id"], (id))
    device = cursor.fetchone()
    cursor.close()
    conn.close()
    return device

def get_region_by_id(id):
    conn = get_conn()
    cursor = conn.cursor()    
    cursor.execute(QUERY_DICT["get_region_by_id"], (id))
    region = cursor.fetchone()
    cursor.close()
    conn.close()
    return region

def get_count_devices():
    conn = get_conn()
    cursor = conn.cursor()    
    cursor.execute(QUERY_DICT["count_devices"], ())
    count = cursor.fetchone()[0]
    cursor.close()
    conn.close()
    return count

def get_device_page(page_num):
    offset = (page_num-1) * 5 #Partimos por pagina 1 y no 0
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_device_page"], (offset))
    devices = cursor.fetchall()
    cursor.close()
    conn.close()
    return devices

def get_comment_list(device_id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_comment_list"], (device_id,))
    comments = cursor.fetchall()
    cursor.close()
    conn.close()
    return comments

def count_device_type(tipo):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["count_device_type"], (tipo,))
    count = cursor.fetchone()[0]
    cursor.close()
    conn.close()
    return count

def get_comuna_id(nombre):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_comuna_id"], (nombre,))
    name = cursor.fetchone()[0]
    cursor.close()
    conn.close()
    return name

def count_contacts_comuna(nombre):
    conn = get_conn()
    cursor = conn.cursor()
    comuna_id = get_comuna_id(nombre)
    cursor.execute(QUERY_DICT["count_contacts_comuna"], (comuna_id,))
    result = cursor.fetchone()
    count = result[0] if result and result[0] is not None else 0
    cursor.close()
    conn.close()
    return count

def get_comuna_list():
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_comuna_list"], ())
    lista= cursor.fetchall()
    lista_comuna = [comuna[0] for comuna in lista]
    cursor.close()
    conn.close()
    return lista_comuna
