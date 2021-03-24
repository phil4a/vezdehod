
document.addEventListener('DOMContentLoaded', () => {

   const swiperImg = new Swiper('.slider-img', {
      loop: false,
      speed: 2400,
      parallax: true,

   })

   const swiperText = new Swiper('.slider-text', {
      loop: false,
      speed: 2400,
      mousewheel: {
         invert: false,
      }
   })

   swiperImg.controller.control = swiperText
   swiperText.controller.control = swiperImg

})