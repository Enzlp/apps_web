let sectionCount = 0;

const addDeviceSection = () => {
    sectionCount++;
    const newDiv = document.createElement("div");
    newDiv.innerHTML =             
        '<label>Dispositivo '+sectionCount+'</label>'+
        '<br><hr><br>'+
        '<label for="nombre-dispositivo'+sectionCount+'">Nombre Dispositivo</label>'+
        '<input type="text" name="nombre-dispositivo'+sectionCount+'" class="nombre-dispositivo" id="nombre-dispositivo'+sectionCount+'"size="80" minlength="3" required><br>'+
        '<label for="descripcion-dispositivo'+sectionCount+'">Descripción</label>'+
        '<textarea name="descripcion-dispositivo'+sectionCount+'" class="descripcion-dispositivo" id ="descripcion-dispositivo'+sectionCount+'" rows="4" cols="50"></textarea><br>'+
        '<label for="select-tipo'+sectionCount+'">Tipo</label>'+
        '<select name="select-tipo'+sectionCount+'" id = select-tipo'+sectionCount+' class="select-tipo" required>'+
            '<option value="">Seleccione un Tipo</option>'+
            '<option value = "Pantalla">Pantalla</option>'+
            '<option value = "Notebook">Notebook</option>'+
            '<option value = "Tablet">Tablet</option>'+
            '<option value = "Celular">Celular</option>'+
            '<option value = "Consola">Consola</option>'+
            '<option value = "Mouse">Mouse</option>'+
            '<option value = "Teclado">Teclado</option>'+
            '<option value = "Impresora">Impresora</option>'+
            '<option value = "Parlante">Parlante</option>'+
            '<option value = "Audífonos">Audífonos</option>'+
            '<option value = "Otro">Otro</option>'+
        '</select><br>'+
        '<label for="anos-dispositivo'+sectionCount+'">Años De Uso</label>'+
        '<input type="number" name="anos-dispositivo'+sectionCount+'" class="anos-dispositivo" id="anos-dispositivo'+sectionCount+'" size="3" maxlength="3" required><br>'+
        '<label for="estado-funcionamiento'+sectionCount+'">Estado de Funcionamiento</label>'+
        '<select name="estado-funcionamiento'+sectionCount+'" class="select-estado" id="select-estado'+sectionCount+'" required>'+
            '<option value="">Seleccione un Estado de Funcionamiento</option>'+
            '<option value = "Funciona Perfecto">Funciona Perfecto</option>'+
            '<option value = "Funciona a medias">Funciona a medias</option>'+
            '<option value = "No funciona">No funciona</option>'+
        '</select><br>'+
        '<label for="fotos-productos'+sectionCount+'">Fotos de Productos</label>'+
        '<input type="file" name="fotos-productos'+sectionCount+'"id="fotos-productos'+sectionCount+'" multiple accept="image/*,.pdf" required><br>';

    const form = document.querySelector('form[name="agregarDonacion"]');
    const addDeviceButton = document.getElementById('add-btn');
    form.insertBefore(newDiv, addDeviceButton);
};

const addSectionBtn = document.getElementById("add-btn");
addSectionBtn.addEventListener("click", addDeviceSection);
