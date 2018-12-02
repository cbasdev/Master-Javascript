$(document).ready(function(){
	

	if(window.location.href.indexOf("index")> -1){

	//slider
	$('.bxslider').bxSlider({
	    mode: 'fade',
	    captions: true,
	    slideWidth: 1200
	  });

	//post
	var posts = [

		{
			tittle:'Tittle 1',
			date: moment().format("MMMM Do YYYY"),
			content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '
		},
		{
			tittle:'Tittle 2',
			date: moment().format("MMMM Do YYYY"),
			content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '
		},
		{
			tittle:'Tittle 3',
			date: moment().format("MMMM Do YYYY"),
			content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '
		},
		{
			tittle:'Tittle 4',
			date: moment().format("MMMM Do YYYY"),
			content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '
		},
	];
	posts.forEach((item, index)=>{

		var post = `
			<article class="post">
				<h2>${item.tittle}</h2>
				<span class="date">${item.date}</span>
				<p>${item.content}</p>
				<a href="#" class="button-more">Leer más</a>
			</article>
		`;
		$("#posts").append(post);
	});
	}

/*
				<article class="post">
					<h2>Open Source</h2>
					<span class="date">Publicado el: 26/11/18</span>
					<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
					</p>
					<a href="#" class="button-more">Leer más</a>
				</article>*/

	//Selector de tema

	var theme = $("#theme")
	$("#to-background").click(function(){
		theme.attr("href", "css/stars.css");
	});
	$("#to-backgroundsky").click(function(){
		theme.attr("href", "css/sky.css");
	});


	//Scroll arriba de la web
	$('.subir').click(function(){
		$('html,body').animate({
			scrollTop: 0

		}, 3000);

		return false;
	});
/*
*/

	//login falso

	$("#login form").submit(function(){
		var form_name = $("#form_name").val();

		localStorage.setItem("form_name", form_name);
	});


	var form_name= localStorage.getItem("form_name");

	if (form_name!= null && form_name!= "undefined") {
		var about_parrafo = $("#about p");
		
		about_parrafo.html("<br><strong>Bienvenido,"+ form_name+"</strong>");
		about_parrafo.append("<a href='#' id='logout'>Log-out</a>");
		

		$("#login").hide();


		$("#logout").click(function(){

			localStorage.clear();
			location.reload();
		});
	}

	if(window.location.href.indexOf("about")> -1){
		setInterval(function(){

			var  reloj = moment().format("hh:mm:ss"); 
			$("#reloj").html(reloj);
		}, 1000);

	}


});
