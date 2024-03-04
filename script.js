document.addEventListener('DOMContentLoaded', function () {
    var options = {
        strings: ["Hello Visitor."],
        typeSpeed: 70,
        backSpeed: 25,
        showCursor: false,
        cursorChar: '|',
    };
    var typed = new Typed('#typed-output', options);
});

// Function to close the navbar when the page loads
function closeNavbarOnLoad() {
    var navbarContainer = document.querySelector('.bottom-navbar-container');
    navbarContainer.classList.remove('show-navbar');
}

// Close the navbar on page load
closeNavbarOnLoad();

function toggleNavbar() {
    var navbarContainer = document.querySelector('.bottom-navbar-container');
    navbarContainer.classList.toggle('show-navbar');
}
