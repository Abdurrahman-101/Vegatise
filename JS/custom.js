document.getElementById("hamburger-1").onclick = function () {
  this.classList.toggle("is-active");
};

$(".clients-carousel").owlCarousel({
  autoplay: true,
  loop: true,
  responsive: {
    0: { items: 1 },
    500: { items: 2 },
    900: { items: 4 },
    1300: { items: 5 },
  },
});

$(".contact-carousel").owlCarousel({
  autoplay: true,
  loop: true,
  responsive: {
    0: { items: 1 },
    769: { items: 2 },
    1200: { items: 3 },
  },
});

$(".partner-carousel").owlCarousel({
  autoplay: true,
  loop: true,
  responsive: {
    0: { items: 1 },
    769: { items: 2 },
    1200: { items: 3 },
  },
});
