$(document).ready(function(){

	//Mover un elemento por la caja
	$(".elemento").draggable();


	//redimensionar los eleentos
	$(".elemento").resizable();

	//seleccionar elementos
	$(".lista-seleccionable").selectable();
	
	//cambiar posicion elementos
	$(".lista-seleccionable").sortable({
		update: function(event, ui){
			console.log("cambio");
		}
	});

	//drop
	$("#elemento-movido").draggable();

	$("#area").droppable({
		drop: function(){
			console.log("has soltado algo dentro");
		}
	});

	//efectos
	$("#mostrar").click(function(){
		$(".caja-efectos").effect("explode",4000); //mas atributos en la libreria
	});

	//TOOLTIP
	$(document).tooltip(); //se muestra el tittle 


	//DIALOG cuadro de dialogo
	$("#popup").dialog();

	//Calendario
	$("#calendario").datepicker();

	//tabs
	$("#pestanas").tabs();
});