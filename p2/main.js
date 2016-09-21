objeto1 = {"propiedad_1":"1", "propiedad_2":"2"}
var nuevo = {}
copia_objeto = function(objeto){
	nuevo = (JSON.parse(JSON.stringify(objeto)));
	return(nuevo);
}