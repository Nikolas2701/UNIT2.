document.addEventListener('DOMContentLoaded', () => {
    const resurseSection = document.getElementById('monitorizare-resurse');
    const staticImages = document.getElementById('static-images');
    const slideshow = document.getElementById('slideshow');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
            dots[i].classList.toggle('active', i === index);
        });
        currentSlide = index;
    }
    showSlide(0);
	
    function startSlideshow() {
        slideInterval = setInterval(() => {
            showSlide((currentSlide + 1) % slides.length); 
        }, 3000); 
    }

    resurseSection.addEventListener('dblclick', () => {
        staticImages.style.display = 'none';
        
        slideshow.style.display = 'block';
        
        startSlideshow();
    });

});
