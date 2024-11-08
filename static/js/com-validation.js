//Validaciones comentarios
const validateCommentForm = () =>{
	let myForm = document.forms["agregarComentario"];
	//Obtenemos valores ingresados
	let nombre = myForm["nombre"].value.trim();
	let texto = myForm["contenido"].value.trim();
	let vdName = validateCommentName(nombre);
	let vdText = validateCommentText(texto);
	return vdName && vdText	;
}

const validateCommentName = (name) => {
	if(!name) return false;
	const vl = name.trim().length;
	let lengthValid = vl >= 3 && vl <= 80; 
	return lengthValid;
}

const validateCommentText = (text) => {
	if(!text) return false;
	const strip_text = text.trim();
	return strip_text.length >=5;
}

const errorValidation = () => {
    let myForm = document.forms["agregarComentario"];
    const nombreElement = document.getElementById("nombre-id");
    
    // Ver si ya existe el mensaje de error
    let errorDiv = document.getElementById("val-box");
    if (!errorDiv) {
        errorDiv = document.createElement("div");
        errorDiv.id = "val-box";
        errorDiv.classList.add("error-message"); 
        errorDiv.innerHTML = `
            <strong id="val-msg">Campos Inválidos</strong>
            <ul id="val-list"></ul>
        `;
        myForm.insertBefore(errorDiv, nombreElement);
    }

    //Si ya existe hay que modificar
    const errorList = errorDiv.querySelector("#val-list");
    errorList.innerHTML = ""; 

    if (!validateCommentName(myForm["nombre"].value)) {
        const nameError = document.createElement("li");
        nameError.textContent = "El nombre debe tener entre 3 y 80 caracteres.";
        errorList.appendChild(nameError);
    }
    if (!validateCommentText(myForm["contenido"].value)) {
        const textError = document.createElement("li");
        textError.textContent = "El contenido debe tener al menos 5 caracteres.";
        errorList.appendChild(textError);
    }
    
    // Make sure the error message is visible
    errorDiv.style.display = "block";
}


//Validacion y submit comentarios
let addCommentBtn = document.getElementById("add-btn");
addCommentBtn.addEventListener("click", (event) => {
		if (!validateCommentForm()){
			errorValidation();
		}
		else{
			document.forms["agregarComentario"].submit();
		}
});

