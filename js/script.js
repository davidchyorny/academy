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

