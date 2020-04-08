var telefono = "302 589";
var celular = "3104116422";
var espacios = 0;
var espacios2 = 0;

if (telefono.length == 7)
{
	
	for (var i=0; i<telefono.length;i++)
	{
		if (telefono[i]==" ")
		{
			espacios = espacios + 1;
		}
	}
	if (espacios > 0)
	{
		console.log("El teléfono fijo " + telefono +" tiene la longitud correcta pero tiene espacios");
	}
	else
	{
		console.log("El teléfono fijo " + telefono +" tiene la longitud correcta sin espacios");
	}
}
else
{
	console.log("El teléfono fijo " + telefono +" NO tiene la longitud correcta");
};

if (celular.length == 10)
{
	for (var i=0; i<celular.length;i++)
	{
		if (celular[i]==" ")
		{
			espacios2 = espacios2 + 1;
		}
	}
	
	if (espacios2 > 0)
	{
		console.log("El celular " + celular +" tiene la longitud correcta pero tiene espacios");
	}
	else
	{
		console.log("El celular " + celular +" tiene la longitud correcta sin espacios");
	}
}
else
{
	console.log("El celular " + celular +" NO tiene la longitud correcta");
};