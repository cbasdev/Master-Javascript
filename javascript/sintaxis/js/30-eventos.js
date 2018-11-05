'use strict'

//cargar elementos desde el head

window.addEventListener('load', () =>{


	//eventos

	//se ejecuta cuando sucede algo


	// Eventos del mouse

	//selecciona el la etiqueta con id "#boton"

	function cambiarColor(){
		var bg = boton.style.background;
		if(bg == "green"){
			boton.style.background = "blue";

		}
		else{
			boton.style.background = "green";
		}
		boton.style.padding = "10px";
		boton.style.border = "1px solid #cc"
	}
	var boton = document.querySelector("#boton");

	//captura cualquier evento

	//evento click
	boton.addEventListener('click', function(){
		cambiarColor();
	}); // callback

	//doble click
	boton.addEventListener('dbclick', function(){
		cambiarColor();
	}); // callback

	//Mouse over pasa por encima y cambia
	boton.addEventListener('mouseover', function(){
		boton.style.background ="green"
	});
	//Mouse out
	boton.addEventListener('mouseout', function(){
		boton.style.background ="#ccc"
	});


	//Focus
	var input = document.querySelector("#campo_nombre");
	input.addEventListener('focus', function(){
		console.log("Estas dentro del input");
	});

	//Blur
	input.addEventListener('blur', function(){
		console.log("Estas fuera del input");
	});

	//Keydown
	input.addEventListener('keydown', function(event){
		console.log("Estas pulsando esta tecla ", String.fromCharCode(event.keyCode));
	});

	//Keypress
	input.addEventListener('keypress', function(event){
		console.log("Tecla presionada ", String.fromCharCode(event.keyCode));
	});
	//Keyup

	input.addEventListener('keyup', function(event){
		console.log("Tecla soltada ", String.fromCharCode(event.keyCode));
	});


});
