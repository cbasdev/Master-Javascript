$(document).ready(function(){

	//load
	//$("#datos").load("https://reqres.in/")

	//get y post -> protocolos http

	//get es para obtener info de un backend
	$.get("https://reqres.in/api/users", {page: 3}, function(response){
		response.data.forEach((element, index)=> {

			$("#datos").append("<p>"+element.first_name+" "+ element.last_name+"</p>")
		});

	});

	

	$("#formulario").submit(function(e){
		e.preventDefault(); //no redirigir
		var usuario = {
		"name": $('input[name="name"]').val(), //atrinutos
		"email": $('input[name="email"]').val()
		};
		console.log(usuario);
/*
		//post es para enviar peticiones ajax a un backend
		$.post($(this).attr("action"), usuario, function(response){
		console.log(response);
		}).done(function(){
			//alert("usuarioAñadido")
		});
*/

		$.ajax({
			type: 'POST',
			/*
			dataType:'json',
			contentType: 'aplication/json',
			*/
			url:$(this).attr("action"),
			data: usuario,
			beforeSend: function(){
				console.log("Enviando Usuario...");
			},
			success: function(response){
				console.log(response);
			},
			error: function(){
				console.log("Error");
			},
			timeout: 10000
		});
		return false;
	});
});