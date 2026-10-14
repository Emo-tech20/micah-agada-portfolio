// ====================================
// MOBILE MENU TOGGLE
// ====================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ====================================
// SCROLL REVEAL ANIMATION
// ====================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const observeElements = document.querySelectorAll(
        '.service-card, .project-card, .experience-item'
    );
    
    observeElements.forEach(el => {
        observer.observe(el);
    });
});

// ====================================
// SMOOTH SCROLL FOR NAVIGATION
// ====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ====================================
// DYNAMIC COPYRIGHT YEAR
// ====================================

document.getElementById('year').textContent = new Date().getFullYear();

// ====================================
// ACTIVE NAV LINK ON SCROLL
// ====================================

const sections = document.querySelectorAll('section');
const navItems = navMenu.querySelectorAll('a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.style.color = '';
        if (item.getAttribute('href').slice(1) === current) {
            item.style.color = 'var(--accent-grey)';
        }
    });
});

// ====================================
// KEYBOARD NAVIGATION
// ====================================

// Allow Tab key navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navToggle.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ====================================
// BUTTON FOCUS STATES
// ====================================

const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--accent-grey)';
        this.style.outlineOffset = '2px';
    });
    
    btn.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// ====================================
// LINK FOCUS STATES
// ====================================

const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--accent-grey)';
        this.style.outlineOffset = '2px';
    });
    
    link.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// ====================================
// FORM ACCESSIBILITY (EMAIL LINKS)
// ====================================

// Enhance email and phone links
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

emailLinks.forEach(link => {
    link.setAttribute('aria-label', `Send email to ${link.textContent}`);
});

phoneLinks.forEach(link => {
    link.setAttribute('aria-label', `Call ${link.textContent}`);
});

// ====================================
// LOADING STATE
// ====================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
