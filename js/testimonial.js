var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {

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
            if (document.getElementsByClassName("project")[0]) {
            document.getElementsByClassName("fa-chevron-right")[0].classList.add("hidden");
        }
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
            document.getElementsByClassName("fa-chevron-right")[0].classList.remove("hidden");
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
    document.getElementById("slide3").addEventListener('click', function (e) {
        document.querySelectorAll('.fa-circle').forEach(function (dots) {
            dots.classList.remove("orange");
        });
        this.classList.add("orange");
        document.querySelectorAll('.test-content').forEach(function (test) {
            test.style.display = "none";
            test3.style.display = "block";
        });
        if (document.getElementsByClassName("project")[0]) {
            document.getElementsByClassName("fa-chevron-right")[0].classList.add("hidden");
        }
    });

    if (document.getElementById("slide4")) {
        document.getElementById("slide4").addEventListener('click', function (e) {
        document.querySelectorAll('.fa-circle').forEach(function (dots) {
            dots.classList.remove("orange");
        });
        this.classList.add("orange");
        document.querySelectorAll('.test-content').forEach(function (test) {
            test.style.display = "none";
            test4.style.display = "block";
        });
    });
    }
});
