'use strict'

window.addEventListener('load', function(){

	//Timers
	//se ejecuta varias veces
	function intervalo(){
		var tiempo = setInterval(function(){
		console.log("Set insterval ejecutado");
		//encuentra el primer h1 con query selector y cambia tamaño
		
		var encabezado = document.querySelector("h1");
		if (encabezado.style.fontSize == "50px") {
			encabezado.style.fontSize = "20px";
			} else {encabezado.style.fontSize = "50px";
		}
		}, 1000); //cada cuanto se ejecuta la instruccion

	return tiempo;

	}

	var tiempo = intervalo();
/*
	//el set time out solo se ejecuta UNA VEZ
	var tiempo2 = setTimeout(function(){
		console.log("Set insterval ejecutado");
		//encuentra el primer h1 con query selector y cambia tamaño
		
		var encabezado = document.querySelector("h1");
		//document.write("<h1>END</h1>")
		}, 1000);

*/

	var stop = document.querySelector("#stop");

	stop.addEventListener("click", function(){
		alert("has parado el intervalo");
		clearInterval(tiempo);

	});

	var start = document.querySelector("#start");

	start.addEventListener("click", function(){
		alert("has iniciado el intervalo");
		intervalo();

	});
});

