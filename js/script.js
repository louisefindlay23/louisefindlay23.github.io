// JavaScript Document
"use strict";

$(document).ready(function () {

    $("#test2, #test3, #test4").hide();

    $(".fa-chevron-left").addClass("hidden");

    // Testimonial Controls

    $(".slide1").click(function () {

        $("#test2, #test3, #test4").hide();
        $("#test1").show();
        $(".dots .slide2, .dots .slide3, .dots .slide4").removeClass("orange");
        $(".dots .slide1").addClass("orange");
        $(".fa-chevron-left").addClass("hidden");
        $(".fa-chevron-right").removeClass("hidden");
    });

    $(".slide2").click(function () {

        $("#test1, #test3, #test4").hide();
        $("#test2").show();
        $(".dots .slide1, .dots .slide3, .dots .slide4").removeClass("orange");
        $(".dots .slide2").addClass("orange");
        $(".fa-chevron-left, .fa-chevron-right").removeClass("hidden");
    });

    $(".slide3").click(function () {

        $("#test1, #test2, #test4").hide();
        $("#test3").show();
        $(".dots .slide1, .dots .slide2, .dots .slide4").removeClass("orange");
        $(".dots .slide3").addClass("orange");
        $(".fa-chevron-left, .fa-chevron-right").removeClass("hidden");
    });

    $(".slide4").click(function () {

        $("#test1, #test2, #test3").hide();
        $("#test4").show();
        $(".dots .slide1, .dots .slide2, .dots .slide3").removeClass("orange");
        $(".dots .slide4").addClass("orange");
        $(".fa-chevron-right").addClass("hidden");
        $(".fa-chevron-left").removeClass("hidden");
    });
});
