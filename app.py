from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
from flask_cors import cross_origin
from database import db
from utils import validations as vd
import filetype
import hashlib
from werkzeug.utils import secure_filename
import os
import math

#Carpeta de archivos
UPLOAD_FOLDER = 'static/uploads'
app = Flask(__name__)
app.secret_key = "secret_key"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def home_page():
    return render_template('index.html')

@app.route('/agregar_donacion', methods = ["GET", "POST"])
def agregar_donacion():
    if request.method == "POST":
        #1. Validamos los datos ingresados de contacto
        c_name = request.form.get("nombre")
        c_email = request.form.get("email")
        c_celular = request.form.get("phone")
        c_comuna_id = request.form.get("select-comuna")
        #Verificador de que todo se cumpla
        all_valid = True
        if vd.validate_contact_info(c_name, c_email, c_celular, c_comuna_id):
            #2. Recuperamos datos de Dispositivos
            devices = []
            for key in request.form:
                if "nombre-dispositivo" in key:
                    section_num = key.split("nombre-dispositivo")[1]
                    device_info = {
                        "nombre": request.form.get(f"nombre-dispositivo{section_num}"),
                        "descripcion": request.form.get(f"descripcion-dispositivo{section_num}"),
                        "tipo": request.form.get(f"select-tipo{section_num}"),
                        "anos": int(request.form.get(f"anos-dispositivo{section_num}")),
                        "estado": request.form.get(f"select-estado{section_num}")
                    }
                    #3. Validamos los datos del dispositivo
                    if vd.validate_device(device_info):
                        devices.append(device_info)
                        #4. Validamos fotos 
                        fotos = []
                        file_field_name = f"fotos-productos{section_num}"   
                        if file_field_name in request.files:
                            uploaded =  request.files.getlist(file_field_name)     
                            if vd.validate_files(uploaded):
                                for file in uploaded:
                                    _filename = hashlib.sha256(
                                        secure_filename(file.filename)
                                        .encode("utf-8")
                                        ).hexdigest()
                                    _extension = filetype.guess(file).extension
                                    file_filename = f"{_filename}.{_extension}"
                                    file.save(os.path.join(app.config["UPLOAD_FOLDER"], file_filename))
                                    file_info = {
                                        "ruta": f"../static/uploads/{file_filename}",
                                        "nombre": _filename
                                    }
                                    fotos.append(file_info)
                                device_info["archivos"] = fotos
                            else:
                                all_valid = False          
                    else:
                        all_valid = False                       

            if not all_valid:
                return render_template('/agregar-donacion.html')
            #5. Insertamos datos en las tablas correspondientes
            c_id=db.create_contact(c_name, c_email, c_celular, c_comuna_id)
            for device in devices:
                device_id = db.add_device(c_id, device["nombre"], device["descripcion"], device["tipo"], device["anos"], device["estado"])
                for file in device["archivos"]:
                    db.add_file(file["ruta"],file["nombre"], device_id)
            #Agregar mensaje de exito
            flash("La donación se ha realizado con éxito.", "success")
            return redirect(url_for('home_page'))   
        else:  
            return render_template('/agregar-donacion.html')
    elif request.method =="GET":
        
        return render_template('/agregar-donacion.html')




@app.route('/ver-dispositivos/<int:pagina>', methods = ["GET"])
def ver_dispositivos(pagina):
    total_pages = math.ceil(db.get_count_devices() / 5)
    print(total_pages)
    #pagina_actual = 1
    data_list = []
    for dev in db.get_device_page(page_num=pagina):
        dev_id, contacto_id, nombre_dev, _, tipo, _, estado = dev
        _, _, _ , _ , comuna_id , _    = db.get_contacto_by_id(contacto_id)
        _, comuna, _ = db.get_comuna_by_id(comuna_id)
        list_files = db.get_archivo_by_dispositivo_id(dev_id)
        _, ruta_foto, _ , _ = list_files[0] #queremos mostrar la primera foto
        dev_info = {
            "id": dev_id,
            "tipo": tipo.capitalize(),
            "nombre": nombre_dev.capitalize(),
            "estado": estado.capitalize(),
            "comuna": comuna.capitalize(),
            "ruta_foto": ruta_foto
        }
        data_list.append(dev_info)
    return render_template('ver-dispositivos.html', data = data_list, pagina = pagina, total_pages = total_pages)

@app.route('/informacion-dispositivo/<int:id>', methods = ["GET", "POST"])
def info_disp(id):
    if request.method == "POST":
        comment_name = request.form.get("nombre")
        comment_content = request.form.get("contenido")

        if not vd.validate_comment(comment_name, comment_content):
            return redirect(url_for('info_disp', id=id))
        
        db.create_comment(comment_name, comment_content, id)
        return redirect(url_for('info_disp', id=id))
    
    elif request.method == "GET":
        _, contacto_id, nombre_dev,desc, tipo, anos_uso, estado = db.get_device_by_id(id)
        _, nombre_contacto, email, celular, comuna_id, _ = db.get_contacto_by_id(contacto_id)
        _, comuna, region_id = db.get_comuna_by_id(comuna_id)
        _, region = db.get_region_by_id(region_id)
        list_files = db.get_archivo_by_dispositivo_id(id)
        archivos = []
        for file in list_files:
            _,ruta, _, _=file
            archivos.append(ruta)
        dev_info = {
            "id_dispositivo": id,
            "nombre_contacto": nombre_contacto,
            "contacto_email": email,
            "celular_contacto": celular,
            "anos_uso": anos_uso,
            "estado": estado,
            "nombre_dev": nombre_dev,
            "tipo": tipo,
            "comuna": comuna,
            "region": region,
            "descripcion": desc,
            "archivos": archivos
        }
        #Informacion comentarios
        comment_list = []
        comments = db.get_comment_list(device_id=id)
        for comment in comments:
            _, nombre, texto, fecha, _ = comment
            comentario = {
                "nombre": nombre,
                "texto": texto,
                "fecha": fecha
            }
            comment_list.append(comentario)
        dev_info["comentarios"] = comment_list
        return render_template('/informacion-dispositivo.html', device_info = dev_info)

@app.route('/stats-contacto', methods=['GET'])
def stats_contacto():
    return render_template('/stats-contacto.html')

@app.route('/stats-dispositivo', methods=['GET'])
def stats_dispositivo():
    return render_template('/stats-dispositivo.html')

@app.route("/get-stats-data-devices", methods=["GET"])
@cross_origin(origin="127.0.0.1", supports_credentials=True)
def get_stats_data_devices():
    tipos = [ 
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
    "otro"]

    counts = []
    for tipo in tipos:
        count = {}
        count["name"] = tipo.capitalize() 
        count["y"] = db.count_device_type(tipo)
        counts.append(count)
    return jsonify(counts)

@app.route("/get-stats-data-contacts", methods=["GET"])
@cross_origin(origin="127.0.0.1", supports_credentials=True)
def get_stats_data_contacts():
    comunas = db.get_comuna_list()
    data = []
    for comuna in comunas:
        res = db.count_contacts_comuna(comuna)
        if res != 0:
            count = {}
            count["data"] = db.count_contacts_comuna(comuna)
            count["category"] = comuna
            data.append(count)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
