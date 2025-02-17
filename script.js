


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



const planSlider = document.getElementById('planSlider');
const pricingTable = document.getElementById('pricingTable');

const basicLabel = document.getElementById('basicLabel');
const standardLabel = document.getElementById('standardLabel');
const premiumLabel = document.getElementById('premiumLabel');

const plans = [
  {
    name: 'Базовий',
    services: [
      '- Створення контенту',
      '- 2 пости в тиждень',
      '- Аналіз сторінки'
    ],
    price: '$300'
  },
  {
    name: 'Стандартний',
    services: [
      '- Створення контенту',
      '- 3 пости в тиждень',
      '- Аналіз сторінки',
      '- Відповіді на коментарі'
    ],
    price: '$500'
  },
  {
    name: 'Преміум',
    services: [
      '- Створення контенту',
      '- Щоденні пости',
      '- Аналіз сторінки',
      '- Відповіді на коментарі',
      '- Запуск рекламних кампаній'
    ],
    price: '$800'
  }
];

function updateSlider() {
  const plan = plans[planSlider.value];
  pricingTable.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Тарифний План</th>
          <th>Послуги</th>
          <th>Ціна (на місяць)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${plan.name}</td>
          <td>
            <ul>
              ${plan.services.map(service => `<li>${service}</li>`).join('')}
            </ul>
          </td>
          <td>${plan.price}</td>
        </tr>
      </tbody>
    </table>
  `;

  // Сброс всех классов активности
  basicLabel.classList.remove('active');
  standardLabel.classList.remove('active');
  premiumLabel.classList.remove('active');

  // Установление класса активности на основе значения ползунка
  if (planSlider.value == 0) {
    basicLabel.classList.add('active');
  } else if (planSlider.value == 1) {
    standardLabel.classList.add('active');
  } else if (planSlider.value == 2) {
    premiumLabel.classList.add('active');
  }
}

planSlider.addEventListener('input', updateSlider);

// Инициализация начального состояния
updateSlider();
