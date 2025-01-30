const navList = document.getElementById("nav-list");
const navMenu = document.getElementById("nav-menu");

navList.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
});
