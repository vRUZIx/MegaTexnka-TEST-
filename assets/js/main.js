var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      990: {
        slidesPerView: 6,
      },}
  });