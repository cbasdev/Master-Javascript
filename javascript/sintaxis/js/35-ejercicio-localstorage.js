'use strict'

window.addEventListener('load', function(){
	var formulario = document.querySelector("#formpeliculas");
	formulario.addEventListener('submit', function(){
		var titulo=	document.querySelector("#addpelicula").value;
		
		if(titulo.length >=1){

			localStorage.setItem(titulo, titulo);
		}
		this.reset(); // limpiar formulario :)

	});

	var ul = document.querySelector("#peliculaslist");
	for (var i in localStorage) {
		console.log(localStorage[i])
		if (typeof localStorage[i] == "string") {
			var li = document.createElement("li");
			li.append(localStorage[i]);
			ul.append(li);

		}
	}
});