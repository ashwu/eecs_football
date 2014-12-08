$(document).ready(function(){

	$(".icon").hover(function(){
		$(".icon").attr("src", "images/helmetcolor.png");
	});

	$(".icon").mouseleave(function(){
		$(".icon").attr("src", "images/helmet.png");
	});

	$(".icon").click(function(){
		$("#helmet-timeline").toggle();
	})
});