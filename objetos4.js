var persona = {
	nombre: "Rosa",
	apellido: "Vergara",
	sexo: "F",
	edad: 35,
	nacionalidad: "colombiana",
	estadocivil: "divorciada",
	saludar: function (idioma)
	{
		if (idioma == "english")
		{
			console.log("the language was: " + idioma);
			console.log("Hi! My name is: " + this.nombre);
		}
		else
		{
			console.log("El idioma es: " + idioma);
			console.log("Hola! Mi nombre es: " + this.nombre);
		};
	}
};
persona.saludar("english");
