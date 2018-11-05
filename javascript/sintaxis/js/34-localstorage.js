'use strict'

window.addEventListener('load', function(){
	//Localstorage Guardar informacion en modo sesion 
	//se suele usar mucho
	
	//comprobar disponibilidad

	if(typeof(Storage) != "undefined"){
		console.log("Localstorage disponible");

	}else{
		console.log("Localstorage no disponible");
	}


	//Guardar datos en el local storage

	localStorage.setItem("llave", "valor");

	//Recuperar elemento

	console.log(localStorage.getItem("llave"));
	document.querySelector("#peliculas").innerHTML = localStorage.getItem("llave")

	//Guardar objetos en localstorage
	var usuario = {
		nombre: "Sebastian",
		email: "asdad@asd.com",
		telefono: "1233123"
	};

	localStorage.setItem("usuario", JSON.stringify(usuario)); //convertir datos para mandar al local storage


	//recuperar objeto tipo jsstring
	console.log(JSON.parse(localStorage.getItem("usuario")));

	//borrar elemento del localstorage

	localStorage.removeItem("usuario");

	//limpiar todo
	localStorage.clear();

});