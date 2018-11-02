'use strict'

//Switch

var edad = 12;
var imprime = "";
switch(edad){
	case 18:
		imprime = "mayor de edad";
	break;
	case 28:
		imprime = "adulto";
	break;
	case 13:
		imprime = "menor de edad";
	break;
	default: 
		imprime = "nada";
}

console.log(imprime);