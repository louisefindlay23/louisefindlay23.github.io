// JavaScript Document
"use strict";

$(document).ready(function() {
	
    $("#silvernotegrey.testimonial, .bbc.testimonial, .dragon.testimonial, #gold.testimonial, #julie.testimonial, #sn-test2, #bbc-test2, #bbc-test3").hide();
	
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
	
	$(".silvernoteslide1").click(function(){
		
        $("#sn-test2").hide();
		$("#sn-test1").show();
		$(".dots .silvernoteslide2").removeClass("orange");
		$(".dots .silvernoteslide1").addClass("orange");
		$(".fa-chevron-left").addClass("hidden");
		$(".fa-chevron-right").removeClass("hidden");
	});
	
	$(".silvernoteslide2").click(function(){
		
        $("#sn-test1").hide();
		$("#sn-test2").show();
		$(".dots .silvernoteslide1").removeClass("orange");
		$(".dots .silvernoteslide2").addClass("orange");
		$(".fa-chevron-right").addClass("hidden");
		$(".fa-chevron-left").removeClass("hidden");
	});
    
    $(".bbcslide1").click(function(){
		
        $("#bbc-test2, #bbc-test3").hide();
		$("#bbc-test1").show();
		$(".dots .bbcslide2, .dots .bbcslide3").removeClass("orange");
		$(".dots .bbcslide1").addClass("orange");
		$(".fa-chevron-left").addClass("hidden");
		$(".fa-chevron-right").removeClass("hidden");
	});
	
	$(".bbcslide2").click(function(){
		
        $("#bbc-test1, #bbc-test3").hide();
		$("#bbc-test2").show();
		$(".dots .bbcslide1, .dots .bbcslide3").removeClass("orange");
		$(".dots .bbcslide2").addClass("orange");
		$(".fa-chevron-left, .fa-chevron-right").removeClass("hidden");
	});
    
    $(".bbcslide3").click(function(){
		
        $("#bbc-test1, #bbc-test2").hide();
		$("#bbc-test3").show();
		$(".dots .bbcslide1, .dots .bbcslide2").removeClass("orange");
		$(".dots .bbcslide3").addClass("orange");
		$(".fa-chevron-left").removeClass("hidden");
		$(".fa-chevron-right").addClass("hidden");
	});
});