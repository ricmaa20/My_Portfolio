// Menu Toggle amélioré
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Fermer le menu si on clique à l'extérieur (uniquement sur mobile)
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && e.target !== menuBtn && window.innerWidth < 768) {
        menu.classList.remove('active');
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        if (window.innerWidth < 768) {
            menu.classList.remove('active');
        }
        
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Animation des hobbies au scroll
const hobbyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => {
    hobbyObserver.observe(card);
});

// Vérification d’Owl Carousel avant d’exécuter le script
if (typeof $.fn.owlCarousel !== 'undefined') {
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{ items: 1, nav: false },
            600:{ items: 2, nav: false },
            1000:{ items: 3, nav: false }
        }
    });
} else {
    console.warn("Owl Carousel n'est pas chargé.");
}
