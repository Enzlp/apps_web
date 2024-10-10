const comunaId = {
    'Camiña': 10301,
    'Huara': 10302,
    'Pozo Almonte': 10303,
    'Iquique': 10304,
    'Pica': 10305,
    'Colchane': 10306,
    'Alto Hospicio': 10307,
    'Tocopilla': 20101,
    'Maria Elena': 20102,
    'Ollague': 20201,
    'Calama': 20202,
    'San Pedro de Atacama': 20203,
    'Sierra Gorda': 20301,
    'Mejillones': 20302,
    'Antofagasta': 20303,
    'Taltal': 20304,
    'Diego de Almagro': 30101,
    'Chañaral': 30102,
    'Caldera': 30201,
    'Copiapo': 30202,
    'Tierra Amarilla': 30203,
    'Huasco': 30301,
    'Freirina': 30302,
    'Vallenar': 30303,
    'Alto del Carmen': 30304,
    'La Higuera': 40101,
    'La Serena': 40102,
    'Vicuña': 40103,
    'Paihuano': 40104,
    'Coquimbo': 40105,
    'Andacollo': 40106,
    'Rio Hurtado': 40201,
    'Ovalle': 40202,
    'Monte Patria': 40203,
    'Punitaqui': 40204,
    'Combarbala': 40205,
    'Mincha': 40301,
    'Illapel': 40302,
    'Salamanca': 40303,
    'Los Vilos': 40304,
    'Petorca': 50101,
    'Cabildo': 50102,
    'Papudo': 50103,
    'La Ligua': 50104,
    'Zapallar': 50105,
    'Putaendo': 50201,
    'Santa Maria': 50202,
    'San Felipe': 50203,
    'Pencahue': 50204,
    'Catemu': 50205,
    'Llay Llay': 50206,
    'Nogales': 50301,
    'La Calera': 50302,
    'Hijuelas': 50303,
    'La Cruz': 50304,
    'Quillota': 50305,
    'Olmue': 50306,
    'Limache': 50307,
    'Los Andes': 50401,
    'Rinconada': 50402,
    'Calle Larga': 50403,
    'San Esteban': 50404,
    'Puchuncavi': 50501,
    'Quintero': 50502,
    'Viña del Mar': 50503,
    'Villa Alemana': 50504,
    'Quilpue': 50505,
    'Valparaiso': 50506,
    'Juan Fernandez': 50507,
    'Casablanca': 50508,
    'Concon': 50509,
    'Isla de Pascua': 50601,
    'Algarrobo': 50701,
    'El Quisco': 50702,
    'El Tabo': 50703,
    'Cartagena': 50704,
    'San Antonio': 50705,
    'Santo Domingo': 50706,
    'Mostazal': 60101,
    'Codegua': 60102,
    'Graneros': 60103,
    'Machali': 60104,
    'Rancagua': 60105,
    'Olivar': 60106,
    'Doñihue': 60107,
    'Requinoa': 60108,
    'Coinco': 60109,
    'Coltauco': 60110,
    'Quinta Tilcoco': 60111,
    'Las Cabras': 60112,
    'Rengo': 60113,
    'Peumo': 60114,
    'Pichidegua': 60115,
    'Malloa': 60116,
    'San Vicente': 60117,
    'Navidad': 60201,
    'La Estrella': 60202,
    'Marchigue': 60203,
    'Pichilemu': 60204,
    'Litueche': 60205,
    'Paredones': 60206,
    'San Fernando': 60301,
    'Peralillo': 60302,
    'Placilla': 60303,
    'Chimbarongo': 60304,
    'Palmilla': 60305,
    'Nancagua': 60306,
    'Santa Cruz': 60307,
    'Pumanque': 60308,
    'Chepica': 60309,
    'Lolol': 60310,
    'Teno': 70101,
    'Romeral': 70102,
    'Rauco': 70103,
    'Curico': 70104,
    'Sagrada Familia': 70105,
    'Hualañe': 70106,
    'Vichuquen': 70107,
    'Molina': 70108,
    'Licanten': 70109,
    'Rio Claro': 70201,
    'Curepto': 70202,
    'Pelarco': 70203,
    'Talca': 70204,
    'Pencahue': 70205,
    'San Clemente': 70206,
    'Constitucion': 70207,
    'Maule': 70208,
    'Empedrado': 70209,
    'San Rafael': 70210,
    'San Javier': 70301,
    'Colbun': 70302,
    'Villa Alegre': 70303,
    'Yerbas Buenas': 70304,
    'Linares': 70305,
    'Longavi': 70306,
    'Retiro': 70307,
    'Parral': 70308,
    'Chanco': 70401,
    'Pelluhue': 70402,
    'Cauquenes': 70403,
    'Cobquecura': 80101,
    'Ñiquen': 80102,
    'San Fabian': 80103,
    'San Carlos': 80104,
    'Quirihue': 80105,
    'Ninhue': 80106,
    'Trehuaco': 80107,
    'San Nicolas': 80108,
    'Coihueco': 80109,
    'Chillan': 80110,
    'Portezuelo': 80111,
    'Pinto': 80112,
    'Coelemu': 80113,
    'Bulnes': 80114,
    'San Ignacio': 80115,
    'Ranquil': 80116,
    'Quillon': 80117,
    'El Carmen': 80118,
    'Pemuco': 80119,
    'Yungay': 80120,
    'Chillan Viejo': 80121,
    'Tome': 80201,
    'Florida': 80202,
    'Penco': 80203,
    'Talcahuano': 80204,
    'Concepcion': 80205,
    'Hualqui': 80206,
    'Coronel': 80207,
    'Lota': 80208,
    'Santa Juana': 80209,
    'Chiguayante': 80210,
    'San Pedro de la Paz': 80211,
    'Hualpen': 80212,
    'Cabrero': 80301,
    'Yumbel': 80302,
    'Tucapel': 80303,
    'Antuco': 80304,
    'San Rosendo': 80305,
    'Laja': 80306,
    'Quilleco': 80307,
    'Los Angeles': 80308,
    'Nacimiento': 80309,
    'Negrete': 80310,
    'Santa Barbara': 80311,
    'Quilaco': 80312,
    'Mulchen': 80313,
    'Alto Bio Bio': 80314,
    'Arauco': 80401,
    'Curanilahue': 80402,
    'Los Alamos': 80403,
    'Lebu': 80404,
    'Cañete': 80405,
    'Contulmo': 80406,
    'Tirua': 80407,
    'Renaico': 90101,
    'Angol': 90102,
    'Collipulli': 90103,
    'Los Sauces': 90104,
    'Puren': 90105,
    'Ercilla': 90106,
    'Lumaco': 90107,
    'Victoria': 90108,
    'Traiguen': 90109,
    'Curacautin': 90110,
    'Lonquimay': 90111,
    'Perquenco': 90201,
    'Galvarino': 90202,
    'Lautaro': 90203,
    'Vilcun': 90204,
    'Temuco': 90205,
    'Carahue': 90206,
    'Melipeuco': 90207,
    'Nueva Imperial': 90208,
    'Puerto Saavedra': 90209,
    'Cunco': 90210,
    'Freire': 90211,
    'Pitrufquen': 90212,
    'Teodoro Schmidt': 90213,
    'Gorbea': 90214,
    'Pucon': 90215,
    'Villarrica': 90216,
    'Tolten': 90217,
    'Curarrehue': 90218,
    'Loncoche': 90219,
    'Padre Las Casas': 90220,
    'Cholchol': 90221,
    'San Pablo': 100201,
    'San Juan': 100202,
    'Osorno': 100203,
    'Puyehue': 100204,
    'Rio Negro': 100205,
    'Purranque': 100206,
    'Puerto Octay': 100207,
    'Frutillar': 100301,
    'Fresia': 100302,
    'Llanquihue': 100303,
    'Puerto Varas': 100304,
    'Los Muermos': 100305,
    'Puerto Montt': 100306,
    'Maullin': 100307,
    'Calbuco': 100308,
    'Cochamo': 100309,
    'Ancud': 100401,
    'Quemchi': 100402,
    'Dalcahue': 100403,
    'Curaco de Velez': 100404,
    'Castro': 100405,
    'Chonchi': 100406,
    'Queilen': 100407,
    'Quellon': 100408,
    'Quinchao': 100409,
    'Puqueldon': 100410,
    'Chaiten': 100501,
    'Futaleufu': 100502,
    'Palena': 100503,
    'Hualaihue': 100504,
    'Guaitecas': 110101,
    'Cisnes': 110102,
    'Aysen': 110103,
    'Coyhaique': 110201,
    'Lago Verde': 110202,
    'Rio Ibañez': 110301,
    'Chile Chico': 110302,
    'Cochrane': 110401,
    'Tortel': 110402,
    "O'Higgins": 110403,
    'Torres del Paine': 120101,
    'Puerto Natales': 120102,
    'Laguna Blanca': 120201,
    'San Gregorio': 120202,
    'Rio Verde': 120203,
    'Punta Arenas': 120204,
    'Porvenir': 120301,
    'Primavera': 120302,
    'Timaukel': 120303,
    'Antartica': 120401,
    'Tiltil': 130101,
    'Colina': 130102,
    'Lampa': 130103,
    'Conchali': 130201,
    'Quilicura': 130202,
    'Renca': 130203,
    'Las Condes': 130204,
    'Pudahuel': 130205,
    'Quinta Normal': 130206,
    'Providencia': 130207,
    'Santiago': 130208,
    'La Reina': 130209,
    'Ñuñoa': 130210,
    'San Miguel': 130211,
    'Maipú': 130212,
    'La Cisterna': 130213,
    'La Florida': 130214,
    'La Granja': 130215,
    'Independencia': 130216,
    'Huechuraba': 130217,
    'Recoleta': 130218,
    'Vitacura': 130219,
    'Lo Barrenechea': 130220,
    'Macul': 130221,
    'Peñalolén': 130222,
    'San Joaquín': 130223,
    'La Pintana': 130224,
    'San Ramon': 130225,
    'El Bosque': 130226,
    'Pedro Aguirre Cerda': 130227,
    'Lo Espejo': 130228,
    'Estacion Central': 130229,
    'Cerrillos': 130230,
    'Lo Prado': 130231,
    'Cerro Navia': 130232,
    'San José de Maipo': 130301,
    'Puente Alto': 130302,
    'Pirque': 130303,
    'San Bernardo': 130401,
    'Calera de Tango': 130402,
    'Buin': 130403,
    'Paine': 130404,
    'Peñaflor': 130501,
    'Talagante': 130502,
    'El Monte': 130503,
    'Isla de Maipo': 130504,
    'Curacavi': 130601,
    'María Pinto': 130602,
    'Melipilla': 130603,
    'San Pedro': 130604,
    'Alhué': 130605,
    'Padre Hurtado': 130606,
    'Lanco': 100101,
    'Mariquina': 100102,
    'Panguipulli': 100103,
    'Mafil': 100104,
    'Valdivia': 100105,
    'Los Lagos': 100106,
    'Corral': 100107,
    'Paillaco': 100108,
    'Futrono': 100109,
    'Lago Ranco': 100110,
    'La Union': 100111,
    'Rio Bueno': 100112,
    'Gral. Lagos': 10101,
    'Putre': 10102,
    'Arica': 10201,
    'Camarones': 10202,
	'Traiguen': 90109
};



