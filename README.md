# Desarrollo de aplicaciones web

## Tarea 3: Resumen
Se hizo un refactor del código para que sea mas presentable a nivel de frontend y diseño visual, también se agrego una sección de comentarios para cada dispositivo, donde se pueden comentarios anteriores y enviar sus propios comentarios. Por último se agregaron estadísiticas en torno a los datos de la base, generados con highgraphics mediante el uso de fetch y Api corriendo en paralelo.

## Como puedo correr el repositorio?

Primero, es necesario descargar el repositorio. Una vez hecho esto, se podrá ver un archivo llamado requirements.txt, donde se podrán ver las librerías necesarias para poder ver el proyecto. Se recomienda crear un ambiente virtual para poder correr la aplicación web. Para poder instalar las librerías, se puede usar el comando:

```bash
pip install -r requirements.txt
```
Una vez instalado los requerimientos, bastaría con correr el script app.py:

```bash
py app.py
```
Y luego ingresar la direccion http://127.0.0.1:5000 en el navegador.


> **Nota:** Recordar que como el sitio funciona en base de una base de datos vacía, primero es necesario crear la base de datos usando el script tarea2.sql y region-comuna.sql en la carpeta de database. Y luego, poblar dicha base de datos usando la página de agregar dispositivo en el menú principal.
