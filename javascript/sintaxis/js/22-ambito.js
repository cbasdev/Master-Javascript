'use strict'

//ambito


function holaMundo(texto){
	var ambito_local = "texto local";
	console.log(texto);
	console.log(numero.toString()); // convertir a string
	console.log(ambito_local);
}

var numero=34;
var texto="Hola wenas global";
holaMundo(texto);