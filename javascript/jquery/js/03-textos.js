$(document).ready(function(){
	//textos
	reloadLinks();
	//disabled -> no poder clickear button
	$("#add_button").click(function(){
		$("#menu").prepend('<li><a href="' + $("#add_link").val()+'"></a></li>');
		 
		$("#add_link").val(""); // dejar el cuadro de formulario vacio
		 reloadLinks();
	
	});


	
});
	function reloadLinks(){
		$("a").each(function(index){	
		var that = $(this)
		var link = that.attr("href"); //muestra enlanaces
	
		that.attr("target", "_blank")
		that.text(link);
		});
}