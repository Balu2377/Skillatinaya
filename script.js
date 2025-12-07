document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Menu Toggle ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Toggles the 'active' class to show/hide the menu (styled in CSS)
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked on mobile
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }


    // --- 2. Smooth Scrolling for Navbar Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 3. Navbar Scroll Effect (Sticky Header) ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Add a dark background and shadow when scrolling down
            navbar.style.background = 'rgba(74, 0, 224, 0.95)';
            navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
        } else {
            // Revert to transparent background at the top of the page
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });

    // --- 4. Form Submission Placeholder ---
    const queryForm = document.querySelector('.query-form');
    if (queryForm) {
        queryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Front-end success message.
            alert("Query submitted successfully! Our team will contact you shortly.");
            
            queryForm.reset();
        });
    }

});
