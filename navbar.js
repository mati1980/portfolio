const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");
const matilde = document.querySelector();

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
if (navMenu.classList.contains("active")) {
  console.log("navMenu er aktiv");
  matilde.classList.add("hide");
}
