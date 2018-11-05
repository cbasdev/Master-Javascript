'use strict'

window.addEventListener('load', function(){
	var formulario =document.querySelector("#formulario")
	var box_dashed = document.querySelector(".dashed")
	box_dashed.style.display = "none"; //ocultar estilo

	formulario.addEventListener('submit', function(){
		console.log("Evento capturado");
		var nombre = document.querySelector("#nombre").value;
		var apellidos = document.querySelector("#apellidos").value;
		var edad = parseInt(document.querySelector("#edad").value);
		

		// validacion del formulario
		if(nombre.trim()==null||nombre.trim().length == 0){
			alert("El nombre no es valido");
			return false;
		}
		if(apellidos.trim()==null||apellidos.trim().length == 0){
			alert("El apellidos no es valido");
			return false;
		}
		if(edad==null||edad <= 0 || isNaN(edad)){
			alert("El edad no es valido");
			return false;
		}

		box_dashed.style.display = "block"; //ocultar estilo
		var datos_user = [nombre,apellidos, edad];

		var indice;
		for(indice in datos_user){
			var parrafo = document.createElement("p");
			parrafo.append(datos_user[indice]);
			box_dashed.append(parrafo);
		}

	});

});