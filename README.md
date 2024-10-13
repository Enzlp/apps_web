# Desarrollo de aplicaciones web

## Tarea 2: Resumen
La rama de tarea 2 se enfoca en expandir la primera entrega, que consistía en un aplicación web desarrollado únicamente con HTML y JavaScript. En esta nueva fase, se incorpora una base de datos utilizando MySQL y el framework de Flask. Flask es un microframework de Python que facilita la creación de aplicaciones web, proporcionando herramientas y funcionalidades para manejar rutas, solicitudes y respuestas, así como la interacción con bases de datos.

La implementación de Flask permitirá almacenar y gestionar datos ingresados por los usuarios de manera eficiente. El funcionamiento general de la aplicación será similar al de la primera entrega, manteniendo la lógica y las instrucciones sobre su uso.

## Como puedo correr el repositorio?

Primero, es necesario desacargar el repositorio. Una vesz hecho esto se podrá ver un archivo llamado requirements.txt, aqui se podrán ver las librería necesarias para poder ver el proyecto. Se recomienda crear un ambiente virtual para poder correr el sitio web. Para poder instalar las librerias se puede usar el comando:

```bash
pip install -r requirements.txt
```
Una vez instalado los requerimientos, bastaría con correr el script app.py:

```bash
py app.py
```
Y luego ingresar la direccion http://127.0.0.1:5000 en el navegador.


> **Nota:** Recordar que como el sitio funciona en base de una base de datos vacía, primero es necesario crear la base de datos usando el script tarea2.sql y region-comuna.sql en la carpeta de database. Y luego, poblar dicha base de datos usando la página de agregar dispositivo en el menú principal.
