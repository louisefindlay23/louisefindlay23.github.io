// JavaScript Document
"use strict";

$(document).ready(function () {

    // Hide Elements
    $("#test2, #test3, #test4, #test5").hide();
    $(".fa-chevron-left").addClass("hidden");

    // Testimonial Controls
    $(".slide1").click(function () {
        $("#test2, #test3, #test4, #test5").hide();
        $("#test1").show();
        $(".dots .slide2, .dots .slide3, .dots .slide4, .dots .slide5").removeClass("orange");
        $(".dots .slide1").addClass("orange");
        $(".fa-chevron-left").addClass("hidden");
        $(".fa-chevron-right").removeClass("hidden");
    });

    $(".slide2").click(function () {
        $("#test1, #test3, #test4, #test5").hide();
        $("#test2").show();
        $(".dots .slide1, .dots .slide3, .dots .slide4, .dots .slide5").removeClass("orange");
        $(".dots .slide2").addClass("orange");
        $(".fa-chevron-left, .fa-chevron-right").removeClass("hidden");
    });

    $(".slide3").click(function () {
        $("#test1, #test2, #test4, #test5").hide();
        $("#test3").show();
        $(".dots .slide1, .dots .slide2, .dots .slide4, .dots .slide5").removeClass("orange");
        $(".dots .slide3").addClass("orange");
        $(".fa-chevron-left, .fa-chevron-right").removeClass("hidden");
    });

    $(".slide4").click(function () {
        $("#test1, #test2, #test3, #test5").hide();
        $("#test4").show();
        $(".dots .slide1, .dots .slide2, .dots .slide3, .dots .slide5").removeClass("orange");
        $(".dots .slide4").addClass("orange");
        $(".fa-chevron-left, .fa-chevron-right").removeClass("hidden");
    });

    $(".slide5").click(function () {
        $("#test1, #test2, #test3, #test4").hide();
        $("#test5").show();
        $(".dots .slide1, .dots .slide2, .dots .slide3, .dots .slide4").removeClass("orange");
        $(".dots .slide5").addClass("orange");
        $(".fa-chevron-left, .fa-chevron-right").removeClass("hidden");
    });

    // Animation when element is in view
    $('#development').on('inview', function (event, isInView) {
        if (isInView) {
            $("#development .flexcontainer").addClass("bounceInLeft");
        }
    });

    $('#design').on('inview', function (event, isInView) {
        if (isInView) {
            $("#design .flexcontainer").addClass("bounceInRight");
        }
    });

    $('#nescol-slide').on('inview', function (event, isInView) {
        if (isInView) {
            $("#nescol-slide .flexcontainer").addClass("bounceInLeft");
        }
    });

    $('#worldskills-slide').on('inview', function (event, isInView) {
        if (isInView) {
            $("#worldskills-slide .flexcontainer").addClass("bounceInRight");
        }
    });

    $('#silvernote-slide').on('inview', function (event, isInView) {
        if (isInView) {
            $("#silvernote-slide .flexcontainer").addClass(" slower bounceInRight");
        }
    });

    $('#bbc-slide').on('inview', function (event, isInView) {
        if (isInView) {
            $("#bbc-slide .flexcontainer").addClass(" slower bounceInLeft");
        }
    });

    $('#julie-slide').on('inview', function (event, isInView) {
        if (isInView) {
            $("#julie-slide .flexcontainer").addClass(" slower bounceInLeft");
        }
    });

    $('#stitchfairie').on('inview', function (event, isInView) {
        if (isInView) {
            $("#stitchfairie .flexcontainer").addClass(" slower bounceInLeft");
        }
    });

    $('#needs-offers').on('inview', function (event, isInView) {
        if (isInView) {
            $("#needs-offers .flexcontainer").addClass(" slower bounceInLeft");
        }
    });

    $('#aurora').on('inview', function (event, isInView) {
        if (isInView) {
            $("#aurora .flexcontainer").addClass(" slower bounceInLeft");
        }
    });

    // Lightbox
    var pictures = document.querySelectorAll('picture');

    pictures.forEach(function (pic) {
        pic.addEventListener('click', function (e) {
            this.classList.toggle('lightbox');
        });
    });

    // Underline

    $("nav [href]").each(function () {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
});
