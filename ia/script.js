const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", function() {
  nav.style.display = nav.style.display === "block" ? "none" : "block";
});
