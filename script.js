// JavaScript for responsive navbar and form handling

document.addEventListener('DOMContentLoaded', () => {
    // Navbar toggle for smaller screens
    const navToggle = document.querySelector('.logo');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Simple form validation
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }

            // Simple email format validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Thank you for your message, ' + name + '! We will get back to you soon.');

            // Clear the form
            contactForm.reset();
        });
    }
});
