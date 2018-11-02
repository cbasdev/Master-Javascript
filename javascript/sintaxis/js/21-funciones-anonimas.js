'use strict'

//funciones anonimas

//funcion que no tiene nombre y lo puedo guardar dentro de una variable
//se utiliza para callback


function sumame(numero1, numero2, sumaymuestra, sumapordos){
	var sumar = numero1 + numero2;
	sumaymuestra(sumar);
	sumapordos(sumar);
}

sumame(5,7, dato => { // callback
	console.log("la suma es ", dato);
},
dato=> { // funcion anonima
	console.log("la suma por dos es ", (dato * 2));
});
