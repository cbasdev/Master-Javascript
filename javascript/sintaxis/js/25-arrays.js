'use strict'

//arrays, arreglos, matrices

var nombre = "Sebas";

var nombres = ["Sebas", "Juan", "Daniel", "Goku"];


var nombres2 = new Array("HTML", "CSS", "Javascript<3");


//console.log(nombres[0]);
console.log(nombres2);



//Elementos de un array 
console.log(nombres2.length);
/*
// INDICE
//var elemento = parseInt(prompt("Que elemento del array quieres? ", 0));
if(elemento >= nombres.length){
		alert("Introduce el numero correcto menor que "+ nombres.length);

}else{

alert(nombres[elemento]);
}

*/



document.write("<h1>Mejores lenguajes</h1>");
document.write("<ul>")

//manera clasica de recorrer un array
for (var i= 0; i < nombres2.length; i++){
	document.write("<li>"+ nombres2[i]+ "</li>");
}

//Manera mas elegante y con jss

nombres2.forEach((elementos, index)=>{
	document.write("<li>"+ index +"- "+elementos+ "</li>");
});

//For in
for(let lenguaje in nombres2){
	document.write("<li>"+ lenguaje+ "- "+nombres2[lenguaje]+ "</li>");

}

document.write("</ul>")

//Busquedas en un array

//Busca la cadena en el array
var busqueda = nombres2.find(function(lenguaje){
	return lenguaje == "CSS";
});

//El indice de la busqueda
var busqueda2 = nombres2.findIndex(lenguaje => lenguaje == "Javascript<3");


//hacer filtros

var precios =[3123, 13, 123, 4123, 52];
var busqueda3 = precios.some(precio => precio <=4);

console.log(busqueda3);
