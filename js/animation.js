/* js/animation.js - UI Micro-interactions and Scroll Animations */

document.addEventListener('DOMContentLoaded', () => {
    // --- Page Loader Animation ---
    const loader = document.getElementById('pageLoader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
            }, 300); // Small delay for visual comfort
        });
    }

    // --- Typing Effect for Hero Title ---
    const typingElement = document.getElementById('typingHeroTitle');
    if (typingElement) {
        const text = "Keep Your Plants Healthy With Smart Reminders";
        let index = 0;
        typingElement.textContent = ''; // Clear initial text

        function type() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 65); // Typing speed
            } else {
                // Remove cursor after completing
                typingElement.style.borderRight = 'none';
            }
        }
        
        // Start typing after a tiny buffer
        setTimeout(type, 500);
    }

    // --- Scroll Reveal Animations ---
    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null, // Viewport
            threshold: 0.1, // Trigger when 10% visible
            rootMargin: '0px 0px -50px 0px' // Trigger slightly before it fully rolls up
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    } else {
        // Fallback for browsers without IntersectionObserver support
        revealElements.forEach(element => {
            element.classList.add('revealed');
        });
    }

    // --- Animated Stats Counters ---
    const counterElements = document.querySelectorAll('.stat-counter');
    if (counterElements.length > 0) {
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    
                    if (!isNaN(target)) {
                        animateCount(counter, target);
                    }
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        counterElements.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    function animateCount(element, target) {
        let count = 0;
        const duration = 1200; // Animation length in ms
        const stepTime = Math.max(Math.floor(duration / Math.max(target, 1)), 15);
        
        const timer = setInterval(() => {
            count++;
            element.textContent = count;
            
            if (count >= target) {
                element.textContent = target; // Ensure exact match at finish
                clearInterval(timer);
            }
        }, stepTime);
    }

    // --- Button Ripple Visual Cue ---
    const rippleButtons = document.querySelectorAll('.btn');
    rippleButtons.forEach(btn => {
        btn.classList.add('btn-ripple');
    });

    // --- Card Flip triggers (if clicked on touch screen) ---
    const flipCards = document.querySelectorAll('.flip-container');
    flipCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
});
