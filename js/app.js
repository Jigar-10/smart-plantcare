/* js/app.js - Site-Wide Shared Scripts */

document.addEventListener('DOMContentLoaded', () => {
    // --- Dark Mode / Light Mode Toggle ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Set initial theme
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeToggleIcon('dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        updateThemeToggleIcon('light');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                updateThemeToggleIcon('light');
                showToast('Light Mode activated ☀️', 'success');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                updateThemeToggleIcon('dark');
                showToast('Dark Mode activated 🌙', 'success');
            }
        });
    }

    function updateThemeToggleIcon(theme) {
        if (!themeToggleBtn) return;
        if (theme === 'dark') {
            themeToggleBtn.innerHTML = '☀️';
            themeToggleBtn.title = 'Switch to Light Mode';
        } else {
            themeToggleBtn.innerHTML = '🌙';
            themeToggleBtn.title = 'Switch to Dark Mode';
        }
    }

    // --- Sticky Navbar ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
    });

    // --- Mobile Hamburguer Menu ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when links are clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // --- Highlight Active Nav Link ---
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === pageName || (pageName === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // --- Scroll To Top Button ---
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// --- Dynamic Toast Notification System ---
function showToast(message, type = 'info') {
    // Check if container exists, otherwise create it
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Choose icon according to type
    let icon = 'ℹ️';
    if (type === 'success') icon = '🌿';
    if (type === 'warning') icon = '⚠️';
    if (type === 'error') icon = '🛑';

    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span class="toast-message">${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Remove toast after animation finishes
    toast.addEventListener('animationend', (e) => {
        if (e.animationName === 'toastFadeOut') {
            toast.remove();
        }
    });
}
