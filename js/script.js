// JavaScript Document
"use strict";

$(document).ready(function () {

    // Testimonials

    // Testimonial Content
    const test1 = document.getElementById("test1");
    const test2 = document.getElementById("test2");
    const test3 = document.getElementById("test3");
    const test4 = document.getElementById("test4");

    // Testimonial Dots
    const slide1 = document.getElementById("slide1");
    const slide2 = document.getElementById("slide2");
    const slide3 = document.getElementById("slide3");
    const slide4 = document.getElementById("slide4");

    // Right Arrow
    document.getElementsByClassName("fa-chevron-right")[0].addEventListener('click', function (e) {
        if (test1.style.display === "block") {
            test1.style.display="none";
            test2.style.display="block";
            document.getElementsByClassName("fa-chevron-left")[0].classList.remove("hidden");
            slide1.classList.remove("orange");
            slide2.classList.add("orange");
        } else if (test2.style.display === "block") {
            test2.style.display="none";
            test3.style.display="block";
            slide2.classList.remove("orange");
            slide3.classList.add("orange");
        } else if (test3.style.display === "block") {
            test3.style.display="none";
            test4.style.display="block";
            slide3.classList.remove("orange");
            slide4.classList.add("orange");
            document.getElementsByClassName("fa-chevron-right")[0].classList.add("hidden");
        }
    });

    // Left Arrow
    document.getElementsByClassName("fa-chevron-left")[0].addEventListener('click', function (e) {
        if (test2.style.display === "block") {
            test2.style.display="none";
            test1.style.display="block";
            document.getElementsByClassName("fa-chevron-left")[0].classList.add("hidden");
            slide2.classList.remove("orange");
            slide1.classList.add("orange");
        } else if (test3.style.display === "block") {
            test3.style.display="none";
            test2.style.display="block";
            slide3.classList.remove("orange");
            slide2.classList.add("orange");
        } else if (test4.style.display === "block") {
            test4.style.display="none";
            test3.style.display="block";
            slide4.classList.remove("orange");
            slide3.classList.add("orange");
            document.getElementsByClassName("fa-chevron-right")[0].classList.remove("hidden");
        }
    });

    // Dots
    document.getElementById("slide1").addEventListener('click', function (e) {
        document.querySelectorAll('.fa-circle').forEach(function (dots) {
            dots.classList.remove("orange");
        });
        this.classList.add("orange");
        document.querySelectorAll('.test-content').forEach(function (test) {
            test.style.display = "none";
            test1.style.display = "block";
        });
    });
    document.getElementById("slide2").addEventListener('click', function (e) {
        document.querySelectorAll('.fa-circle').forEach(function (dots) {
            dots.classList.remove("orange");
        });
        this.classList.add("orange");
        document.querySelectorAll('.test-content').forEach(function (test) {
            test.style.display = "none";
            test2.style.display = "block";
        });
    });

    // Animation when element is in view
    $('#development').on('inview', function (event, isInView) {
        if (isInView) {
            $("#development .flexcontainer").addClass("bounceInRight");
        }
    });

    $('#rgu').on('inview', function (event, isInView) {
        if (isInView) {
            $("#rgu .flexcontainer").addClass("bounceInLeft");
        }
    });

    $('#worldskills-slide').on('inview', function (event, isInView) {
        if (isInView) {
            $("#worldskills-slide .flexcontainer").addClass("bounceInRight");
        }
    });

    $('#nescol-slide').on('inview', function (event, isInView) {
        if (isInView) {
            $("#nescol-slide .flexcontainer").addClass("bounceInLeft");
        }
    });

    $('#camperceilidh').on('inview', function (event, isInView) {
        if (isInView) {
            $("#camperceilidh .flexcontainer").addClass("slower bounceInLeft");
        }
    });

    $('#aurora').on('inview', function (event, isInView) {
        if (isInView) {
            $("#aurora .flexcontainer").addClass("slower bounceInLeft");
        }
    });

    $('#attendr').on('inview', function (event, isInView) {
        if (isInView) {
            $("#attendr .flexcontainer").addClass("slower bounceInRight");
        }
    });

    $('#nkyconsulting').on('inview', function (event, isInView) {
        if (isInView) {
            $("#nkyconsulting .flexcontainer").addClass("slower bounceInRight");
        }
    });

    // Lightbox
    var pictures = document.querySelectorAll('picture');

    pictures.forEach(function (pic) {
        pic.addEventListener('click', function (e) {
            this.classList.toggle('lightbox');
            $(".skewed").toggle();
        });
    });

    // Underline active links
    $("nav [href]").each(function () {
        if (this.href == window.location.href) {
            this.classList.add("active");
        }
    });
});
