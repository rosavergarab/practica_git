var nota1=1.5;
var nota2=2.2;
var nota_def=(nota1+nota2)/2

if (nota_def<2.1)
{
	console.log("Su nota es: " + nota_def + " es decir es un resultado Pésimo");
}
else if (nota_def<3)
{
	console.log("Su nota es: " + nota_def + " es decir es un resultado Insuficiente");
}
else if (nota_def<4.1)
{
	console.log("Su nota es: " + nota_def + " es decir es un resultado Aceptable");
}
else
{
	console.log("Su nota es: " + nota_def + " es decir es un resultado Bueno");
};