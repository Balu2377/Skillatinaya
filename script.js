document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scrolling for Navbar Links
    // Ensures scrolling to sections is smooth when a link is clicked.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prevent default anchor click behavior
            e.preventDefault();

            // Get the target element based on the href attribute
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Use smooth scrolling behavior
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Navbar Scroll Effect (Adds background color when user scrolls down)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        // If the scroll position is more than 50 pixels from the top
        if (window.scrollY > 50) {
            // Apply a solid background and shadow
            navbar.style.background = 'rgba(74, 0, 224, 0.9)'; // Dark transparent purple
            navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
        } else {
            // Keep the navbar transparent at the top of the page
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });

    // 3. Simple Button Interaction (Optional: Can be removed if linked to a form)
    const registerBtns = document.querySelectorAll('.btn-primary, .btn-nav, .btn-primary-large, .btn-secondary');
    registerBtns.forEach(btn => {
        // We only add an alert if the href is '#' or a placeholder link
        if (btn.getAttribute('href') === '#register') {
             btn.addEventListener('click', (e) => {
                e.preventDefault();
                alert("Thank you! This button will link to your registration form.");
            });
        }
    });

    // 4. Fallback for the Hero Image (Ensures initial visibility)
    // The previous design used JS for fade-in animations. To ensure content appears instantly:
    const heroImage = document.querySelector('.hero-image');
    const heroText = document.querySelector('.hero-text');
    if (heroImage) heroImage.style.opacity = 1;
    if (heroText) heroText.style.opacity = 1;

});
