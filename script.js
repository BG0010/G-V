const swiper = new Swiper('.swiper-container', {
  loop: true,
  spaceBetween: 20, // Espaçamento entre os slides (20px)
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
