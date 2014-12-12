$(document).ready(function(){

	 	console.log("damn u look good");

//hover functions

	//helmet
	$("#helmet").hover(function(){
		$("#helmet").attr("src", "images/helmetcolor.png");
	});

	$("#helmet").mouseleave(function(){
		$("#helmet").attr("src", "images/helmet.png");
	});

	//ball
	$("#ball").hover(function(){
		$("#ball").attr("src", "images/footballcolor.png");
	});

	$("#ball").mouseleave(function(){
		$("#ball").attr("src", "images/football.png");
	});

	//pads
	$("#pads").hover(function(){
		$("#pads").attr("src", "images/padcolor.png");
	});

	$("#pads").mouseleave(function(){
		$("#pads").attr("src", "images/pad.png");
	});

	//cleats
	$("#cleats").hover(function(){
		$("#cleats").attr("src", "images/cleatscolor.png");
	});

	$("#cleats").mouseleave(function(){
		$("#cleats").attr("src", "images/cleats.png");
	});

	//click me too function!
	$(".entypo-plus-squared").click(function(){
		$("#blurb").slideToggle();

		//change the click button
		if ($("#open").hasClass("entypo-plus-squared")) {
			$("#open").removeClass("entypo-plus-squared");
			$("#open").addClass("entypo-cancel-squared");
		} else {
			$("#open").removeClass("entypo-cancel-squared");
			$("#open").addClass("entypo-plus-squared");
		}
			
	});
	

	//when each icon is clicked:

	$("#helmet").click(function(){	
		//show helmet timeline and hide others no matter what
		$("#helmet-timeline").slideToggle();
		$("#ball-timeline, #pads-timeline, #cleats-timeline").hide();
	});

	$("#ball").click(function(){
		$("#ball-timeline").slideToggle();
		$("#helmet-timeline, #pads-timeline, #cleats-timeline").hide();
	});

	$("#pads").click(function(){	
		//show helmet timeline and hide others no matter what
		$("#pads-timeline").slideToggle();
		$("#ball-timeline, #helmet-timeline, #cleats-timeline").hide();
	});

	$("#cleats").click(function(){
		$("#cleats-timeline").slideToggle();
		$("#helmet-timeline, #ball-timeline, #pads-timeline").hide();
	});


	$(".hide").click(function(){
		$("#helmet-timeline, #ball-timeline, #pads-timeline, #cleats-timeline").slideUp();
	});

	//rumbling of headline

	 $("#hero").jrumble({
		speed:200
	});
		
	$("#hero").hover(function(){
		$("#hero").trigger("startRumble");
	});

	$("#hero").mouseleave(function(){
		$("#hero").trigger("stopRumble");
	});
			
});