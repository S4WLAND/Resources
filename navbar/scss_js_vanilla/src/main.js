import './style.scss';
import gsap from 'gsap';

document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.getElementById('navbar');
    const html = document.documentElement;

    // ========================================
    // SCROLL BEHAVIOR
    // ========================================
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // ========================================
    // THEME TOGGLE
    // ========================================
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleThumb = document.getElementById('theme-toggle-thumb');

    themeToggle.addEventListener('click', () => {
        html.classList.toggle('light');
        const isLight = html.classList.contains('light');
        gsap.to(themeToggleThumb, {
            x: isLight ? 0 : '1.5rem', // 24px
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    // ========================================
    // MOBILE MENU
    // ========================================
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
    const openIcon = document.getElementById('mobile-menu-open-icon');
    const closeIcon = document.getElementById('mobile-menu-close-icon');

    const openMenu = () => {
        mobileMenuOverlay.classList.add('open');
        openIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        gsap.fromTo('.mobile-menu-item', 
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, delay: 0.2, ease: 'power2.out' }
        );
        gsap.fromTo('.mobile-cta', 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.4, delay: 0.6, ease: 'power2.out' }
        );
    };

    const closeMenu = () => {
        mobileMenuOverlay.classList.remove('open');
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    };

    mobileMenuToggle.addEventListener('click', () => {
        if (mobileMenuOverlay.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    mobileMenuItems.forEach(item => {
        item.addEventListener('click', closeMenu);
    });

    // ========================================
    // ACTIVE MENU ITEM
    // ========================================
    const allMenuItems = document.querySelectorAll('[data-name]');

    const handleItemClick = (clickedItemName) => {
        allMenuItems.forEach(item => {
            const isMatch = item.getAttribute('data-name') === clickedItemName;
            item.classList.toggle('active', isMatch);

            // Desktop-specific logic for the animated indicator
            const indicator = item.querySelector('.active-indicator');
            if (indicator) { // This check ensures it only runs on desktop items
                gsap.to(indicator, { 
                    opacity: isMatch ? 1 : 0, 
                    scaleX: isMatch ? 1 : 0, 
                    duration: 0.5
                });
            }
        });
    };

    allMenuItems.forEach(item => {
        item.addEventListener('click', () => {
            handleItemClick(item.getAttribute('data-name'));
        });
    });

    // Initial active state
    handleItemClick('Home');

    // ========================================
    // INITIAL PAGE LOAD ANIMATIONS
    // ========================================
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.fromTo(navbar, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' })
      .fromTo('.desktop-menu .menu-item', 
        { opacity: 0, y: -20 }, 
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.4 }, 
        '-=0.2'
      )
      .fromTo('.logo, .nav-actions > *', 
        { opacity: 0 }, 
        { opacity: 1, stagger: 0.1, duration: 0.4 },
        '<'
      )
      .fromTo('.hero-title', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo('.hero-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.5')
      .fromTo('.hero-buttons > * ', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, '-=0.4');

});