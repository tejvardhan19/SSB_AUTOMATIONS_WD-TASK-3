document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is working!');

    // Smooth scroll to sections
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Highlight the current section in the navigation menu
    const sections = document.querySelectorAll('main section');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navItem = document.querySelector(`nav ul li a[href="#${id}"]`);

            if (entry.isIntersecting) {
                navItem.classList.add('active');
            } else {
                navItem.classList.remove('active');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
