window.addEventListener("scroll", function () {
  if (window.scrollY / 1000 > 0.1) {
    $("header").addClass("shadow-custom");
    $("header").addClass("scrolled");
  } else {
    $("header").removeClass("shadow-custom");
    $("header").removeClass("scrolled");
  }
});

window.addEventListener("load", function () {
  if (window.scrollY / 1000 > 0.1) {
    $("header").addClass("shadow-custom");
    $("header").addClass("scrolled");
  } else {
    $("header").removeClass("shadow-custom");
    $("header").removeClass("scrolled");
  }
});
