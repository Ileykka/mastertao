const main_swiper = new Swiper(".mainSwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



const deliverySlider = new Swiper('.delivery__slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: false,

    navigation: {
        nextEl: '.delivery-button-next',
        prevEl: '.delivery-button-prev',
    },

    pagination: {
        el: '.delivery-pagination',
        clickable: true,
    },

    breakpoints: {
        1395: {   
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1000: {    
            slidesPerView: 2,
            spaceBetween: 30,
        },

        0: {        
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
});



const servicesSlider = new Swiper('.services__slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: false,

    navigation: {
        nextEl: '.services-button-next',
        prevEl: '.services-button-prev',
    },

    pagination: {
        el: '.services-pagination',
        clickable: true,
    },

    breakpoints: {
        1395: {   
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1000: {  
            slidesPerView: 2,
            spaceBetween: 30,
        },
        0: {   
            slidesPerView: 1,
            spaceBetween: 20,
        },
    }
});





function nextStep(step) {
    const step1 = document.querySelector('.calculation__form');
    const step2 = document.querySelector('.calculation__form-second');
    const step3 = document.querySelector('.calculation__form-third');

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
    const step1 = document.querySelector('.calculation__form');
    const step2 = document.querySelector('.calculation__form-second');
    const step3 = document.querySelector('.calculation__form-third');

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





const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

document.querySelectorAll('.header__nav a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});
