var scrollToTopBtn = document.getElementById("scroll-to-top-btn");

// Функция, которая выполняется при прокрутке страницы
function toggleScrollButton() {
  var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
  scrollToTopBtn.style.display = currentPosition > 650 ? "block" : "none";
}


// Добавляем обработчик события прокрутки
window.addEventListener("scroll", toggleScrollButton);

// Добавляем обработчик события клика на кнопку прокрутки вверх
scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});












var animateElements = document.querySelectorAll('.animate-on-scroll');

function animateOnScroll() {
  animateElements.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('animate');
    }
  });
}

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth
  );
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();







// // Ожидаем события загрузки страницы
// window.addEventListener('load', function() {
//     // Получаем элемент <body>
//     var body = document.querySelector('body');
//     // Добавляем класс "loaded" к <body> после небольшой задержки
//     setTimeout(function() {
//       body.classList.add('loaded');
//     }, 1000); // Здесь можно указать время задержки в миллисекундах
//   });
  




  window.addEventListener("load", function() {
    const preloader = document.querySelector(".preloader");
    preloader.style.display = "none";
  });
  