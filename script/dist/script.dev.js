"use strict";

var main_swiper = new Swiper(".mainSwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
var deliverySlider = new Swiper('.delivery__slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: false,
  navigation: {
    nextEl: '.delivery-button-next',
    prevEl: '.delivery-button-prev'
  },
  pagination: {
    el: '.delivery-pagination',
    clickable: true
  },
  breakpoints: {
    1395: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  }
});
var servicesSlider = new Swiper('.services__slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: false,
  navigation: {
    nextEl: '.services-button-next',
    prevEl: '.services-button-prev'
  },
  pagination: {
    el: '.services-pagination',
    clickable: true
  },
  breakpoints: {
    1395: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  }
});

function nextStep(step) {
  var step1 = document.querySelector('.calculation__form');
  var step2 = document.querySelector('.calculation__form-second');
  var step3 = document.querySelector('.calculation__form-third');

  if (step === 2) {
    step1.style.display = 'none';
    step2.style.display = 'flex';
    step3.style.display = 'none';
  }

  if (step === 3) {
    step1.style.display = 'none';
    step2.style.display = 'none';
    step3.style.display = 'flex';
  }
}

function prevStep(step) {
  var step1 = document.querySelector('.calculation__form');
  var step2 = document.querySelector('.calculation__form-second');
  var step3 = document.querySelector('.calculation__form-third');

  if (step === 1) {
    step1.style.display = 'flex';
    step2.style.display = 'none';
    step3.style.display = 'none';
  }

  if (step === 2) {
    step1.style.display = 'none';
    step2.style.display = 'flex';
    step3.style.display = 'none';
  }
}

var burger = document.querySelector('.header__burger');
var nav = document.querySelector('.header__nav');
burger.addEventListener('click', function () {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});
document.querySelectorAll('.header__nav a').forEach(function (link) {
  link.addEventListener('click', function () {
    burger.classList.remove('active');
    nav.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});