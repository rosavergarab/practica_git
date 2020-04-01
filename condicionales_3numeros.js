var num1=12;
var num2=9;
var num3=11;

if ((num1>num2)&&(num1>num3))
{
	console.log("El mayor numero es: " + num1);
}	
else if ((num1>num2)&&(num1<num3))
{
	console.log("El mayor numero es: " + num3);
}
else if ((num1<num2)&&(num2>num3))
{
	console.log("El mayor numero es: " + num2);
}
else
{
	console.log("El mayor numero es: " + num3);
};