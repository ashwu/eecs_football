$(document).ready(function(){

	$("#helmet").hover(function(){
		$("#helmet").attr("src", "images/helmetcolor.png");
	});

	$("#helmet").mouseleave(function(){
		$("#helmet").attr("src", "images/helmet.png");
	});

	$("#ball").hover(function(){
		$("#ball").attr("src", "images/footballcolor.png");
	});

	$("#ball").mouseleave(function(){
		$("#ball").attr("src", "images/football.png");
	});


});