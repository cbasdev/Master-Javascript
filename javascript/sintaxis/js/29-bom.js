'use strict'

//browser object mode

//elementos que nos da el navegador web

//ver el tamaño, redirigir, metodos
function getBom(){

	//medidas actuales
	console.log("w1- "+ window.innerHeight); //altura
	console.log("w2- "+ window.innerWidth); //anchura 
	//medidas totales
	console.log("s2- "+ screen.height) //algura
	console.log("s1- "+ screen.width) //anchura
	//sacar url actual
	console.log(window.location.href) //href es la url, y mas propiedades
}

//redirigir a link
function redirect(url){
	window.location.href = url;
}

//abrir una ventana nueva
function abrirVentana(url){
	window.open(url, "", "width=400,height=300");
} // con los atributos "", width y heigh se abre una nueva ventana personalizada no nueva pestaña
getBom()
