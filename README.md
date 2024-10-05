# Desarrollo de aplicaciones web

## Tarea 1
La tarea posee 4 carpetas, donde js es la carpeta con los archivos js que hacen la lógica interna. La Carpeta media posee los archivos multimedias que se usaron en el desarrollo de la página, la carpeta view están los archivos html donde de las vistas pedidas y en la carpeta style esta el archivo style con el código css usado. Además se uso bootstrap para poder simplificar el diseño de algunos elementos. Todos los archivos se entregarán através de un zip.

### index.html
Página principal posee dos botones para poder ir a las páginas de ver dispositivos y agregar donaciones.
### agregar-donacion.html
Archivo con el formulario para ingresar los datos de la donación, importante notar que en el validador html aparece un warning relacionado a el popup usado para mostrar los campos faltantes, ya que parte sin ningún valor pero después será válidado dinamincamente, por lo que finalmente se ignoró
### informacion-dispositivo.html
Informacion de dispositivos, mismo problema que en agregar-donacion.
### ver-dispositivos
Lista de dispositivos ingresados.


## Notas:
La carga de información del dispositivo usando localStorage puede no funcionar al abrir los .html directamente, una opcion facil de solucionar esto es usando liveserver.