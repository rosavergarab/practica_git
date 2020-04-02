var precio=100000;
var cantidad=3;
var smlv=877803;
var total_venta=precio * cantidad;
console.log("El precio total de la venta es "+total_venta);
var descuento1=0.2;
var descuento2=0.1;
if (total_venta > smlv)
{
	console.log("El valor del descuento es: "+(total_venta*descuento1));
	console.log("El precio de venta con descuento es: "+(total_venta-(total_venta*descuento1)));
}
else
{ 	
	console.log("El valor del descuento es: "+(total_venta*descuento2));
	console.log("El precio de venta con descuento es: "+(total_venta-(total_venta*descuento2)));
};