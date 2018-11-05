'use strict'

//arrays dentro de otros array


var categorias = ["Accion", "Terror", "Comedia"];

var peliculas = ["Star Wars", "El hobbit", "Iron man"];

var cine = [categorias, peliculas];


peliculas.push("Batman"); //Añadir elemento al array
peliculas.pop(); //Eliminar elementos de un array

//Eliminar un elemento en concreto
var indice = peliculas.indexOf("El hobbit");
if(indice>-1){
	peliculas.splice(indice, 1)
}


//Convertir un array a texto

var peliculas_string = peliculas.join(); ///Peliculas a texto
console.log(peliculas_string);

// convertir texto a array
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

//console.log(cadena_array);


peliculas.push("Batman");
peliculas.push("Antman");

//METODOS DE ORDENAMIENTO


//Orden alfabético
peliculas.sort();

//Orden inverso 
peliculas.reverse();
console.log(peliculas);
