document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    const contentDiv = document.getElementById('content');

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        contentDiv.innerHTML = '<p>This is the home page content.</p>';
    });

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        contentDiv.innerHTML = '<p>This is the about page content.</p>';
    });

    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        contentDiv.innerHTML = '<p>This is the contact page content.</p>';
    });
});
