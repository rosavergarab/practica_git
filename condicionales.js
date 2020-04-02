var precio=300000;
var cantidad=3;
var smlv=877803;
var total_venta=precio * cantidad;
console.log("El precio total de la venta es "+total_venta);
var descuento=0.2;
if (total_venta > smlv)
{
	console.log("El valor del descuento es: "+(total_venta*descuento));
	console.log("El precio de venta con descuento es: "+(total_venta-(total_venta*descuento)));
};
