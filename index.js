let openMenu = document.querySelector(".mobile");
let navBar = document.querySelector("#navbar");
let closeMenu = document.querySelector(".close");

openMenu.addEventListener("click", function() {
    navBar.classList.add("active");
})

closeMenu.addEventListener("click", function() {
    navBar.classList.remove("active");
})