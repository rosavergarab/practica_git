var arreglo = ["Jesus Estrada;36;M;Calle 1 # 2", "Rosa Vergara;33;F;Calle 3 # 4", "Fernando Escobar;34;M;Calle 5 # 2"];
var cadena1 = arreglo[0];
var cadena2 = arreglo[1];
var cadena3 = arreglo[2];
var prom = 0;

var ap1 = cadena1.split(";")[0].split(" ")[1].split("")[0];
var ap2 = cadena2.split(";")[0].split(" ")[1].split("")[0];
var ap3 = cadena3.split(";")[0].split(" ")[1].split("")[0];

var edad1 = parseInt(cadena1.split(";")[1]);
var edad2 = parseInt(cadena2.split(";")[1]);
var edad3 = parseInt(cadena3.split(";")[1]);

if ((ap1 == "E") && (ap2 == "E") && (ap3 == "E"))
{
	prom = (edad1 + edad2 + edad3)/3;
	console.log("La edad promedio es: " + prom);
}
else if ((ap1 == "E") && (ap2 == "E") && (ap3 !== "E"))
{
	prom = (edad1 + edad2)/2;
	console.log("La edad promedio es: " + prom);
}
else if ((ap1 !== "E") && (ap2 == "E") && (ap3 == "E"))
{
	prom = (edad2 + edad3)/2;
	console.log("La edad promedio es: " + prom);
}
else if ((ap1 == "E") && (ap2 !== "E") && (ap3 == "E"))
{
	prom = (edad1 + edad3)/2;
	console.log("La edad promedio es: " + prom);
}
else if ((ap1 == "E") && (ap2 !== "E") && (ap3 !== "E"))
{
	console.log("La edad promedio es: " + edad1);
}
else if ((ap1 !== "E") && (ap2 == "E") && (ap3 !== "E"))
{
	console.log("La edad promedio es: " + edad2);
}
else if ((ap1 !== "E") && (ap2 !== "E") && (ap3 == "E"))
{
	console.log("La edad promedio es: " + edad3);
}
else
{
	console.log("Ningún apellido tiene E");
};
