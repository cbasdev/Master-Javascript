'use strict'

//DOM - Document object model

//manipular el html de la pagina

//buscar elementos con id
var caja = document.getElementById("caja1")// .innerHTML; // El inner saca el texto
var caja2 = document.querySelector("#caja1")//lo mismo de arriba
caja.innerHTML = "NUEVO TEXTO"; //cambiar el texto
caja.style.background = "blue";
caja.style.padding = "40px";
caja.style.color = "white";

caja.class = "hola"; // AGREGAR CLASE
caja.className = "hola hola2";


//Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');

var contenidoentexto = todosLosDivs[2].textContent; // saca el contenido en texto
var nuevocontenido = todosLosDivs[2];
nuevocontenido = "¡nuevo contenido!";
todosLosDivs[0].style.color = "green";

var valor;

for(valor in todosLosDivs){
	if(typeof(todosLosDivs[valor].textContent)=='string'){ // comprobar si es un texto 
		var parrafo = document.createElement("p");
		var texto = document.createTextNode(todosLosDivs[valor].textContent);
		parrafo.append(texto);
		seccion.append(parrafo);
	}
}
/*
append --> añade despues
prepend --> añade antes
*/


//conseguir elementos por su clase css

var divsRojos = document.getElementsByClassName("rojo")
var div;
for (div in divsRojos){
	if(divsRojos[div].className =="rojo"){
		divsRojos[div].style.background = "green";
	}
}
