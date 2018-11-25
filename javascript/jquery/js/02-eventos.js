
//EVENTOS
$(document).ready(function(){
	
	//MOUSE OVER y MOUSE OUT

	var caja = $("#caja");
	/*
	caja.mouseover(function(){
		$(this).css("background", "black");
	});
	caja.mouseout(function(){
		$(this).css("background","green");
	});
	*/

	// HOVER
	function cambiaRojo(){
		$(this).css("background", "black");
	}
	function cambiaVerde(){
		$(this).css("background","green");
	}

	caja.hover(cambiaRojo, cambiaVerde);


	//click, doble click

	caja.click(function(){
		$(this).css("background","blue")
			 	.css("color", "white");
	});

	caja.dblclick(function(){
		$(this).css("background","pink")
			 	.css("color", "white");
	});

	//focus y blur
	var nombre = $("#nombre");
	var datos = $("#datos")

	nombre.focus(function(){
		$(this).css("border", "10px solid green");
	});
	nombre.blur(function(){
		$(this).css("border", "1px solid gray");

		$("#datos").text($(this).val()).show();
	});

	//Mousedown y mouseup

	datos.mousedown(function(){
		$(this).css("border-color", "gray");
	});
	datos.mouseup(function(){
		$(this).css("border-color", "black");
	});


	//mousemove COORDNADAS
	$(document).mousemove(function(){
		console.log(event.clientX);
		console.log(event.clientY);
		$("body").css("cursor", "none");
		$("#sigueme").css("left", event.clientX)
					 .css("top", event.clientY);
	});
});