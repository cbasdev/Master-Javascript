'use strict'

/*
todos los numeros entre un rango
*/

var numero1= prompt("Numeros desde: ");
var numero2= prompt("Hasta: ");

document.write("<h1>Desde el numero: "+ numero1+ " hasta el numero "+ numero2 +" hay: </h1>")


for (var i = numero1; i <= numero2; i++) {
	document.write(i+ "</br>");
	
}