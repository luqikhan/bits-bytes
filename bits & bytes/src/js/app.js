// side navbar
const navBar = () => {
    const menuIcon = document.querySelector('.icon');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');
    // Toggle nav
    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('nav_active');

    // Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        }
        else {
            link.style.animation =`navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    })

    //menu icon animation 
    menuIcon.classList.toggle('toggle');
    
        
    })



}

navBar();
