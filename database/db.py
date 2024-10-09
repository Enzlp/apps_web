import pymysql
import json
import datetime

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

def create_contact(nombre, email, celular, comuna_id):
    conn = get_conn()
    cursor = conn.cursor()
    current_date = datetime.date.today()
    cursor.exexute(QUERY_DICT["create_contact"], (nombre, email, celular, comuna_id, current_date))
    conn.commit()

def add_device(contacto_id, nombre, descripcion, tipo, anos_uso, estado):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["add_device", (contacto_id, nombre, descripcion, tipo, anos_uso, estado)])
    conn.commit()

def add_file(ruta_archivo, nombre_archivo, dispositivo_id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["add_file", (ruta_archivo, nombre_archivo, dispositivo_id)])
    conn.commit()

def get_comuna_by_id(id_comuna):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_comuna_by_id", (id_comuna,)])
    id = cursor.fetchone()
    return id