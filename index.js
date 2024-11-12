

    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
