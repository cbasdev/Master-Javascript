'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y de ahi mostrar resultado
*/

var introducir = 0; 
var suma = 0;
var media = 0;
var numeros = 0;


while (introducir>=0){
	introducir = prompt("Introduce numero: ", 0);
	if(introducir<0){
		break;
	}
	numeros++;
	suma = suma + Number(introducir);
	media = suma / numeros;
}

console.log("suma: "+ suma);
console.log("media: "+ media);