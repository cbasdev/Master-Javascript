'use strict'

var fecha = new Date();

var year  =  fecha.getFullYear(); // Obtener año completo date
var mes = fecha.getMonth();
var dia = fecha.getDay();
var hora = fecha.getHours();

// date object javascript para tener metodos
var textoHora = `
	El año es: ${year}
	El mes es:${mes}
	El dia es:${dia}
	La hora es:${hora}
`
console.log(textoHora);
