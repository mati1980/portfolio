const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", function () {
  menu.classList.toggle("menu-open");
});
