// JavaScript Document
"use strict";

$(document).ready(function() {
	
    $("#silvernotegrey.testimonial").hide();
	$(".bbc.testimonial").hide();
	
	$(".webslide1").click(function(){
		
		$("#silvernotegrey.testimonial").hide();
		$(".bbc.testimonial").hide();
		$(".nescol.testimonial").show();
		$(".dots .webslide2, .dots .webslide3").removeClass("orange");
		$(".dots .webslide1").addClass("orange");
});
	
	$(".webslide2").click(function(){
		
    	$(".nescol.testimonial").hide();
		$(".bbc.testimonial").hide();
		$("#silvernotegrey.testimonial").show();
		$(".dots .webslide1, .dots .webslide3").removeClass("orange");
		$(".dots .webslide2").addClass("orange");
});
	
	$(".webslide3").click(function(){
		
    	$(".nescol.testimonial").hide();
		$("#silvernotegrey.testimonial").hide();
		$(".bbc.testimonial").show();
		$(".dots .webslide1, .dots .webslide2").removeClass("orange");
		$(".dots .webslide3").addClass("orange");
});
	
});