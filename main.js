var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

$(document).ready(function () {
  $("#main__slider").owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1180: {
        items: 8,
      },
    },
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left fa-2x " aria-hidden="true"></i>',
      '<i class="fa fa-angle-right fa-2x " aria-hidden="true"></i>',
    ],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1180: {
        items: 1,
      },
    },
  });
});
