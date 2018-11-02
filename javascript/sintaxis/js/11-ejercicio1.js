'use strict'

/*
programa que pida dos numeros y que diga cual es mayor menor y si son iguales

PLUS: si los numeros no son un numero o son menores o iguales a cero nos vuelva a pedir datos

*/

var numero_1 = prompt("Numero 1: ", 0);
var numero_2 = prompt("Numero 2: ", 0);

while(numero_1 <= 0 || numero_2 <= 0 || isNaN(numero_1)|| isNaN(numero_2)){
	numero_1 = prompt("Numero 1: ", 0);
	numero_2 = prompt("Numero 2: ", 0);
}
if(numero_1>numero_2){
	console.log("Numero 1 mayor al numero 2");
}
if(numero_1<numero_2){
	console.log("Numero 1 menor al numero 2");
}
if(numero_1==numero_2){
	console.log("Numero 1 igual al numero 2");
}