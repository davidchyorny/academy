document.getElementById("scroll-btn").addEventListener("click", function() {
  smoothScrollTo("target-block");
});

document.getElementById("tel-btn").addEventListener("click", function() {
  smoothScrollTo("tel-block");
});

function smoothScrollTo(targetId) {
  var targetBlock = document.getElementById(targetId);
  var targetPosition = targetBlock.getBoundingClientRect().top;
  var startPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  var distance = targetPosition - startPosition;
  var duration = 1000; // Длительность прокрутки в миллисекундах
  var start = null;

  function scrollStep(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    var easing = easeInOutQuad(progress, startPosition, distance, duration);
    window.scrollTo(0, easing);
    if (progress < duration) requestAnimationFrame(scrollStep);
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(scrollStep);
}
