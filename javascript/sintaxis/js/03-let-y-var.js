'use strict'

//pruebas con let y var

//prueba con var
var numero = 40;
console.log(numero); // valor 40

if(true){
	var numero = 50;
	console.log(numero); // valor 50
}

console.log(numero); // 50

//prueba con let
var texto = "JS Sb";

console.log(texto); // valor

if(true){
	let texto = "Sebastian Velez";
	console.log(texto); // valor nuevo
}

console.log(texto); // valor js