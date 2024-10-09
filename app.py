from flask import Flask, render_template, request
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
        c_comuna_id = request.form.get("select_comuna")
        error = ""
        if validate_contact_info(c_name, c_email, c_celular, c_comuna_id):
            db.create_contact(c_name, c_email, c_celular, c_comuna_id)
            return render_template('index.html')    
        else:
            error += "Los campos ingresados son invalidos"
        return render_template('agregar-donacion.html', error = error)
    elif request.method =="GET":
        return render_template('agregar-donacion.html')

@app.route('/ver-dispositivos')
def ver_dispositivos():
    return render_template('ver-dispositivos.html')

@app.route('/informacion-dispositivo')
def info_disp():
    return render_template('/informacion-dispositivo.html')

if __name__ == '__main__':
    app.run(debug=True)
