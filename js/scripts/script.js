const swiper = new Swiper(".depoyments", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    368: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 1.5,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

const btnMobile = document.querySelector(".btn-mobile");
const areaMenu = document.querySelector(".area-menu");

function handleClick() {
  areaMenu.classList.toggle("active");
}

btnMobile.addEventListener("click", handleClick);
areaMenu.addEventListener("click", handleClick);
