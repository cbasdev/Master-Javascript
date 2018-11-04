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

nombres2.forEach((elemento, index, data)=>{
	document.write("<li>"+ elemento+ "</li>");
});

document.write("</ul>")

