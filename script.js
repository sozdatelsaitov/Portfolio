


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







const caseContainer = document.getElementById('case-container'); 
const caseScrollLeftButton = document.getElementById('case__scroll-left'); 
const caseScrollRightButton = document.getElementById('case__scroll-right'); 
const caseScrollStep = 200; // Шаг прокрутки в пикселях 
const caseScrollInterval = 2000; // Интервал прокрутки в миллисекундах 
// // Прокрутка при клике 
caseScrollLeftButton.addEventListener('click', () => { caseContainer.scrollBy({ top: 0, left: -caseScrollStep, behavior: 'smooth' }); }); 
caseScrollRightButton.addEventListener('click', () => { caseContainer.scrollBy({ top: 0, left: caseScrollStep, behavior: 'smooth' }); }); // Автоматическая прокрутка 
let autoScroll = setInterval(() => { caseContainer.scrollBy({ top: 0, left: caseScrollStep, behavior: 'smooth' }); // Останавливаем прокрутку, когда достигаем конца 
if (caseContainer.scrollLeft + caseContainer.clientWidth >= caseContainer.scrollWidth) 
  { caseContainer.scrollTo({ left: 0, behavior: 'smooth' }); 
} }, caseScrollInterval); // Пауза прокрутки при наведении курсора 
caseContainer.addEventListener('mouseenter', () => { clearInterval(autoScroll); }); 
caseContainer.addEventListener('mouseleave', () => { autoScroll = setInterval(() => { caseContainer.scrollBy({ top: 0, left: caseScrollStep, behavior: 'smooth' }); // Останавливаем прокрутку, когда достигаем конца 
if (caseContainer.scrollLeft + caseContainer.clientWidth >= caseContainer.scrollWidth) { caseContainer.scrollTo({ left: 0, behavior: 'smooth' }); 
} }, caseScrollInterval); 
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




// Тёмные цвета
// document.addEventListener("DOMContentLoaded", function() {
//   const textBlocks = document.querySelectorAll('.visual__text-block');
//   const colors = ['#343a40', '#495057', '#212529', '#6c757d', '#000000'];

//   textBlocks.forEach(block => {
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     block.style.backgroundColor = randomColor;
//   });
// });


// светлые цвета
document.addEventListener("DOMContentLoaded", function() {
  const textBlocks = document.querySelectorAll('.visual__text-block');
  const colors = ['#a8dadc', '#457b9d', '#1d3557', '#e63946', '#f1faee'];

  textBlocks.forEach(block => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    block.style.backgroundColor = randomColor;
  });
});

  
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('worksBtn').addEventListener('click', function() {
      var content = document.getElementById('worksContent');
      content.classList.toggle('open');
  });
});