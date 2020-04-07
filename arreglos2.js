var asistentes = ["Gina", "Juan", "Luz", "Michael"];
var asistencia = [true, true, false, true];

for(i=0; i< asistentes.length; i++)
{
	asistencia[i]== true ? console.log( asistentes[i] + " asistió") : console.log( asistentes[i] + " no asistió");
};

