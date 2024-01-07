window.addEventListener("scroll", function () {
  if (window.scrollY / 1000 > 0.1) {
    $("header").addClass("scrolled");
  } else {
    $("header").removeClass("scrolled");
  }
});

window.addEventListener("load", function () {
  if (window.scrollY / 1000 > 0.1) {
    $("header").addClass("scrolled");
  } else {
    $("header").removeClass("scrolled");
  }
});