const comunas = {
	"1": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
	"2": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollague", "San Pedro de Atacama", "Tocopilla", "Maria Elena"],
	"3": ["Copiapo", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
	"4": ["Mincha","Combarbala","Ovalle","La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paihuano", "Vicuña", "Monte Patria", "Punitaqui", "Rio Hurtado", "Illapel", "Los Vilos", "Salamanca"],
	"5": ["Cartagena", "Santo Domingo", "Quintero", "Casablanca", "Isla de Pascua", "Algarrobo", "El Quisco", "El Tabo", "Pencahue", "Nogales", "La Calera", "Hijuelas", "La Cruz", "Quillota", "Rinconada", "Calle Larga", "San Esteban", "Puchuncavi", "Juan Fernandez","Catemu", "Zapallar","Papudo","Valparaiso", "Viña del Mar", "Concon", "Quilpue", "Villa Alemana", "Limache", "Olmue", "Petorca", "La Ligua", "Cabildo", "San Antonio", "San Felipe", "Los Andes", "Llay Llay", "Putaendo", "Santa Maria"],
	"6": ["Mostazal", "Graneros", "Coinco", "Navidad", "Marchigue", "Litueche", "Paredones", "Placilla", "Chimbarongo", "Palmilla", "Nancagua", "Santa Cruz", "Pumanque", "Chepica", "Lolol","Rancagua", "Machali", "Olivar", "Pichidegua", "Pichilemu", "Rengo", "Requinoa", "San Fernando", "San Vicente", "Malloa", "Doñihue", "Coltauco", "La Estrella", "Las Cabras", "Peumo", "Peralillo", "Quinta Tilcoco", "Codegua"],
	"7": ["Romeral", "Molina", "Licanten", "Rio Claro", "Curepto", "Parral", "Chanco","Talca", "Cauquenes", "Colbun", "Constitucion", "Curico", "Empedrado", "Hualañe", "Linares", "Longavi", "Maule", "Pelarco", "Pelluhue", "Rauco", "Retiro", "San Clemente", "San Javier", "San Rafael", "Sagrada Familia", "Talca", "Teno", "Vichuquen", "Villa Alegre", "Yerbas Buenas"],
	"8": [ "Florida", "Santa Juana", "Cabrero", "Quilleco", "Quilaco", "Alto Bio Bio", "Arauco", "Curanilahue", "Los Alamos", "Lebu", "Cañete", "Contulmo", "Tirua","Antuco","Concepcion", "Chiguayante", "Hualpen", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Talcahuano", "Tome", "Coronel", "Laja", "Los Angeles", "Mulchen", "Nacimiento", "Negrete", "San Rosendo", "Santa Barbara", "Tucapel", "Yumbel", "Angol", "Collipulli", "Curacautin", "Ercilla", "Lonquimay", "Melipeuco",  "Victoria"],
	"9": ["Padre Las Casas", "Cholchol", "Renaico", "Los Sauces", "Puren", "Lumaco", "Traiguen", "Perquenco", "Galvarino", "Vilcun", "Cunco", "Teodoro Schmidt", "Curarrehue","Temuco", "Angol", "Victoria", "Collipulli", "Curacautin", "Ercilla", "Lonquimay", "Melipeuco", "Pucon", "Villarrica", "Loncoche", "Gorbea", "Lautaro", "Pitrufquen", "Tolten", "Nueva Imperial", "Carahue", "Puerto Saavedra", "Freire"],
	"10": ["Curaco de Velez", "Chonchi", "Queilen", "San Juan", "Puyehue", "Rio Negro", "Purranque", "Fresia", "Maullin", "Cochamo", "Quemchi", "Quinchao", "Puqueldon", "Puerto Octay","Puerto Montt", "Puerto Varas", "Calbuco", "Castro", "Ancud", "Dalcahue", "Quellon", "Osorno", "Frutillar", "Los Muermos", "Llanquihue", "San Pablo", "Hualaihue", "Chaiten", "Futaleufu", "Palena"],
	"11": ["Cochrane", "Coyhaique", "Chile Chico", "Aysen", "Cisnes", "Guaitecas", "Lago Verde", "O'Higgins", "Rio Ibañez", "Tortel"],
	"12": [ "Torres del Paine", "Primavera", "Punta Arenas", "Puerto Natales", "Porvenir", "Laguna Blanca", "Rio Verde", "San Gregorio", "Timaukel", "Antartica"],
	"13": ["Quinta Normal", "La Cisterna", "Lo Barrenechea", "Lo Espejo", "Puente Alto", "Pirque", "Calera de Tango", "Buin", "Paine", "Peñaflor", "Talagante", "El Monte", "Isla de Maipo", "Curacavi","María Pinto","Melipilla","San Pedro","Alhué","Padre Hurtado","Lampa","Conchali", "Colina","Tiltil","Santiago", "Las Condes", "Providencia", "Ñuñoa", "Vitacura", "La Florida", "Peñalolén", "San Miguel", "San Joaquín", "Macul", "La Reina", "Recoleta", "Independencia", "Cerrillos", "Cerro Navia", "Pudahuel", "Renca", "Quilicura", "Huechuraba", "El Bosque", "San Ramon", "La Pintana", "Lo Prado", "Maipú", "San Bernardo", "Pedro Aguirre Cerda", "Estacion Central", "La Granja", "San José de Maipo"],
	"14": ["Mafil","Valdivia", "Lanco", "Los Lagos", "Mariquina", "Panguipulli", "Rio Bueno", "Futrono", "La Union", "Corral", "Paillaco", "Lago Ranco"],
	"15": ["Arica", "Camarones", "Putre", "Gral. Lagos"],
	"16": ["Cobquecura", "Trehuaco", "Portezuelo", "Coelemu", "Ranquil","Ñiquen","Chillan", "Chillan Viejo", "Bulnes", "Coihueco", "El Carmen", "Ninhue", "Pemuco", "Pinto", "Quillon", "Quirihue", "San Carlos", "San Fabian", "San Ignacio", "San Nicolas", "Yungay"],
};

const regiones = [
    "Tarapacá",
    "Antofagasta",
    "Atacama",
    "Coquimbo",
    "Valparaíso",
    "O'Higgins",
    "Maule",
    "Biobío",
    "Araucanía",
    "Los Lagos",
    "Aysén",
    "Magallanes",
    "Región Metropolitana",
    "Los Ríos",
    "Arica y Parinacota",
    "Ñuble"
];


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


const poblarRegiones = () => {
	let regionSelect = document.getElementById("select-region");
	let id_num = 1;

	for (const region of regiones) {
		let option = document.createElement("option");
		option.value = id_num;
		option.text = region;
		regionSelect.appendChild(option);
		id_num++;
	}
};



const updateComunas = () => {
	let regionSelect = document.getElementById("select-region");
	let comunaSelect = document.getElementById("select-comuna");

	let selectedRegion = regionSelect.value;

	comunaSelect.innerHTML = "";

	if(comunas[selectedRegion]){
		comunaSelect.disabled = false;  // Enable comuna select
		//Place holder para selccionar comunas
		let placeHolder = document.createElement("option");
		placeHolder.value = "";
		placeHolder.text = "Seleccione una Comuna";
		comunaSelect.appendChild(placeHolder);
		comunas[selectedRegion].forEach(comuna => {
			if(comunaId[comuna] == undefined){
				console.log(comuna);
			}
			let option = document.createElement("option");
			option.value = comunaId[comuna];
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



//Dispositivo
const poblarTipos = (selectId) => {
	let tipoSelect = document.getElementById(selectId);
	for (const tipo of tipos){
		let option = document.createElement("option");
		option.value = tipo.toLowerCase();
		option.text = tipo;
		tipoSelect.appendChild(option)
	}
}

const poblarEstados = (selectId) => {
	let estadoSelect = document.getElementById(selectId);
	for (const estado of dev_status){
		let option = document.createElement("option");
		option.value = estado.toLowerCase();
		option.text = estado;
		estadoSelect.appendChild(option)
	}
}


document.getElementById("select-region").addEventListener("change", updateComunas);

window.onload = () => {
	poblarRegiones();
};
