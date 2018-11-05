'use strict'

window.addEventListener('load',function(){


	// JSON - Javascript Object Notation

	var pelicula = {
		titulo: 'Batman vs Superman',
		year: 2017,
		pais: 'Estados Unidos'
	};

	var peliculas = [
		{titulo:"Batman", year: 2016, pais:"Francia"},
		pelicula
	];
	pelicula.titulo = "Superman Begins";

	var caja_peliculas = document.querySelector("#peliculas");
	var index;
	for(index in peliculas){
		var p = document.createElement("p");
		p.append(peliculas[index].titulo);
		caja_peliculas.append(p)
	}
});