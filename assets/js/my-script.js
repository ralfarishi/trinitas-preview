document.getElementById("btn-contact").addEventListener("click", function () {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Sorry you can not use this feature yet",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
});

$("#myDiv").venomButton({
  phone: "+6282111616226",
  chatMessage: "Halo 👋<br><br>Ada yang bisa saya bantu?",
  showPopup: false,
  position: "right",
  nameClient: "PT. Trinitas Prima Sejahtera",
  headerTitle: "Business Account",
  avatar: "./assets/avatar.png",
  message: "Apakah gudang x masih tersedia?",
});

/**
 * Initiate glightbox
 */
const glightbox = GLightbox({
  selector: ".glightbox",
});

/**
 * Init swiper slider with 1 slide at once in desktop view
 */
new Swiper(".slides-1", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/**
 * Init swiper slider with 3 slides at once in desktop view
 */
new Swiper(".slides-3", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },

    1200: {
      slidesPerView: 3,
    },
  },
});

/**
 * Gallery Slider
 */
new Swiper(".gallery-slider", {
  speed: 400,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});
