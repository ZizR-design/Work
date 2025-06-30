// Smooth scrolling handled by CSS (scroll-behavior).
// Contact form confirmation message
const form = document.getElementById('contact-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    message.classList.remove('hidden');
    form.reset();
});
