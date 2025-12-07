document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Menu Toggle ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        // Toggle the 'active' class on click
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked on mobile (better UX)
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
            // Prevent default jump behavior
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Use smooth scrolling
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
            // Darker background when scrolling down
            navbar.style.background = 'rgba(74, 0, 224, 0.95)';
            navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
        } else {
            // Transparent background at the top
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });

    // --- 4. Form Submission Placeholder (with Callback Check) ---
    const queryForm = document.querySelector('.query-form');
    if (queryForm) {
        queryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Logic to check if the callback checkbox was selected
            const callbackCheckbox = document.getElementById('callback');
            const callbackRequested = callbackCheckbox ? callbackCheckbox.checked : false;
            
            if (callbackRequested) {
                alert("Callback requested and query submitted successfully! Our team will contact you shortly.");
            } else {
                 alert("Query submitted successfully! We will respond to your email.");
            }

            // Reset the form fields
            queryForm.reset();
        });
    }

});
