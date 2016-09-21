$(document).on("keypress",function(e){

console.log(e.keyCode);	//no pongo flechas porque mi PC no me deja, queda con Enter y Z
		if (e.keyCode == 13) {

			$("#bloque").css({"left":"+=50", "position":"relative"});

		}
		if (e.which == 122) {
			$("#bloque").css({"left":"-=50", "position":"relative"});
		}

});
