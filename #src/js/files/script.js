import { Swiper, EffectFade, Navigation, Pagination, Scrollbar, Controller, Parallax, Mousewheel } from 'swiper'
Swiper.use([EffectFade, Navigation, Pagination, Scrollbar, Controller, Parallax, Mousewheel])

import { gsap, Power2 } from 'gsap'

import MicroModal from 'micromodal'

document.addEventListener('DOMContentLoaded', () => {

   //Modal
   MicroModal.init({
      openTrigger: 'data-micromodal-open',
      closeTrigger: 'data-micromodal-close',
      disableFocus: true,
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
   });

   //slider-image

   const swiperImg = new Swiper('.slider-img', {
      loop: false,
      speed: 2400,
      parallax: true,
      pagination: {
         el: '.slider-pagination-count .total',
         type: 'custom',
         renderCustom: function (swiper, current, total) {
            let totalRes = total >= 10 ? total : `0${total}`
            return totalRes
         }
      }
   })

   //slider-text

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

   //gear

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

   //slide change
   let curNum = document.querySelector('.slider-pagination-count .current'),
      pageCur = document.querySelector('.slider-pagination-current__num')

   swiperText.on('slideChange', function () {

      let ind = swiperText.realIndex + 1,
         indRes = ind >= 10 ? ind : `0${ind}`
      gsap.to(curNum, .2, {
         forse3D: true,
         y: -10,
         opacity: 0,
         ease: Power2.easeOut,
         onComplete: function () {
            gsap.to(curNum, .1, {
               forse3D: true,
               y: 10
            })
            curNum.innerHTML = indRes
            pageCur.innerHTML = indRes
         }

      })
      gsap.to(curNum, .2, {
         forse3D: true,
         y: 0,
         opacity: 1,
         ease: Power2.easeOut,
         delay: .3

      })
   })

})