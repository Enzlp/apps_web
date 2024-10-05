let sectionCount = 0;

const addDeviceSection = () => {
    sectionCount++;
    const newDiv = document.createElement("div");
    newDiv.innerHTML =             
        '<hr>'+
        '<br>'+
        '<h1 style="text-align: center;">Dispositivo '+sectionCount+'</h1>'+
        '<br>'+
        '<label for="nombre-dispositivo'+sectionCount+'">Nombre Dispositivo</label>'+
        '<input type="text" name="nombre-dispositivo'+sectionCount+'" class="nombre-dispositivo" id="nombre-dispositivo'+sectionCount+'"size="80" minlength="3" required><br>'+
        '<label for="descripcion-dispositivo'+sectionCount+'">Descripción</label>'+
        '<textarea name="descripcion-dispositivo'+sectionCount+'" class="descripcion-dispositivo" id ="descripcion-dispositivo'+sectionCount+'" rows="4" cols="50"></textarea><br>'+
        '<br>'+
        '<label for="select-tipo'+sectionCount+'">Tipo</label>'+
        '<select name="select-tipo'+sectionCount+'" id = select-tipo'+sectionCount+' class="select-tipo" required>'+
            '<option value="">Seleccione un Tipo</option>'+
        '</select><br>'+
        '<label for="anos-dispositivo'+sectionCount+'">Años De Uso</label>'+
        '<input type="number" name="anos-dispositivo'+sectionCount+'" class="anos-dispositivo" id="anos-dispositivo'+sectionCount+'" size="3" maxlength="3" required><br>'+
        '<br>'+
        '<label for="estado-funcionamiento'+sectionCount+'">Estado de Funcionamiento</label>'+
        '<select name="estado-funcionamiento'+sectionCount+'" class="select-estado" id="select-estado'+sectionCount+'" required>'+
            '<option value="">Seleccione un Estado de Funcionamiento</option>'+
        '</select><br>'+
        '<label for="fotos-productos'+sectionCount+'">Fotos de Productos</label>'+
        '<input type="file" name="fotos-productos'+sectionCount+'"id="fotos-productos'+sectionCount+'" multiple accept="image/*,.pdf" required><br>';

    const form = document.querySelector('form[name="agregarDonacion"]');
    const addDeviceButton = document.getElementById('add-btn');
    form.insertBefore(newDiv, addDeviceButton);
};

const addSectionBtn = document.getElementById("add-btn");

addSectionBtn.addEventListener("click", () => {
    addDeviceSection();
    poblarEstados('select-estado'+sectionCount);
    poblarTipos('select-tipo'+sectionCount);
});

