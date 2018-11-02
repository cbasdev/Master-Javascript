'use strict'

// Parametros REST y SPREAD


function listadoFutas(fruta1,fruta2, ...resto_de_frutas){
	console.log("Fruta 1: "+ fruta1)
	console.log("Fruta 2: "+ fruta2)
	console.log("Resto de frutas: "+ resto_de_frutas)

}

var frutas = ["naranja","manzana"]
listadoFutas(...frutas,"banano", "pera", "Sandía", "melon");