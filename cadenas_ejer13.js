var arreglo = ["Jesus Estrada;36;M;Calle 1 # 2", "Rosa Vergara;33;F;Calle 3 # 4", "Fernando Castillo;34;M;Calle 5 # 2"];
var cadena1 = arreglo[0];
var cadena2 = arreglo[1];
var cadena3 = arreglo[2];

var edad1 = parseInt(cadena1.split(";")[1]);
var edad2 = parseInt(cadena2.split(";")[1]);
var edad3 = parseInt(cadena3.split(";")[1]);

var prom = (edad1 + edad2 + edad3)/3;

console.log("La edad promedio es: " + prom);