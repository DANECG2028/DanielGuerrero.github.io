// Selecting the menu icon and navbar elements from the HTML
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggling the 'bx-x' class on menuIcon and 'active' class on navbar when menuIcon is clicked
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*=======remove toggle icon and navbar when user clicks navbar link=========*/
// menuIcon.classList.remove('bx-x');
// navbar.classList.remove('active');
// Remove toggle icon and navbar when user clicks navbar link
let navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

/*=========== typed effect ============*/
document.addEventListener('DOMContentLoaded', function() {
    // Typed effect initialization
    const typed = new Typed('.multiple-text', {
        strings: ['Video Editor', 'Unity Developer', 'Web Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true    
    });
});

/*Selecting HTML Elements: Started by grabbing stuff from the HTML using document.querySelector. The first two lines are like the entry point for the menu icon and navbar elements.

Messing with Menu Icon and Navbar: Created this function, menuIcon.onclick, to toggle classes when the menuIcon is clicked. It's like, if you click it, it changes the look of the menu icon and navbar. 

Dealing with Links: So, there's this block of code below that I commented out. It was my attempt to make things smooth. When you click on a navbar link, I wanted to remove the toggle icon and the 'active' class from the navbar. I used a forEach loop to handle each navbar link individually.

Starting Typed Effect: Lastly, experimented with Typed.js. It's a library that does this typing effect. I set it up so when the whole HTML page is loaded, it types out job titles like 'Video Editor', 'Unity Developer', and 'Web Developer'. 





*/
