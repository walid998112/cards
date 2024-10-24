// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Animate Product Cards on Scroll
    const productCards = document.querySelectorAll('.product-card');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the card is in view
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Add class to fade in
                observer.unobserve(entry.target); // Stop observing once shown
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    productCards.forEach(card => {
        observer.observe(card);
    });

    // Ripple Effect on Shop Now Button
    const shopNowButtons = document.querySelectorAll('.shop-now');
    shopNowButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
            ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

            setTimeout(() => {
                ripple.remove();
            }, 500); // Remove ripple after animation
        });
    });
});

