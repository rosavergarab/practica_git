var personas = [
//persona 1 del arreglo
{
	nombre:"Pedro",
	sexo: "M",
	edad: 55,
	idiomas: ["EN","ES","FR"],
	veredad: function ()
	{
		console.log("la edad de "+this.nombre+" es "+this.edad);
	}
},
//persona 2 del arreglo
{
	nombre:"Luisa",
	sexo: "F",
	edad: 23,
	idiomas: ["FR"],
	veredad: function ()
	{
		console.log("la edad de "+this.nombre+" es "+this.edad);
	}
}
,
//persona 3 del arreglo
{
	nombre:"Juliana",
	sexo: "F",
	edad: 34,
	idiomas: ["AL"],
	veredad: function ()
	{
		console.log("la edad de "+this.nombre+" es "+this.edad);
	}
}
];

for (var a=0; a<personas.length;a++)
{
	var persona = personas[a];
	
	for (var i=0; i<persona.idiomas.length; i++)
	{
		if(persona.idiomas[i]==="EN")
		{
			console.log("La persona " +persona.nombre+" habla inglés");
			persona.veredad();
		};
	};
};