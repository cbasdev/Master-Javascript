'use strict';

//fetch (ajax) peticiones a servicios / apis rest

var div_usuarios = document.querySelector("#usuarios");
fetch("https://regres.in/api/users")
	.then(data=> data.json()) //convertir un objeto a json
	.then(users=> {
		listadoUsuarios(users.data)

		
	});

function listadoUsuarios(usuarios){
	usuarios.map((user, i) =>{ //map no esta defiinido
			let nombre = document.createElement("h3");

			nombre.innerHTML = i + '. ' + user.first_name + " " + user.last_name;
			div_usuarios.appendChild(nombre);

			document.querySelector(".loading").style='none'; 
		});
}