// Initialize AOS animations
AOS.init({
  duration: 1200,
  once: true
});

// Burger menu toggle for mobile
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
