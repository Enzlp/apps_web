const validateName = (name) => {
	if(!name) return false;
	const vl = name.trim().length;
	let lengthValid = vl >= 3 && vl <= 80; 
	return lengthValid;
}

const validateEmail = (email) => {
	if(!email) return false;

	//Validacion de formato
	let struct = /^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	let validFormat = struct.test(email);

	return validFormat;
}

const validatePhoneNumber = (phone) => {
	//Opcional
	if(!phone) return true;

	let lengthValid = phone.length >=8 && phone.length <=15;
	//validar formato
	let re = /^[0-9]+$/;
	let validFormat = re.test(phone);

	return validFormat && lengthValid;
}

const validateSelect = (select) => {
	if(!select) return false;
	return true;
}

const validateNameDevice = (deviceName) => {
	if(!deviceName) return false;
	const vl = deviceName.trim().length;
	let lengthValid = vl>=3;
	return lengthValid;
}

//No es necesario validar la descripción porque es opicional

const validateUseYears = (years) => {
    if (!years) return false;
    let isInteger = Number.isInteger(Number(years));
    let inRange = (years >= 1 && years <= 99);
    return isInteger && inRange;
}

const validateImages = (images) => {
    if (!images || !(images instanceof FileList)) {
        console.log("Input is not a FileList.");
        return false;
    }

    // Convert FileList to array
    const imagesArray = Array.from(images);

    // Validate the number of images
    const lengthValid = imagesArray.length >= 1 && imagesArray.length <= 3;
    console.log(lengthValid);

    // Validate that each file is an image
    const typeValid = imagesArray.every(image => {
        if (image instanceof File && image.type) {
            const fileFamily = image.type.split("/")[0];
            return fileFamily === "image";
        }
        return false;
    });
    console.log(typeValid);

    return lengthValid && typeValid;
};


const validateDeviceSection = () =>{
	return sectionCount > 0;
} 

//Funciones de validacion auxiliares para validar iterativamente
const validateSelectIter = () => {
    let isValid = true;
    let myForm = document.forms["agregarDonacion"];
    for (let i = 1; i <= sectionCount; i++) {
        let typeSelect = myForm["select-tipo"+i].value;
        let stateSelect = myForm["select-estado" + i].value;
        isValid &&= (validateSelect(typeSelect) && validateSelect(stateSelect));
    }
    return isValid;
};


const validateDeviceNameIter = () => {
    let isValid = true;
    let myForm = document.forms["agregarDonacion"];
    for (let i = 1; i <= sectionCount; i++) {
        let deviceName = myForm["nombre-dispositivo" + i].value;
        isValid &&= validateNameDevice(deviceName);
    }
    return isValid;
};

const validateYearsIter = () => {
    let isValid = true;
    let myForm = document.forms["agregarDonacion"];
    for(let i = 1; i<=sectionCount; i++){
        let years = myForm["anos-dispositivo"+i].value;
        isValid &&= validateUseYears(years);
    }
    return isValid;
}

const validatePhotosIter = () => {
    let isValid = true;
    let myForm = document.forms["agregarDonacion"];
    for (let i = 1; i <= sectionCount; i++) {
        let photosInput = myForm["fotos-productos" + i];
        // Retrieve files from input
        let photos = photosInput.files;
        isValid &&= validateImages(photos);
    }
    return isValid;
};


//Validar el Form

