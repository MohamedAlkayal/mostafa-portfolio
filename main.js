// Header scroll styling
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.scrollY / 1000 > 0.1) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

window.addEventListener("load", function () {
  var header = document.querySelector("header");
  if (window.scrollY / 1000 > 0.1) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
