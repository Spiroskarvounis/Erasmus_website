const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

function updateCarousel() {
    const slideWidth = slides[0].offsetWidth;
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);

// Optional: Auto-play every 4 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}, 4000);

// Initial update
updateCarousel();

// Only sparkle effect remains, no emoji popup logic
function addSparkleEffect() {
    document.querySelectorAll('.outputs-list li').forEach((li) => {
        li.addEventListener('mouseenter', () => {
            li.classList.add('sparkle');
        });
        li.addEventListener('mouseleave', () => {
            li.classList.remove('sparkle');
        });
    });
}
document.addEventListener('DOMContentLoaded', addSparkleEffect);
