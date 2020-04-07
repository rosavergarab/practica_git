var lado1=4;
var lado2=4;
var lado3=7;

if ((lado1==lado2)&&(lado2==lado3))
{
	console.log("El triángulo es Equilátero");
}
else if ((lado1==lado2)&&(lado2 !== lado3))
{
	console.log("El triángulo es Isósceles");
}
else if ((lado1 !==lado2)&&(lado2==lado3))
{
	console.log("El triángulo es Isósceles");
}
else if ((lado1 !== lado2)&&(lado1==lado3))
{
	console.log("El triángulo es Isósceles");
}
else
{
	console.log("El triángulo es Escaleno");
};