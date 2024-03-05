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


document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.querySelector('.project-container');
    const cards = cardContainer.children; // Select direct children of .project-container
    let currentCardIndex = 0;

    function showCard(index) {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = i === index ? 'block' : 'none';
        }
    }

    function showNextCard() {
        if (currentCardIndex === cards.length - 1) {
            currentCardIndex = 0;
        } else {
            currentCardIndex++;
        }
        showCard(currentCardIndex);
    }

    function showPreviousCard() {
        currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
        showCard(currentCardIndex);
    }

    document.querySelectorAll('.card-button.next').forEach(function (button) {
        button.addEventListener('click', showNextCard);
    });

    document.querySelectorAll('.card-button.previous').forEach(function (button) {
        button.addEventListener('click', showPreviousCard);
    });

    // Show the first card initially
    showCard(currentCardIndex);
});



  


