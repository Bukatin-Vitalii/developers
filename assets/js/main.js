/* MOB MENU */

let menuBtn = document.querySelector('.mobmenu-btn');
let menu = document.querySelector('.mobmenu');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})


/*SERVICES SPOILERS*/
const services = document.querySelectorAll(".service");
    services.forEach(service => {
        service.addEventListener("click", () => {
            service.classList.toggle("active");
        })
    })


/*SHOPS SLIDER*/
const shops = new Swiper('.shops-slider', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 25,
  simulateTouch: false,
  loop: true,
  // Navigation arrows
  navigation: {
      nextEl: '.shops-nav__btn_prev',
      prevEl: '.shops-nav__btn_next',
    },
  // Responsive breakpoints
  breakpoints: {  
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 33,
    }
  }
})

/*STAGES SLIDER*/
const stages = new Swiper('.stage-slider', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.nav-buttons__next',
        prevEl: '.nav-buttons__prev',
      },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 25
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 25
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 25
      },  
      // when window width is >= 1200px
      1200: {
        slidesPerView: 2,
        spaceBetween: 25
      }
    }
})

