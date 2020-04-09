var persona = {
	nombre: "Rosa",
	apellido: "Vergara",
	sexo: "F",
	edad: 35,
	nacionalidad: "colombiana",
	estadocivil: "divorciada"
};

persona.nacionalidad == "colombiana" ? console.log("Sí es colombiana") : console.log("No es colombiana");
persona.peso = 60;
delete persona.estadocivil;

for(var llave in persona)
{
	if (persona.hasOwnProperty(llave))
	{
		console.log(persona[llave]);
	};
};
