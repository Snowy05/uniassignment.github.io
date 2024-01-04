// JavaScript for the looped and smaller gallery

document.addEventListener('DOMContentLoaded', function () {
    var gallerySlide = document.getElementById('gallerySlide');
    var cloneImages = gallerySlide.cloneNode(true);
    gallerySlide.appendChild(cloneImages);
    var totalWidth = gallerySlide.offsetWidth;
    var animationDuration = totalWidth / 100 + 's';
    gallerySlide.style.animationDuration = animationDuration;
});

