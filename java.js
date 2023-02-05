window.addEventListener("load", sidenVises);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

function sidenVises() {
  console.log("sidenVises");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

window.addEventListener("scroll", function () {
  console.log("scroll");
  var images = document.querySelectorAll(".reveal-on-scroll");
  var windowHeight = window.innerHeight;

  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    var imageTop = image.getBoundingClientRect().top;

    if (imageTop < windowHeight) {
      image.classList.add("revealed");
    }
  }
});
