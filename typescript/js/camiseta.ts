//interface

interface CamisetaBase{
	setColor(color);
	getColor();
}


//Decorador

function estampar(logo: string){
	return function(target: Function){
		target.prototype.estampacion = function():void{
			console.log("Camiseta estampada con el logo: "+ logo);
		}

	}
}

//implementar Decorador
@estampar('Gucci Gang')

//clases

class Camiseta implements CamisetaBase{
	private color: string;
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;

	constructor(color, modelo, marca, talla, precio){
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}

	public setColor(color){
		this.color = color;
	}
	public getColor(){
		return this.color;
	}
}


//herencia

class Sudadera extends Camiseta{
	public capucha: boolean;

	setCapucha(capucha: boolean){
		this.capucha = capucha;
	}

	getCapucha():boolean{
		return this.capucha;
	}
}

var camiseta = new Camiseta("asd", "asd", "asd", "asd", 123);

console.log(camiseta);
camiseta.estampacion();

var sudadera = new Sudadera("asd", "asd", "asd", "asd", 123);


sudadera.setCapucha(true);
sudadera.setColor("Gris");
console.log(sudadera);
