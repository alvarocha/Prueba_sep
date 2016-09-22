$(document).ready(function(){
		$("#el_div").on("click",function(){
		$("#el_OL").append("<li>"+4+"</li>");
		//			$("#el_OL").detach("<li>"+4+"</li>");
	})

		$("li").on("click",function(){
		$("#el_OL :last-child").remove();//remove("<li>""</li>");
		//			$("#el_OL").detach("<li>"+4+"</li>");
	})
});