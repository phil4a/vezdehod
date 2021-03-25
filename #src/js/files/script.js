import { Swiper, EffectFade, Navigation, Pagination, Scrollbar, Controller, Parallax, Mousewheel } from 'swiper'
Swiper.use([EffectFade, Navigation, Pagination, Scrollbar, Controller, Parallax, Mousewheel])

import { gsap, Power2 } from 'gsap'

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
      },
      pagination: {
         el: '.swiper-pagination',
         clickable: true
      },
      scrollbar: {
         el: ".swiper-scrollbar",
         draggable: true,
      },
      navigation: {
         prevEl: '.swiper-button-prev',
         nextEl: '.swiper-button-next',
      }

   })

   swiperImg.controller.control = swiperText
   swiperText.controller.control = swiperImg

   let gear = document.querySelector('.slider-gear')
   swiperText.on('slideNextTransitionStart', function () {
      gsap.to(gear, 2.8, {
         rotation: '+=40',
         ease: Power2.easeOut
      })
   })

   swiperText.on('slidePrevTransitionStart', function () {
      gsap.to(gear, 2.8, {
         rotation: '-=40',
         ease: Power2.easeOut
      })
   })

})