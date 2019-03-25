// JavaScript Document
"use strict";

$(document).ready(function() {
	
    $("#silvernotegrey.testimonial, .bbc.testimonial, .dragon.testimonial, #gold.testimonial").hide();
	
	$(".webslide1").click(function(){
		
		$("#silvernotegrey.testimonial, .bbc.testimonial").hide();
		$(".nescol.testimonial").show();
		$(".dots .webslide2, .dots .webslide3").removeClass("orange");
		$(".dots .webslide1").addClass("orange");
});
	
	$(".webslide2").click(function(){
		
    	$(".nescol.testimonial, .bbc.testimonial").hide();
		$("#silvernotegrey.testimonial").show();
		$(".dots .webslide1, .dots .webslide3").removeClass("orange");
		$(".dots .webslide2").addClass("orange");
});
	
	$(".webslide3").click(function(){
		
    	$(".nescol.testimonial, #silvernotegrey.testimonial").hide();
		$(".bbc.testimonial").show();
		$(".dots .webslide1, .dots .webslide2").removeClass("orange");
		$(".dots .webslide3").addClass("orange");
});
	
	$(".authorslide1").click(function(){
		
    	$("#gold.testimonial, .dragon.testimonial").hide();
		$("#lavender.testimonial").show();
		$(".dots .authorslide2, .dots .authorslide3").removeClass("orange");
		$(".dots .authorslide1").addClass("orange");
	});
	
	$(".authorslide2").click(function(){
		
    	$("#lavender.testimonial, .dragon.testimonial").hide();
		$("#gold.testimonial").show();
		$(".dots .authorslide1, .dots .authorslide3").removeClass("orange");
		$(".dots .authorslide2").addClass("orange");
	});
	
	$(".authorslide3").click(function(){
		
    	$("#lavender.testimonial, #gold.testimonial").hide();
		$(".dragon.testimonial").show();
		$(".dots .authorslide1, .dots .authorslide2").removeClass("orange");
		$(".dots .authorslide3").addClass("orange");
	});
});