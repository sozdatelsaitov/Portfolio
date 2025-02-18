


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



const videoContainer = document.getElementById('video-container');
const photoContainer = document.getElementById('photo-container');
const scrollLeftButton = document.getElementById('scroll-left');
const scrollRightButton = document.getElementById('scroll-right');
const scrollLeftPhotoButton = document.getElementById('scroll-left-photo');
const scrollRightPhotoButton = document.getElementById('scroll-right-photo');

const scrollStep = 360; // Шаг прокрутки в пикселях
const scrollStepBig = 1065; // Шаг прокрутки в пикселях

scrollLeftButton.addEventListener('click', () => {
  videoContainer.scrollBy({
    top: 0,
    left: -scrollStep,
    behavior: 'smooth'
  });
});

scrollRightButton.addEventListener('click', () => {
  videoContainer.scrollBy({
    top: 0,
    left: scrollStep,
    behavior: 'smooth'
  });
});

scrollLeftPhotoButton.addEventListener('click', () => {
  photoContainer.scrollBy({
    top: 0,
    left: -scrollStepBig,
    behavior: 'smooth'
  });
});

scrollRightPhotoButton.addEventListener('click', () => {
  photoContainer.scrollBy({
    top: 0,
    left: scrollStepBig,
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


document.addEventListener("DOMContentLoaded", function() {
  const textBlocks = document.querySelectorAll('.visual__text-block');
  const colors = [
    '#FF5733', '#3498DB', '#E63946', '#F1FAEE', '#A8DADC', 
    '#1D3557', '#F4A261', '#2A9D8F', '#264653', '#e76f51',
    '#81b29a', '#f2cc8f', '#3d405b', '#e07a5f', '#6a4c93',
    '#b2d3c2', '#ffcbf2', '#bde0fe', '#a2d2ff'
  ];

  textBlocks.forEach(block => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    block.style.backgroundColor = randomColor;
    block.style.color = '#959595';
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







let images = ['images/photo for Mood Bord/new/z1.jpg', 'images/photo for Mood Bord/new/z2.jpg', 'images/photo for Mood Bord/new/z3.jpg', 'images/photo for Mood Bord/new/z4.jpg', 'images/photo for Mood Bord/new/z6.jpg', 'images/photo for Mood Bord/new/z7.jpg', 'images/photo for Mood Bord/new/z8.jpg', 'images/photo for Mood Bord/new/z9.jpg', 'images/photo for Mood Bord/new/z10.jpg', 'images/photo for Mood Bord/new/z11.jpg', 'images/photo for Mood Bord/new/z12.jpg', 'images/photo for Mood Bord/new/z13.jpg'];
let usedImages = [];
let texts = ['#Енергія', '#Натхнення', '#ВашВибір', '#Україна', '#Мода', '#Перемога', '#Сила', '#Краса', '#Гармонія', '#Надія', '#Мрія', '#Майбутнє', '#Розвиток', '#Творчість', '#Свобода'];
let usedTexts = [];

function randomElement(arr, usedArr) {
    if (arr.length === 0) {
        [arr, usedArr] = [usedArr, arr]; // Swap arrays when all elements are used
    }
    const index = Math.floor(Math.random() * arr.length);
    const element = arr.splice(index, 1)[0];
    usedArr.push(element);
    return element;
}

function fadeAndUpdate(element, type) {
    element.style.opacity = 0;
    setTimeout(() => {
        updateCellContent(element, type);
        element.style.opacity = 1;
        element.classList.add('fade');
    }, 500); // Пауза перед заменой контента
}

function updateCellContent(element, type) {
    const classes = element.className.replace('fade', '').trim();
    if (type === 'IMG') {
        element.src = randomElement(images, usedImages);
    } else {
        element.innerHTML = randomElement(texts, usedTexts);
    }
    element.className = `${classes} fade`;
}

function updateRandomCell() {
    const wrapper = document.getElementById('visualWrapper');
    const cells = Array.from(wrapper.children);
    const imageCells = cells.filter(cell => cell.tagName === 'IMG');
    const textCells = cells.filter(cell => cell.classList.contains('visual__text-block'));

    if (Math.random() > 0.5 && imageCells.length > 0 && images.length > 0) {
        const randomImageCell = imageCells[Math.floor(Math.random() * imageCells.length)];
        fadeAndUpdate(randomImageCell, 'IMG');
    } else if (textCells.length > 0 && texts.length > 0) {
        const randomTextCell = textCells[Math.floor(Math.random() * textCells.length)];
        fadeAndUpdate(randomTextCell, 'TEXT');
    }
}

function getRandomInterval() {
    return Math.floor(Math.random() * (5000 - 2000 +1)) + 2000;
}

function startRandomUpdates() {
    setTimeout(() => {
        updateRandomCell();
        startRandomUpdates();
    }, getRandomInterval());
}

startRandomUpdates();


