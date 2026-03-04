/**
 * Custom JavaScript for National Estate & Construction
 * This file contains any client-side interactivity needed for the static site.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Add active state to navigation links based on current URL
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        
        // Check if the link matches the current path, or if we're at the root and the link is index.html
        if (currentPath === linkPath || (currentPath.endsWith('/') && linkPath.endsWith('index.html'))) {
            link.classList.add('text-primary');
            link.classList.remove('hover:text-primary');
        }
    });

    // Simple mobile menu toggle functionality (if added later)
    // const menuBtn = document.getElementById('mobile-menu-btn');
    // const mobileMenu = document.getElementById('mobile-menu');
    // if (menuBtn && mobileMenu) {
    //     menuBtn.addEventListener('click', () => {
    //         mobileMenu.classList.toggle('hidden');
    //     });
    // }
});
