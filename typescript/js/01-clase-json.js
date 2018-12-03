var Bicicleta = {
	color: "Rojo",
	modelo: "BMX",
	frenos: "Disco",
	velocidadMaxima: "60km",
	cambiarColor: function(newcolor){
		this.color = newcolor;
	}

};

Bicicleta.cambiarColor("verde");

console.log(Bicicleta)