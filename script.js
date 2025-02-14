// const header = document.querySelector(".header");
// const burger = header.querySelector(".burger-menu");
// const burgerIcon = header.querySelector(".burger-menu_icon");

// burger.addEventListener("click", function(){
//   header.classList.toggle("header--mobile");

//   if(header.classList.contains("header--mobile")){
//     burgerIcon.src = "images/close.svg";
//   } else {
//     burgerIcon.src = "images/burger.svg";
//   }
// });


document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const burger = document.querySelector(".burger-menu");
  const burgerIcon = document.querySelector(".burger-menu_icon");
  
  burger.addEventListener("click", () => {
    const isOpen = header.classList.toggle("header--mobile");
    burgerIcon.src = isOpen ? "images/close.svg" : "images/burger.svg";
    
    // Блокируем прокрутку, когда меню открыто
    // document.body.style.overflow = isOpen ? "hidden" : "auto";
  });
});







const container = document.getElementById('video-container');
const scrollLeftButton = document.getElementById('scroll-left');
const scrollRightButton = document.getElementById('scroll-right');

const scrollStep = 360; // Шаг прокрутки в пикселях

scrollLeftButton.addEventListener('click', () => {
  container.scrollBy({
    top: 0,
    left: -scrollStep,
    behavior: 'smooth'
  });
});

scrollRightButton.addEventListener('click', () => {
  container.scrollBy({
    top: 0,
    left: scrollStep,
    behavior: 'smooth'
  });
});
