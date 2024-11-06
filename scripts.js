document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scroll Function for Navigation Links
    document.querySelector('nav').addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && e.target.hash !== '') {
            e.preventDefault();
            const targetElement = document.querySelector(e.target.hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    // Contact Form Validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            const name = document.getElementById('name')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const message = document.getElementById('message')?.value.trim();

            if (!name || !email || !message) {
                e.preventDefault();
                alert('Please fill in all fields before submitting the form.');
            } else if (!validateEmail(email)) {
                e.preventDefault();
                alert('Please enter a valid email address.');
            }
        });
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    // Modal Functionality for Projects Page
    document.querySelectorAll('.project-card button').forEach(button => {
        button.addEventListener('click', function () {
            const modalId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'flex';
            }
        });
    });

    document.querySelectorAll('.close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', function () {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Close modal when clicking outside the modal content
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
});
