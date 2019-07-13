// JavaScript Document
"use strict";

$(document).ready(function() {
	
    $("#silvernotegrey.testimonial, .bbc.testimonial, .dragon.testimonial, #gold.testimonial, #julie.testimonial, #sn-test2, #sn-test3, #bbc-test2, #bbc-test3, #surface-test2, #surface-test3, #dreamless-test2, #dreamless-test3, #dragon-test2, #dragon-test3, #cyrenians-test2, #cyrenians-test3, #srp-test2, #srp-test3").hide();
	
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
		
        $("#sn-test2, #sn-test3").hide();
		$("#sn-test1").show();
		$(".dots .silvernoteslide2, .dots .silvernoteslide3").removeClass("orange");
		$(".dots .silvernoteslide1").addClass("orange");
		$(".fa-chevron-left").addClass("hidden");
		$(".fa-chevron-right").removeClass("hidden");
	});
	
	$(".silvernoteslide2").click(function(){
		
        $("#sn-test1, #sn-test3").hide();
		$("#sn-test2").show();
		$(".dots .silvernoteslide1, .dots .silvernoteslide3").removeClass("orange");
		$(".dots .silvernoteslide2").addClass("orange");
		$(".fa-chevron-left, .fa-chevron-right").removeClass("hidden");
	});
	
	$(".silvernoteslide3").click(function(){
		
        $("#sn-test1, #sn-test2").hide();
		$("#sn-test3").show();
		$(".dots .silvernoteslide1, .dots .silvernoteslide2").removeClass("orange");
		$(".dots .silvernoteslide3").addClass("orange");
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
	
	$(".surfaceslide1").click(function(){
		
        $("#surface-test2, #surface-test3").hide();
		$("#surface-test1").show();
		$(".dots .surfaceslide2, .dots .surfaceslide3").removeClass("orange");
		$(".dots .surfaceslide1").addClass("orange");
		$(".fa-chevron-left").addClass("hidden");
		$(".fa-chevron-right").removeClass("hidden");
	});
	
	$(".surfaceslide2").click(function(){
		
        $("#surface-test1, #surface-test3").hide();
		$("#surface-test2").show();
		$(".dots .surfaceslide1, .dots .surfaceslide3").removeClass("orange");
		$(".dots .surfaceslide2").addClass("orange");
		$(".fa-chevron-left, .fa-chevron-right").removeClass("hidden");
	});
    
    $(".surfaceslide3").click(function(){
		
        $("#surface-test1, #surface-test2").hide();
		$("#surface-test3").show();
		$(".dots .surfaceslide1, .dots .surfaceslide2").removeClass("orange");
		$(".dots .surfaceslide3").addClass("orange");
		$(".fa-chevron-left").removeClass("hidden");
		$(".fa-chevron-right").addClass("hidden");
	});
    
        $(".dreamlessslide1").click(function(){
		
        $("#dreamless-test2, #dreamless-test3").hide();
		$("#dreamless-test1").show();
		$(".dots .dreamlessslide2, .dots .dreamlessslide3").removeClass("orange");
		$(".dots .dreamlessslide1").addClass("orange");
		$(".fa-chevron-left").addClass("hidden");
		$(".fa-chevron-right").removeClass("hidden");
	});
	
	$(".dreamlessslide2").click(function(){
		
        $("#dreamless-test1, #dreamless-test3").hide();
		$("#dreamless-test2").show();
		$(".dots .dreamlessslide1, .dots .dreamlessslide3").removeClass("orange");
		$(".dots .dreamlessslide2").addClass("orange");
		$(".fa-chevron-left, .fa-chevron-right").removeClass("hidden");
	});
    
    $(".dreamlessslide3").click(function(){
		
        $("#dreamless-test1, #dreamless-test2").hide();
		$("#dreamless-test3").show();
		$(".dots .dreamlessslide1, .dots .dreamlessslide2").removeClass("orange");
		$(".dots .dreamlessslide3").addClass("orange");
		$(".fa-chevron-left").removeClass("hidden");
		$(".fa-chevron-right").addClass("hidden");
	});
    
    $(".dragonslide1").click(function(){
		
        $("#dragon-test2, #dragon-test3").hide();
		$("#dragon-test1").show();
		$(".dots .dragonslide2, .dots .dragonslide3").removeClass("orange");
		$(".dots .dragonslide1").addClass("orange");
		$(".fa-chevron-left").addClass("hidden");
		$(".fa-chevron-right").removeClass("hidden");
	});
	
	$(".dragonslide2").click(function(){
		
        $("#dragon-test1, #dragon-test3").hide();
		$("#dragon-test2").show();
		$(".dots .dragonslide1, .dots .dragonslide3").removeClass("orange");
		$(".dots .dragonslide2").addClass("orange");
		$(".fa-chevron-left, .fa-chevron-right").removeClass("hidden");
	});
    
    $(".dragonslide3").click(function(){
		
        $("#dragon-test1, #dragon-test2").hide();
		$("#dragon-test3").show();
		$(".dots .dragonslide1, .dots .dragonslide2").removeClass("orange");
		$(".dots .dragonslide3").addClass("orange");
		$(".fa-chevron-left").removeClass("hidden");
		$(".fa-chevron-right").addClass("hidden");
	});
	
	$(".cyreniansslide1").click(function(){
		
        $("#cyrenians-test2, #cyrenians-test3").hide();
		$("#cyrenians-test1").show();
		$(".dots .cyreniansslide2, .dots .cyreniansslide3").removeClass("orange");
		$(".dots .cyreniansslide1").addClass("orange");
		$(".fa-chevron-left").addClass("hidden");
		$(".fa-chevron-right").removeClass("hidden");
	});
	
	$(".cyreniansslide2").click(function(){
		
        $("#cyrenians-test1, #cyrenians-test3").hide();
		$("#cyrenians-test2").show();
		$(".dots .cyreniansslide1, .dots .cyreniansslide3").removeClass("orange");
		$(".dots .cyreniansslide2").addClass("orange");
		$(".fa-chevron-left, .fa-chevron-right").removeClass("hidden");
	});
    
    $(".cyreniansslide3").click(function(){
		
        $("#cyrenians-test1, #cyrenians-test2").hide();
		$("#cyrenians-test3").show();
		$(".dots .cyreniansslide1, .dots .cyreniansslide2").removeClass("orange");
		$(".dots .cyreniansslide3").addClass("orange");
		$(".fa-chevron-left").removeClass("hidden");
		$(".fa-chevron-right").addClass("hidden");
	});
    
    $(".srpslide1").click(function(){
		
        $("#srp-test2, #srp-test3").hide();
		$("#srp-test1").show();
		$(".dots .srpslide2, .dots .srpslide3").removeClass("orange");
		$(".dots .srpslide1").addClass("orange");
		$(".fa-chevron-left").addClass("hidden");
		$(".fa-chevron-right").removeClass("hidden");
	});
	
	$(".srpslide2").click(function(){
		
        $("#srp-test1, #srp-test3").hide();
		$("#srp-test2").show();
		$(".dots .srpslide1, .dots .srpslide3").removeClass("orange");
		$(".dots .srpslide2").addClass("orange");
		$(".fa-chevron-left, .fa-chevron-right").removeClass("hidden");
	});
    
    $(".srpslide3").click(function(){
		
        $("#srp-test1, #srp-test2").hide();
		$("#srp-test3").show();
		$(".dots .srpslide1, .dots .srpslide2").removeClass("orange");
		$(".dots .srpslide3").addClass("orange");
		$(".fa-chevron-left").removeClass("hidden");
		$(".fa-chevron-right").addClass("hidden");
	});
});