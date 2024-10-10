from flask import Flask, render_template, request, redirect, url_for
from database import db
from utils import validations as vd
import filetype
import hashlib
from werkzeug.utils import secure_filename
import os

#Carpeta de archivos
UPLOAD_FOLDER = 'static/uploads'


app = Flask(__name__)

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
        error = "Campos ingresados invalidos"
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
                        "anos": request.form.get(f"anos-dispositivo{section_num}"),
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
                return render_template('/agregar-donacion.html', error = error)
            #5. Insetamos datos en las tablas corrrespondientes
            c_id=db.create_contact(c_name, c_email, c_celular, c_comuna_id)
            for device in devices:
                device_id = db.add_device(c_id, device["nombre"], device["descripcion"], device["tipo"], device["anos"], device["estado"])
                for file in device["archivos"]:
                    db.add_file(file["ruta"],file["nombre"], device_id)
            #Agregar mensaje de exito
            return redirect(url_for('home_page'))   
        else:
            #Agregar mensaje de error dejando el formulario intacto
            return render_template('/agregar-donacion.html', error = error)
    elif request.method =="GET":
        return render_template('/agregar-donacion.html')




@app.route('/ver-dispositivos')
def ver_dispositivos():
    return render_template('ver-dispositivos.html')

@app.route('/informacion-dispositivo')
def info_disp():
    return render_template('/informacion-dispositivo.html')

if __name__ == '__main__':
    app.run(debug=True)
