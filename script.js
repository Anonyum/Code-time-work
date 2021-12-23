const send = document.querySelector(".send1");
const send2 = document.querySelector(".send2");

const swiper3 = new Swiper(".slider-3", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  navigation: {
    nextEl: send,
    prevEl: send2,
  },
  breakpoints: {
    411: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

// slider js only
const topSlideImagePath = "img/topSlide/";
let nkanunner = [
  "ПРОВЕДЁМ ИНТЕРВЬЮ",
  "СОСТАВИМ ПЛАН",
  "СОБЕРЁМ КОМАНДУ",
  "РАЗРАБОТАЕМ ПРОДУКТ",
  "УЛУЧШИМ МЕТРИКИ",
];
let i = 0;

function start() {
  document.getElementById("nkar").src = topSlideImagePath + "0.jpg";
  document.getElementById("a").value = nkanunner[0];
}

function next() {
  i++;
  if (i === 4) {
    i = 0;
  }
  document.getElementById("nkar").src = topSlideImagePath + i + ".jpg";
  document.getElementById("a").value = nkanunner[i];
}

function prev() {
  i--;
  if (i === -1) {
    i = 4;
  }
  document.getElementById("nkar").src = topSlideImagePath + i + ".jpg";
  document.getElementById("a").value = nkanunner[i];
}

//  slider  3
const bottomSlideImagePath = "img/bottomSlide/";
let orderImg = [
  "SAAS-ПЛАТФОРМЫ",
  "М.ПРИЛОЖЕНИЕ",
  "IoT Приложения",
  "AR/VR",
  "MVP",
  "CRM/ERP",
  "BLOCKCHAIN",
  "MVP",
];
let j = 0;

function startone() {
  document.getElementById("orderimg").src = bottomSlideImagePath + "0.png";
  document.getElementById("b").value = orderImg[0];
}

function next1() {
  j++;
  if (j === 7) {
    j = 0;
  }
  document.getElementById("orderimg").src = bottomSlideImagePath + j + ".png";
  document.getElementById("b").value = orderImg[j];
}

function prev1() {
  j--;
  if (j === -1) {
    j = 7;
  }
  document.getElementById("orderimg").src = bottomSlideImagePath + j + ".png";
  document.getElementById("b").value = orderImg[j];
}
