from flask import Flask, render_template, request, redirect, url_for
from database import db
from utils.validations import validate_contact_info

app = Flask(__name__)

@app.route('/')
def home_page():
    return render_template('index.html')

@app.route('/agregar_donacion', methods = ["GET", "POST"])
def agregar_donacion():
    if request.method == "POST":
        c_name = request.form.get("nombre")
        c_email = request.form.get("email")
        c_celular = request.form.get("phone")
        c_comuna_id = request.form.get("select-comuna")

        if validate_contact_info(c_name, c_email, c_celular, c_comuna_id):
            #Loop secciones Dispositivo
            devices = []
            for key in request.form:
                if "nombre-dispositivo" in key:
                    section_num = key.split("nombre-dispositivo")[1] #Nos retorna el numero de seccion
                    device_info = {
                        "nombre": request.form.get(f"nombre-dispositivo{section_num}"),
                        "descripcion": request.form.get(f"descripcion-dispositivo{section_num}"),
                        "tipo": request.form.get(f"select-tipo{section_num}"),
                        "anos": request.form.get(f"anos-dispositivo{section_num}"),
                        "estado": request.form.get(f"select-estado{section_num}")
                    }
                    devices.append(device_info)
            c_id=db.create_contact(c_name, c_email, c_celular, c_comuna_id)
            for device in devices:
                db.add_device(c_id, device["nombre"], device["descripcion"], device["tipo"], device["anos"], device["estado"])
            #Agregar mensaje de exito
            return redirect(url_for('home_page'))   
        else:
            #Agregar mensaje de error dejando el formulario intacto
            return render_template('/agregar-donacion.html')
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
