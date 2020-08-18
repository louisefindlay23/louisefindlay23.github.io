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
        if (test1.style.display="block"){
            test1.style.display="none";
            test2.style.display="block";
            slide1.classList.remove("orange");
            slide2.classList.add("orange");
    });

        // Dots
       // document.getElementById("slide1").addEventListener('click', function (e) {
        //    document.querySelectorAll('.dots ').forEach(function (test) {
        //test.addEventListener('click', function (e) {
         //   this.classList.toggle('lightbox');
          //  $(".skewed").toggle();
       // });
    //});
          //  this.classlist.add("orange");
    //    });
    //document.querySelectorAll('.testimonal #[test]').forEach(function //(test) {
     //   test.addEventListener('click', function (e) {
         //   this.classList.toggle('lightbox');
           // $(".skewed").toggle();
       // });
   // });

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
