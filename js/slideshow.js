/* Minimal fade slideshow replacing Weebly's wSlideshow (autoplay 5s, dots nav). */
(function () {
  function setup(box) {
    var imgs = box.querySelectorAll('img');
    if (!imgs.length) return;
    if (imgs.length === 1) { imgs[0].classList.add('on'); return; }
    var i = 0, timer;
    var dots = document.createElement('div');
    dots.className = 'g-dots';
    Array.prototype.forEach.call(imgs, function (_, k) {
      var d = document.createElement('i');
      d.addEventListener('click', function () { show(k); restart(); });
      dots.appendChild(d);
    });
    box.appendChild(dots);
    // keep the box height stable: let the current image define height via position:relative
    function show(k) {
      i = (k + imgs.length) % imgs.length;
      Array.prototype.forEach.call(imgs, function (im, n) { im.classList.toggle('on', n === i); });
      Array.prototype.forEach.call(dots.children, function (d, n) { d.classList.toggle('on', n === i); });
    }
    function restart() { clearInterval(timer); timer = setInterval(function () { show(i + 1); }, 5000); }
    show(0); restart();
    box.addEventListener('mouseenter', function () { clearInterval(timer); });
    box.addEventListener('mouseleave', restart);
  }
  function init() { Array.prototype.forEach.call(document.querySelectorAll('.g-slideshow'), setup); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
