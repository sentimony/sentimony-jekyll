var images = document.querySelectorAll("img[data-retina]");

if (window.devicePixelRatio == 2) {
  Array.prototype.forEach.call(images, function(el, i) {
    var src = el.getAttribute("data-retina");

    el.setAttribute("src", src);
  });
} else {
  Array.prototype.forEach.call(images, function(el, i) {
    var src = el.getAttribute("data-src");

    el.setAttribute("src", src);
  });
}
