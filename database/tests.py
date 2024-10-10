import db

nombre = "francisco"
email = "rai89@gmail.com"
numero = "966667890"
comuna_id = 10101

#Funciona
#id = db.create_contact(nombre, email, numero, comuna_id)
#print(id)

contacto_id = 1
nombre = "Notebook"
descripcion = ""
tipo = "notebook"
anos_uso = 2
estado = "funciona perfecto"

#db.add_device(contacto_id, nombre, descripcion, tipo, anos_uso, estado)


db.add_file()
