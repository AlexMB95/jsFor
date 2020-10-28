/*Declaración de variables*/
var numero = prompt("Introduzca un número para ver su factorial");
var r = 1;

/*Estructura for*/
for (var i = 1; i <= numero; i++) {
	r *=i;
}
alert("Resultado: "+r);