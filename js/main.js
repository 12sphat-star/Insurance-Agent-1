/* main.js - Core Functionality */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollEffects();
    loadIncludes();
    // Load Chatbot
    if (typeof initChatbot === 'function') {
        initChatbot();
    } else {
        const script = document.createElement('script');
        script.src = 'js/chatbot.js';
        script.onload = () => { if (typeof initChatbot === 'function') initChatbot(); };
        document.head.appendChild(script);
    }
    // Load Voice Bot
    const voiceScript = document.createElement('script');
    voiceScript.src = 'js/voice-bot.js';
    document.head.appendChild(voiceScript);

    // Initialize Icons
    if (window.lucide) {
        lucide.createIcons();
    }
});

/**
 * Mobile Navigation Toggle
 */
function initNavigation() {
    const header = document.querySelector('.header');
    const toggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav-links');

    if (toggle) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            toggle.classList.toggle('is-open');
        });
    }

    // Header scroll background
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**
 * Scroll Animations (using GSAP if available)
 */
function initScrollEffects() {
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Content Fade In
        gsap.from('.hero-content h1, .hero-content p, .hero-actions', {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        });

        // Hero Image Reveal
        gsap.from('.hero-image-wrapper', {
            opacity: 0,
            scale: 0.9,
            duration: 1.2,
            ease: 'power2.out',
            delay: 0.5
        });

        // Section Headers
        gsap.utils.toArray('section h2').forEach(heading => {
            gsap.from(heading, {
                scrollTrigger: {
                    trigger: heading,
                    start: 'top 85%',
                },
                opacity: 0,
                y: 20,
                duration: 0.8
            });
        });

        // Service Cards Stagger
        gsap.from('.service-card', {
            scrollTrigger: {
                trigger: '.card-container',
                start: 'top 80%',
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.2
        });
    }
}

/**
 * Reusable Components Loader (Simple version)
 * In a real production environment, we might use a build tool or static site generator.
 * For this version, we can use fetch for headers/footers if needed, 
 * but for simplicity we'll keep them in the HTML or use a small helper.
 */
function loadIncludes() {
    const footerElem = document.getElementById('footer');
    if (footerElem) {
        // Determine if we're in a subdirectory
        const pathPrefix = window.location.pathname.includes('/services/') ||
            window.location.pathname.includes('/blog/') ? '../' : '';

        footerElem.innerHTML = `
            <div class="container footer-grid">
                <div class="footer-brand">
                    <div class="brand-lockup mb-2">
                        <div class="brand-icon"><i data-lucide="shield-check"></i></div>
                        <div class="brand-text">
                            <span class="brand-line1" style="color: white;">[Your Agency Name]</span>
                            <span class="brand-line2">[Your Tagline]</span>
                        </div>
                    </div>
                    <p>Securing legacies for children's children through innovative insurance strategies.</p>
                </div>
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="${pathPrefix}about.html">About</a></li>
                        <li><a href="${pathPrefix}services/life-insurance.html">Services</a></li>
                        <li><a href="${pathPrefix}blog.html">Blog</a></li>
                        <li><a href="${pathPrefix}contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h4>Connect</h4>
                    <p><i data-lucide="phone" class="icon-small"></i> (XXX) XXX-XXXX</p>
                    <p><i data-lucide="mail" class="icon-small"></i> [YOUR_EMAIL]</p>
                    <div class="social-links mt-2">
                        <a href="#"><i data-lucide="linkedin"></i></a>
                        <a href="#"><i data-lucide="twitter"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom text-center mt-4">
                <p>&copy; 2026 [Your Agency Name]. All Rights Reserved. | <a href="${pathPrefix}privacy-policy.html">Privacy Policy</a></p>
            </div>
        `;
        if (window.lucide) lucide.createIcons();
    }
}
