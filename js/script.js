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

    // Element In View function

    function isOnScreen(elem) {
        // if the element doesn't exist, abort
        if (elem.length == 0) {
            return;
        }
        var $window = jQuery(window)
        var viewport_top = $window.scrollTop()
        var viewport_height = $window.height()
        var viewport_bottom = viewport_top + viewport_height
        var $elem = jQuery(elem)
        var top = $elem.offset().top
        var height = $elem.height()
        var bottom = top + height

        return (bottom > viewport_top) && (top < viewport_bottom)
    }

    // Animation when element is in view

    window.addEventListener('scroll', function (e) {
        if (isOnScreen('#lfdesign')) {
            $("#lfdesign .flexcontainer").addClass("animated slower bounceInRight");
        }
        if (isOnScreen('#books')) {
            $("#books .flexcontainer").addClass("animated slower bounceInLeft");
        }
        if (isOnScreen('.srp-color')) {
            $(".srp-color .flexcontainer").addClass("animated slower bounceInRight");
        }
        if (isOnScreen('.nescol-color')) {
            $(".nescol-color .flexcontainer").addClass("animated slower bounceInLeft");
        }
        if (isOnScreen('.worldskills-color')) {
            $(".worldskills-color .flexcontainer").addClass("animated slower bounceInRight");
        }
        if (isOnScreen('.silvernote-color')) {
            $(".silvernote-color .flexcontainer").addClass("animated slower bounceInLeft");
        }
    });
});
