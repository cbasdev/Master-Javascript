'use strict';

//fetch (ajax) peticiones a servicios / apis rest

var usuarios = [];
var div_usuarios = document.querySelector("#usuarios");
fetch("https://jsonplaceholder.typicode.com/users")
	.then(data=> data.json()) //convertir un objeto a json
	.then(users=> {
		usuarios = users.data;
		console.log(usuarios);


		usuarios.map((user, i) =>{ //map no esta defiinido
			let nombre = document.createElement("h2");

			nombre.innerHTML = i + name;
			div_usuarios.appendChild(nombre);
		});
	});

