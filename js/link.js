// Active Link JS
"use strict";

var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {

    // Underline active links
    document.querySelectorAll('a').forEach(function (links) {
        if (links.getAttribute("href") === window.location.pathname){
            links.classList.add("active");
        }
    });
});
