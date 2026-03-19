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
const btnDropdown = document.querySelector(".btn-open-dropdown");
const dropdown = document.querySelector(".dropdown");
const header = document.querySelector(".js-header");

function handleClick() {
  areaMenu.classList.toggle("active");
}

function openDropdownMenu() {
  dropdown.classList.toggle("active");
}

btnMobile.addEventListener("click", handleClick);
areaMenu.addEventListener("click", handleClick);
btnDropdown.addEventListener("click", openDropdownMenu);
dropdown.addEventListener("mouseleave", openDropdownMenu);

document.addEventListener("scroll", (e) => {
  if (scrollY > 80) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

AOS.init({
  duration: 1000,
  once: true,
});
