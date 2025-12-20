  const swiper = new Swiper('.mySwiper', {
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: false,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });