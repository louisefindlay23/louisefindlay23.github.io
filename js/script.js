// JavaScript Document
"use strict";

var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {

    // Lightbox
    var pictures = document.querySelectorAll('picture');
    pictures.forEach(function (pic) {
        pic.addEventListener('click', function (e) {
            this.classList.toggle('lightbox');
            document.querySelectorAll('.skewed').forEach(function (skew) {
                skew.classList.toggle("skewed");
            });
        });
    });

    // Underline active links
    document.querySelectorAll('a').forEach(function (links) {
        if (links.getAttribute("href") === window.location.pathname){
            links.classList.add("active");
        }
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
});
