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




// Извлечение первого кадра видео
const video1 = document.getElementById('video1');
const canvas1 = document.getElementById('canvas1');
const context1 = canvas1.getContext('2d');

video1.addEventListener('loadeddata', () => {
  video1.currentTime = 1; // Перемотка на первую секунду
});

video1.addEventListener('seeked', () => {
  context1.drawImage(video1, 0, 0, canvas1.width, canvas1.height);
  const posterDataUrl = canvas1.toDataURL('image/jpeg');
  video1.setAttribute('poster', posterDataUrl);
});



// Тёмные цвета
document.addEventListener("DOMContentLoaded", function() {
  const textBlocks = document.querySelectorAll('.visual__text-block');
  const colors = ['#343a40', '#495057', '#212529', '#6c757d', '#000000'];

  textBlocks.forEach(block => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    block.style.backgroundColor = randomColor;
  });
});


// светлые цвета
// document.addEventListener("DOMContentLoaded", function() {
//   const textBlocks = document.querySelectorAll('.visual__text-block');
//   const colors = ['#a8dadc', '#457b9d', '#1d3557', '#e63946', '#f1faee'];

//   textBlocks.forEach(block => {
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     block.style.backgroundColor = randomColor;
//   });
// });

  
