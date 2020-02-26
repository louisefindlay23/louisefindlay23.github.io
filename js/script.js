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

    // Animation when element is in view

    $('#lfdesign').on('inview', function (event, isInView) {
        if (isInView) {
            $("#lfdesign .flexcontainer").addClass("animated slower bounceInRight");
        }
    });

    $('#books').on('inview', function (event, isInView) {
        if (isInView) {
            $("#books .flexcontainer").addClass("animated slower bounceInLeft");
        }
    });

    $('#srp-slide').on('inview', function (event, isInView) {
        if (isInView) {
            $("#srp-slide .flexcontainer").addClass("animated slower bounceInRight");
        }
    });

    $('#nescol-slide').on('inview', function (event, isInView) {
        if (isInView) {
            $(".nescol-color .flexcontainer").addClass("animated slower bounceInLeft");
        }
    });

    $('#worldskills-slide').on('inview', function (event, isInView) {
        if (isInView) {
            $(".worldskills-color .flexcontainer").addClass("animated slower bounceInRight");
        }
    });

    $('.silvernote-color').on('inview', function (event, isInView) {
        if (isInView) {
            $(".silvernote-color .flexcontainer").addClass("animated slower bounceInRight");
        }
    });

    $('#bbc-slide').on('inview', function (event, isInView) {
        if (isInView) {
            $("#bbc-slide .flexcontainer").addClass("animated slower bounceInLeft");
        }
    });

    $('#surface-slide').on('inview', function (event, isInView) {
        if (isInView) {
            $("#surface-slide .flexcontainer").addClass("animated slower bounceInRight");
        }
    });

    $('#arteriale-slide').on('inview', function (event, isInView) {
        if (isInView) {
            $("#arteriale-slide .flexcontainer").addClass("animated slower bounceInLeft");
        }
    });

    $('#dreamless-slide').on('inview', function (event, isInView) {
        if (isInView) {
            $("#dreamless-slide .flexcontainer").addClass("animated slower bounceInRight");
        }
    });

    $('#dragon-slide').on('inview', function (event, isInView) {
        if (isInView) {
            $("#dragon-slide .flexcontainer").addClass("animated slower bounceInLeft");
        }
    });

    $('#julie-slide').on('inview', function (event, isInView) {
        if (isInView) {
            $("#julie-slide .flexcontainer").addClass("animated slower bounceInLeft");
        }
    });
});
