$(document).ready(function(){
	//hide y show mostrar y ocultar objetos

var caja = $("#caja");
$("#mostrar").hide();
	$("#mostrar").click(function(){

		$(this).hide();
		$("#ocultar").show();
		caja.fadeIn("medium");
	});
		$("#ocultar").click(function(){
		$(this).hide();
		$("#mostrar").show();
		caja.fadeOut("medium");
	});

	$("#all").click(function(){
		//$("#caja").fadeToggle("fast");
		//$("#caja").slideToggle("fast");
		caja.fadeToggle("fast");
	});

	// A N I M A C I O N E S
	$("#animame").click(function(){
		//primera animacion
		caja.animate({
			marginLeft: "500px",
				}, "slow")
		//segunda animacion
				.animate({
			borderRadius: "900px",
			marginTop:"80px"
				}, "slow")
		//tercera animacion
				.animate({
			borderRadius: "0",
			marginTop:"0",
			marginLeft:"0"
				}, "slow");


	});
});