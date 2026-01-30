// Show alert message when "Get Started" button is clicked
function showMessage() {
    alert('Welcome! This is a dummy website for learning web development.');
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    const message = form.elements[2].value;

    // Display confirmation message
    alert(`Thank you, ${name}! Your message has been received.\nWe'll get back to you at ${email} soon.`);

    // Reset form
    form.reset();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Simple page load animation
window.addEventListener('load', function () {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});
