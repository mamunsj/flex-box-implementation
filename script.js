const dot = document.querySelector(".dot");
let mobMenu = document.querySelector(".nav-menu-mobile");
mobMenu.style.disply = "none";
dot.addEventListener("click", function () {
  mobMenu.classList.toggle("d-block");
  console.log(49);
});
