var scrollToTopBtn = document.getElementById("scroll-to-top-btn");

function toggleScrollButton() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentPosition > 0) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

window.addEventListener("scroll", toggleScrollButton);
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Проверка положения прокрутки страницы при загрузке
window.addEventListener("load", toggleScrollButton);