const validateForm = () =>{
	let myForm = document.forms["agregarDonacion"];
	//Obtenemos valores ingresados
	let nombre = myForm["nombre"].value.trim();
	let email = myForm["email"].value.trim();
	let phone = myForm["phone"].value.trim();
	let region = myForm["select-region"].value.trim();
	let comuna = myForm["select-comuna"].value.trim();

	// Validaciones para cada atributo ingresado
	let invalidInputs = [];
	let isValid = true;
	const setInvalidInput = (inputName) => {
		invalidInputs.push(inputName);
		isValid &&= false;
	};

	if(!validateName(nombre)){
		setInvalidInput("Nombre");
	}
	if(!validateEmail(email)){
		setInvalidInput("Email");
	}
	if(!validatePhoneNumber(phone)){
		setInvalidInput("Número");
	}
	if(!validateSelect(region)){
		setInvalidInput("Región");
	}
	if(!validateSelect(comuna)){
		setInvalidInput("Comuna");
	}
	if(!validateDeviceSection()){
		setInvalidInput("Agregar Dispositivo");
	}else{
		if(!validateDeviceNameIter()){
			setInvalidInput("Nombre de Dispositivo");
		}
		if(!validateYearsIter()){
			setInvalidInput("Años de uso de Dispositivo");
		}
		if(!validatePhotosIter()){
			setInvalidInput("Fotos de Dispositivo");
		}
		if(!validateSelectIter()){
			setInvalidInput("Seleccion de Tipo y/o Estado del dispositivo")
		}
	}

	//Mostrar validaciones
	let validBox = document.getElementById("val-box");
	let validMsgElem = document.getElementById("val-msg");
	let validListElem = document.getElementById("val-list");
	let formContainer = document.querySelector(".main-container");

	if(!isValid){
		validListElem.textContent = "";
		for(let input of invalidInputs){
			let listElement = document.createElement("li");
			listElement.innerText = input;
			validListElem.append(listElement);
		}
		//Mensaje de validacion
		validMsgElem.innerText = "Los siguientes campos son inválidos:";
		validBox.style.backgroundColor = "#ffdddd";
		validBox.style.borderLeftColor = "#f44336";

		validBox.hidden = false;
	} else {
		myForm.style.display = "none";

		// establecer mensaje de éxito
	    validMsgElem.innerText = "¿Confirma que desea publicar esta donación?";
	    validListElem.textContent = "";

	    // aplicar estilos de éxito
	    validBox.style.backgroundColor = "#ddffdd";
	    validBox.style.borderLeftColor = "#4CAF50";


	    //Boton pagina principal
	    let goHomeBtn = document.createElement("button");
	    goHomeBtn.hidden = true;
	    goHomeBtn.innerText = "Volver a la Página Principal";
	    goHomeBtn.style.marginRight = "15px";
	    

	    // Agregar botones para enviar el formulario o volver
	    let submitButton = document.createElement("button");
	    
	    submitButton.innerText = "Sí, confirmo";
	    submitButton.style.marginRight = "8px";

	    submitButton.addEventListener("click", () => {
	      	//Volvemos pagina principal index.html
	    	validMsgElem.innerText = "Hemos recibido la información de su donación. Muchas gracias.";
	    	goHomeBtn.hidden = false;
	    	submitButton.hidden = true;
	    	backButton.hidden = true;
	    });

	    let backButton = document.createElement("button");
	    backButton.innerText = "No, quiero volver al formulario";
	    backButton.style.marginLeft = "20px";

	    backButton.addEventListener("click", () => {
	      // Mostrar el formulario nuevamente
	      myForm.style.display = "block";
	      validBox.hidden = true;
	    });


	    goHomeBtn.addEventListener("click", () =>{
	    	window.location.href = "../view/index.html";
	    });

	    validListElem.appendChild(submitButton);
	    validListElem.appendChild(backButton);
	    validListElem.appendChild(goHomeBtn);

	    // hacer visible el mensaje de validación
	    validBox.hidden = false;
	}
};



const validateComment = (id) => {
    let nameField = document.getElementById(`nombre-comentarista${id}`);
    let commentField = document.getElementById(`comentario-${id}`);
    
    // Validate the commentator's name
    let nameValid = nameField.value.trim().length >= 3 && nameField.value.trim().length <= 80;
    // Validate the comment
    let commentValid = commentField.value.length >= 5;
    return nameValid && commentValid;
}

const validateCommentSection = (id) => {
    let validBox = document.getElementById(`val-box-${id}`);
    let validMsgElem = document.getElementById(`val-msg-${id}`);
    let validationResult = validateComment(id);

    if (!validationResult) {
        // Displaying the error message
        validMsgElem.innerText = "No se pudo enviar el comentario ingresado.";
		validBox.style.backgroundColor = "#ffdddd";
		validBox.style.borderLeftColor = "#f44336";
        validBox.hidden = false;
    } else {

        let commentForm = document.forms[`comment-form-${id}`];
        commentForm.style.display = "none";
        
        // Hide the name input field and its label
        let commentName = document.getElementById(`nombre-comentario-${id}`);
        commentName.hidden = true;

        // Displaying success message
        validMsgElem.innerText = "Su mensaje fue agregado a comentarios";
        validBox.style.backgroundColor = "#ddffdd";
        validBox.style.borderLeftColor = "#4CAF50";
        validBox.hidden = false;
    }
}



//Eventos y ejecuciones
let submitBtn = document.getElementById("submit-btn");
if(submitBtn){
	submitBtn.addEventListener("click", validateForm);
}



