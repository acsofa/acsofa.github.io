$(document).ready(function() {
	$("#thumbnail img").click(function(e){
 
		$("#background").css({"opacity" : "0.7"})
						.fadeIn("slow");
 
		$("#large").html("<img src='"+$(this).parent().attr("href")+"' alt='"+$(this).attr("alt")+"' /><br/>"+$(this).attr("rel")+"")
				   .center()
				   .fadeIn("slow");
 
		return false;
	});
 
	$(document).keypress(function(e){
		if(e.keyCode==27){
			$("#background").fadeOut("slow");
			$("#large").fadeOut("slow");
		}
	});
 
	$("#background").click(function(){
		$("#background").fadeOut("slow");
		$("#large").fadeOut("slow");
	});
 
	$("#large").click(function(){
		$("#background").fadeOut("slow");
		$("#large").fadeOut("slow");
	});
 
});