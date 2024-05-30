window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('.content');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.color = 'yellow';
    });
    link.addEventListener('mouseout', function() {
        this.style.color = '#fff';
    });
});
