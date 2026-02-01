// Language Switcher
function setLang(lang) {
    document.querySelectorAll(`[data-${lang}]`).forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    if (lang === 'ar') {
        document.documentElement.lang = 'ar';
        document.documentElement.dir = 'rtl';
    } else {
        document.documentElement.lang = lang;
        document.documentElement.dir = 'ltr';
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`btn-${lang}`).classList.add('active');

    localStorage.setItem('lang', lang);
}

// Theme Switcher
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Hamburger Menu
function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Close menu when clicking on a link
function closeMenuOnClick() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Initialize
function init() {
    const savedLang = localStorage.getItem('lang') || 'ar';
    const savedTheme = localStorage.getItem('theme') || 'light';

    setLang(savedLang);
    document.documentElement.setAttribute('data-theme', savedTheme);

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    closeMenuOnClick();
}

// Load on page ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}