// Project Page Specific Script
document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && e.target !== menuBtn) {
                menu.classList.remove('active');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            if (menu) {
                menu.classList.remove('active');
            }
            
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.content-block, .video-feature, .image-gallery, .testimonial');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            
            // Check if element is in viewport
            if(position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add('visible');
            }
        });
    };

    // Add visible class to elements as page loads
    animateOnScroll();
    
    // Add event listener for scroll
    window.addEventListener('scroll', animateOnScroll);

    // Gallery lightbox effect
    const createLightbox = () => {
        const gallery = document.querySelector('.gallery-grid');
        if (!gallery) return;

        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        document.body.appendChild(lightbox);

        const lightboxImg = document.createElement('img');
        lightbox.appendChild(lightboxImg);

        const galleryImages = document.querySelectorAll('.gallery-item img');
        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                lightbox.classList.add('active');
                lightboxImg.src = this.src;
            });
        });

        lightbox.addEventListener('click', function() {
            this.classList.remove('active');
        });
    };

    createLightbox();

    // Back to top button
    const createBackToTopButton = () => {
        const backToTop = document.createElement('button');
        backToTop.classList.add('back-to-top');
        backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
        document.body.appendChild(backToTop);

        // Show button after scrolling down
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        // Scroll to top on click
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };

    createBackToTopButton();
});