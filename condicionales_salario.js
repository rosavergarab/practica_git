var num_hora_trab=40;
var valor_hora=5000;
var incremento=0.5;
var val_extra=valor_hora*(1+incremento);
var horas_extras;
var salario_inicial;
var adicional;
var salario_total;

if (num_hora_trab >40)
{
	horas_extras=num_hora_trab-40;
	salario_inicial= valor_hora*40;
	adicional=horas_extras*val_extra;
	salario_total=salario_inicial+adicional;
	
	console.log("Las horas extras son: " + horas_extras);
	console.log("El salario sin extras es: " + salario_inicial);
	console.log("El adicional por extras es: " + adicional);
	console.log("El salario total es: " + salario_total);
}
else
{
	salario_total=num_hora_trab*valor_hora;	
	console.log("No tuvo horas extras");
	console.log("El salario total es: " + salario_total);

};