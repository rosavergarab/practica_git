var persona = {
	nombre: "Rosa",
	apellido: "Vergara",
	sexo: "F",
	edad: 35,
	nacionalidad: "colombiana",
	estadocivil: "divorciada"
};

var llaves = Object.keys(persona);
console.log(llaves);

for (var i=0; i<llaves.length; i++)
{
	var llave = llaves[i];
	console.log(persona[llave]);
};