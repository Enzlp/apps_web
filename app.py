from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home_page():
    return render_template('index.html')

@app.route('/agregar_donacion')
def agregar_donacion():
    return render_template('agregar-donacion.html')

@app.route('/ver-dispositivos')
def ver_dispositivos():
    return render_template('ver-dispositivos.html')

@app.route('/informacion-dispositivo')
def info_disp():
    return render_template('/informacion-dispositivo.html')

if __name__ == '__main__':
    app.run(debug=True)
