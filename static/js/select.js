const regiones = {
	"Arica y Parinacota":["Arica", "Camarones", "Putre", "General Lagos"],
	"Tarapacá":["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
	"Antofagasta":["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
	"Atacama":["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
	"Coquimbo":["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Monte Patria", "Punitaqui", "Río Hurtado", "Illapel", "Canela", "Los Vilos", "Salamanca"],
	"Valparaiso":["Valparaíso", "Viña del Mar", "Concón", "Quilpué", "Villa Alemana", "Limache", "Olmué", "Petorca", "La Ligua", "Cabildo", "San Antonio", "San Felipe", "Los Andes", "Llay-Llay", "Putaendo", "Santa María"],
	"Region Metropolitana": ["Santiago", "Las Condes", "Providencia", "Ñuñoa", "Vitacura", "La Florida", "Peñalolén", "San Miguel", "San Joaquín", "Macul", "La Reina", "Recoleta", "Independencia", "Cerrillos", "Cerro Navia", "Pudahuel", "Renca", "Quilicura", "Huechuraba", "Lo Barnechea", "El Bosque", "San Ramón", "La Pintana", "Lo Prado", "Maipú", "San Bernardo", "Pedro Aguirre Cerda", "Estación Central", "La Granja", "San José de Maipo"],
	"O'Higgins":["Rancagua", "Machalí", "Olivar", "Pichidegua", "Pichilemu", "Rengo", "Requínoa", "San Fernando", "San Vicente", "Malloa", "Doñihue", "Coltauco", "La Estrella", "Las Cabras", "Peumo", "Peralillo", "Quinta de Tilcoco", "Codegua", "Linares", "Cauquenes", "Chépica"],
	"Maule": ["Talca", "Cauquenes", "Colbún", "Constitución", "Curicó", "Empedrado", "Hualañé", "Linares", "Longaví", "Maule", "Pelarco", "Pelluhue", "Rauco", "Retiro", "San Clemente", "San Javier", "San Rafael", "Sagrada Familia", "Talca", "Teno", "Vichuquén", "Villa Alegre", "Yerbas Buenas"],
	"Ñuble":["Chillán", "Chillán Viejo", "Bulnes", "Coihueco", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Yungay"],
	"Bio Bio":["Concepción", "Chiguayante", "Hualpén", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Talcahuano", "Tomé", "Coronel", "Laja", "Los Ángeles", "Mulchén", "Nacimiento", "Negrete", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Melipeuco", "Nielol", "Victoria"],
	"Araucanía":["Temuco", "Angol", "Victoria", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Melipeuco", "Neltume", "Pucón", "Villarrica", "Loncoche", "Gorbea", "Lautaro", "Pitrufquén", "San José de la Mariquina", "Toltén", "Nueva Imperial", "Carahue", "Saavedra", "Freire", "Púa"],
	"Los Ríos":["Valdivia", "Lanco", "Los Lagos", "Mariquina", "Panguipulli", "Río Bueno", "Futrono", "La Unión", "San José de la Mariquina", "Corral", "Paillaco", "Ranco"],
	"Los Lagos":["Puerto Montt", "Puerto Varas", "Calbuco", "Castro", "Ancud", "Dalcahue", "Quellón", "Osorno", "Frutillar", "Los Muermos", "Llanquihue", "San Pablo", "San Juan de la Costa", "San Juan de la Peña", "Hualaihué", "Chaitén", "Futaleufú", "Palena"],
	"Aysén":["Coyhaique", "Chile Chico", "Aysén", "Cisnes", "Guaitecas", "Lago Verde", "O'Higgins", "Río Ibáñez", "Tortel"],
	"Magallanes":["Punta Arenas", "Puerto Natales", "Porvenir", "Cabo de Hornos", "Laguna Blanca", "Río Verde", "San Gregorio", "Timaukel", "Natales", "Antártica"],
};

const tipos = [
    "Pantalla",
    "Notebook",
    "Tablet",
    "Celular",
    "Consola",
    "Mouse",
    "Teclado",
    "Impresora",
    "Parlante",
    "Audífonos",
    "Otro"
]
const dev_status = [
    "Funciona Perfecto",
    "Funciona a medias",
    "No funciona"
]

const poblarTipos = (selectId) => {
	let tipoSelect = document.getElementById(selectId);
	for (const tipo of tipos){
		let option = document.createElement("option");
		option.value = tipo;
		option.text = tipo;
		tipoSelect.appendChild(option)
	}
}

const poblarEstados = (selectId) => {
	let estadoSelect = document.getElementById(selectId);
	for (const estado of dev_status){
		let option = document.createElement("option");
		option.value = estado;
		option.text = estado;
		estadoSelect.appendChild(option)
	}
}


const poblarRegiones = () => {
	let regionSelect =document.getElementById("select-region");
	for (const region in regiones){
		let option = document.createElement("option");
		option.value = region;
		option.text = region;
		regionSelect.appendChild(option);
	}
};

const updateComunas = () => {
	let regionSelect = document.getElementById("select-region");
	let comunaSelect = document.getElementById("select-comuna");

	let selectedRegion = regionSelect.value;

	comunaSelect.innerHTML = "";

	if(regiones[selectedRegion]){
		comunaSelect.disabled = false;  // Enable comuna select
		//Place holder para selccionar comunas
		let placeHolder = document.createElement("option");
		placeHolder.value = "";
		placeHolder.text = "Seleccione una Comuna";
		comunaSelect.appendChild(placeHolder);


		regiones[selectedRegion].forEach(comuna => {
			let option = document.createElement("option");
			option.value = comuna;
			option.text = comuna;
			comunaSelect.appendChild(option);
		});
	} else {
		comunaSelect.disabled = true;  // Disable comuna select
		let placeHolder = document.createElement("option");
		placeHolder.value = "";
		placeHolder.text = "Seleccione una Región";
		comunaSelect.appendChild(placeHolder);
	}
}

document.getElementById("select-region").addEventListener("change", updateComunas);

window.onload = () => {
	poblarRegiones();
};