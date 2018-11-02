'use strict'

//transformacion de textos

var numero = 444;
var texto1 = "Welcome, do you need drugs drugs?";
var texto2 = "yeah, i need";

var dato = numero.toString(); // convertir en string
	dato = texto2.toUpperCase(); // convertir a mayusculas
	dato = texto1.toLowerCase(); // convertir a mayusculas



//Calcular longitud de texto size(of)

var nombre = "Sebastian";


//Concatenar textos

var textoTotal = texto1 + " "+  texto2;
var textoTotal = texto1.concat(" "+ texto2);

//Busquedas

var Busqueda = texto1.indexOf("drugs"); // primera
var Busqueda = texto1.search("drugs"); // primera
var Busqueda = texto1.lastIndexOf("drugs"); // ultima 
var Busqueda = texto1.match(/drugs/gi); //numero resultados
var Busqueda = texto1.substr(0, 5); //sacar letras a partir del caracter del 1er parametro
var Busqueda = texto1.charAt(3); //Saca un caracter en concreto
var Busqueda = texto1.startsWith("Welcome"); // pregunta si esta el texto AL INICIO DEL STRING
var Busqueda = texto1.endsWith("Welcome"); // pregunta si esta el texto AL FINAL DEL STRING
var Busqueda = texto1.includes("drugs"); // buscar en cualquier lado

// Funciones de reemplazo

var Reeemplazo = texto1.replace("drugs", "alcohol");
var Reeemplazo = texto1.slice(14, 22); // cortar el string desde el parametro
var Reeemplazo = texto1.split(" "); // Meter todo el string en un array
var Reeemplazo = texto1.trim(); // Quitar espacios por delante y por detras IMPORTANTE

console.log(Reeemplazo)


