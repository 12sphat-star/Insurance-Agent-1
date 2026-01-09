/* animations.js - Scroll Animations & Interactive Effects */

// ===========================
// CONFIGURATION
// ===========================

const animationConfig = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    staggerDelay: 150, // ms between staggered animations
    counterDuration: 2000, // ms for number counters
};

// ===========================
// INTERSECTION OBSERVER - FADE IN ON SCROLL
// ===========================

const observerOptions = {
    threshold: animationConfig.threshold,
    rootMargin: animationConfig.rootMargin
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            // Optionally stop observing after animation
            // fadeObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// ===========================
// STAGGER ANIMATIONS FOR CARDS/GRIDS
// ===========================

const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.benefit-card, .service-card, .testimonial-card, .step-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animate-in');
                }, index * animationConfig.staggerDelay);
            });
            staggerObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// ===========================
// NUMBER COUNTER ANIMATION
// ===========================

function animateCounter(element, target, duration = animationConfig.counterDuration) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const suffix = element.dataset.suffix || '';

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + suffix;
        }
    }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.dataset.count);
            animateCounter(entry.target, target);
            counterObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// ===========================
// ACCORDION ANIMATIONS
// ===========================

function initAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header, .faq-question');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const isOpen = content.style.maxHeight;

            // Close all accordions in the same group
            const parent = this.closest('.accordion, .faq-section');
            if (parent) {
                parent.querySelectorAll('.accordion-content, .faq-answer').forEach(item => {
                    item.style.maxHeight = null;
                    item.previousElementSibling.classList.remove('active');
                });
            }

            // Open clicked accordion
            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + 'px';
                this.classList.add('active');
            }
        });
    });
}

// ===========================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===========================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===========================
// PARALLAX EFFECT ON HERO
// ===========================

function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax, .hero-background');

    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ===========================
// BUTTON HOVER EFFECTS (ENHANCED)
// ===========================

function initButtonEffects() {
    const buttons = document.querySelectorAll('.cta-primary, .cta-secondary, .btn-primary, .btn-outline');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-2px)';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });
}

// ===========================
// SCROLL PROGRESS INDICATOR
// ===========================

function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// ===========================
// LOADING STATES FOR FORMS
// ===========================

function initFormLoadingStates() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            const submitButton = this.querySelector('button[type="submit"], input[type="submit"]');
            if (submitButton) {
                submitButton.classList.add('loading');
                submitButton.disabled = true;
            }
        });
    });
}

// ===========================
// REDUCED MOTION SUPPORT
// ===========================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    document.documentElement.style.setProperty('--transition-duration', '0.01ms');
}

// ===========================
// INITIALIZATION
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Observe elements for fade-in animations
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => fadeObserver.observe(el));

    const slideElements = document.querySelectorAll('.slide-up');
    slideElements.forEach(el => fadeObserver.observe(el));

    // Observe grids for stagger animations
    const grids = document.querySelectorAll('.benefits-grid, .service-grid, .grid-3, .testimonial-grid');
    grids.forEach(grid => staggerObserver.observe(grid));

    // Observe counters
    const counters = document.querySelectorAll('.counter, .stat-number[data-count]');
    counters.forEach(counter => counterObserver.observe(counter));

    // Initialize other features
    initAccordions();
    initSmoothScroll();
    initParallax();
    initButtonEffects();
    initScrollProgress();
    initFormLoadingStates();

    console.log('✓ Animations initialized');
});

// ===========================
// UTILITY: ADD ANIMATION CLASSES ON LOAD
// ===========================

// Add fade-in class to common elements automatically
window.addEventListener('load', () => {
    // Auto-add animation classes to sections
    document.querySelectorAll('section h2, section h3').forEach(heading => {
        if (!heading.classList.contains('fade-in') && !heading.classList.contains('slide-up')) {
            heading.classList.add('fade-in');
        }
    });
});

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        animateCounter,
        initAccordions,
        initSmoothScroll
    };
}
