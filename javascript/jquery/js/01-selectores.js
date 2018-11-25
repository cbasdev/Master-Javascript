	

//$ == jQuery luego el selector (document) ready es el evento
// que tiene funcion de callback y listo

$(document).ready(function(){
	//selector de id
	var rojo = $("#rojo").css("background", "red") //cambiar parametros css 
	 					 .css("color", "white");

	var amarillo = $("#amarillo").css("background", "yellow")
								 .css("color", "gray");

	var verde = $("#verde").css("background", "green")
								 .css("color", "white");


	//Selectores de clases

	var mi_clase = $(".zebra");
	mi_clase.css("border", "5px dashed black");

	$(".sin_borde").click(function(){
			$(this).css("border", "5px dashed black");
		});


	//selectores de etiqueta

	var parrafos= $("p");

	parrafos.click(function(){
		var that = $(this);
		if(that.hasClass('zebra')){
			$(this).remove("zebra");
		}
		else{
			$(this).css("border", "5px dashed black");
		}
	});


	//selectores de atributo

	$('[title="google"]').css("background", "black")


	//otros

	$('p,a').addClass("margen-superior"); //no sobresaturar el dom

	var search = $('#caja').find('.resaltado');
	parrafos.click(function(){
		$(this).removeClass("resaltado");
	});
});	

//#se refiere a id