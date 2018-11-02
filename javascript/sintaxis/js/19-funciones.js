'use strict'

//Funciones 

function factorial(n){
	var factorial = 1;
	for(var i=1; n>i; n--){
		factorial = factorial*n;
	}
	return factorial;
}

console.log(factorial(4));