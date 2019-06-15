// JavaScript Document
"use strict";

$(document).ready(function() {
	
    $("#silvernotegrey.testimonial, .bbc.testimonial, .dragon.testimonial, #gold.testimonial, #julie.testimonial, .projectpage").hide();
	
	$(".fa-chevron-left").addClass("hidden");
	
	// Testimonial Controls
	
	$(".webslide1").click(function(){
		
		$(".nescol.testimonial").show();
        $(".bbc.testimonial, #silvernotegrey.testimonial").hide();
		$(".dots .webslide2, .dots .webslide3").removeClass("orange");
		$(".dots .webslide1").addClass("orange");
		$(".fa-chevron-left").addClass("hidden");
		$(".fa-chevron-right").removeClass("hidden");
});
	
	$(".webslide2").click(function(){
		
		$(".nescol.testimonial, .bbc.testimonial").hide();
        $("#silvernotegrey.testimonial").show();
		$(".dots .webslide1, .dots .webslide3").removeClass("orange");
		$(".dots .webslide2").addClass("orange");
		$(".fa-chevron-left, .fa-chevron-right").removeClass("hidden");
});
	
	$(".webslide3").click(function(){
		
        $(".nescol.testimonial, #silvernotegrey.testimonial").hide();
		$(".bbc.testimonial").show();
		$(".dots .webslide1, .dots .webslide2").removeClass("orange");
		$(".dots .webslide3").addClass("orange");
		$(".fa-chevron-right").addClass("hidden");
		$(".fa-chevron-left").removeClass("hidden");
});
	
	$(".authorslide1").click(function(){
		
        $("#gold.testimonial, .dragon.testimonial").hide();
		$("#lavender.testimonial").show();
		$(".dots .authorslide2, .dots .authorslide3").removeClass("orange");
		$(".dots .authorslide1").addClass("orange");
		$(".fa-chevron-left").addClass("hidden");
		$(".fa-chevron-right").removeClass("hidden");
	});
	
	$(".authorslide2").click(function(){
		
        $("#lavender.testimonial, .dragon.testimonial").hide();
		$("#gold.testimonial").show();
		$(".dots .authorslide1, .dots .authorslide3").removeClass("orange");
		$(".dots .authorslide2").addClass("orange");
		$(".fa-chevron-left, .fa-chevron-right").removeClass("hidden");
	});
	
	$(".authorslide3").click(function(){
		
        $("#lavender.testimonial, #gold.testimonial").hide();
		$(".dragon.testimonial").show();
		$(".dots .authorslide1, .dots .authorslide2").removeClass("orange");
		$(".dots .authorslide3").addClass("orange");
		$(".fa-chevron-right").addClass("hidden");
		$(".fa-chevron-left").removeClass("hidden");
	});
    
    $(".brandingslide1").click(function(){
		
        $("#julie.testimonial").hide();
		$(".srp.testimonial").show();
		$(".dots .brandingslide2").removeClass("orange");
		$(".dots .brandingslide1").addClass("orange");
		$(".fa-chevron-left").addClass("hidden");
		$(".fa-chevron-right").removeClass("hidden");
	});
	
	$(".brandingslide2").click(function(){
		
        $(".srp.testimonial").hide();
		$("#julie.testimonial").show();
		$(".dots .brandingslide1").removeClass("orange");
		$(".dots .brandingslide2").addClass("orange");
		$(".fa-chevron-right").addClass("hidden");
		$(".fa-chevron-left").removeClass("hidden");
		
	});
	
	// Project Pages navigation
	
	$("#silvernoteblack img").click(function(){
		
		$(".testimonial, .bbc, .left").hide();
        $(".projectpage").show();
});
});