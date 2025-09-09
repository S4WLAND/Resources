
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const descriptions = document.querySelectorAll('.description-content');
const sliderTrack = document.getElementById('sliderTrack');
const progressBar = document.getElementById('progressBar');
const totalSlides = slides.length;
let autoPlayInterval;
let progressInterval;

function updateSlider() {
    // Mover el slider
    sliderTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    
    // Actualizar dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
    
    // Actualizar descripciones con animación
    descriptions.forEach((desc, index) => {
        if (index === currentSlideIndex) {
            setTimeout(() => {
                desc.classList.add('active');
            }, 300);
        } else {
            desc.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    updateSlider();
    resetAutoPlay();
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
    resetAutoPlay();
}

function currentSlide(n) {
    currentSlideIndex = n - 1;
    updateSlider();
    resetAutoPlay();
}

function startAutoPlay() {
    let progress = 0;
    const duration = 5000; // 5 segundos
    
    progressInterval = setInterval(() => {
        progress += 20;
        progressBar.style.width = `${(progress / duration) * 100}%`;
        
        if (progress >= duration) {
            progress = 0;
            progressBar.style.width = '0%';
        }
    }, 20);
    
    autoPlayInterval = setInterval(nextSlide, duration);
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    clearInterval(progressInterval);
    progressBar.style.width = '0%';
    startAutoPlay();
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
    clearInterval(progressInterval);
}

// Event listeners
document.querySelector('.slider').addEventListener('mouseenter', stopAutoPlay);
document.querySelector('.slider').addEventListener('mouseleave', startAutoPlay);

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// Touch/swipe support
let startX = 0;
let endX = 0;

sliderTrack.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

sliderTrack.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

sliderTrack.addEventListener('touchend', () => {
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
});

// Inicializar
updateSlider();
startAutoPlay();