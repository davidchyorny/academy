var scrollToTopBtn = document.getElementById("scroll-to-top-btn");

function toggleScrollButton() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    scrollToTopBtn.style.display = currentPosition > 500 ? "block" : "none";
}

window.addEventListener("scroll", toggleScrollButton);
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});





