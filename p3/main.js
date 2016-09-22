
var notas = [];
	
function Alumnos(nombre,notas){
	this.nombre = nombre;	
	this.notas = notas;
	this.promedio_final = 0;
	this.com_nombre = function(){
		if (typeof(this.nombre) == stringValue)
			alert("el nombre no es un string");
	}		
	this.mipromedio = function(){
		var sum = 0
		var j = 0;
		for (var i = 0; i < this.notas.length; i++) {
			sum = sum + this.notas[i];
		}
		promedio_final = sum/this.notas.length;
		return(promedio_final);
	}
}

var Alvaro = new Alumnos("Alvaro",[1,2,3]);