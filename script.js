// Function to close the navbar when the page loads
function closeNavbarOnLoad() {
    var navbarContainer = document.querySelector('.bottom-navbar-container');
    navbarContainer.classList.remove('show-navbar');
}

// Close the navbar on page load
closeNavbarOnLoad();

// shows the burger navbar 
function toggleNavbar() {
    var navbarContainer = document.querySelector('.bottom-navbar-container');
    navbarContainer.classList.toggle('show-navbar'); // show or hide the the navbar
}


document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.querySelector('.project-container');
    const cards = cardContainer.children; // Select direct children of .project-container
    let currentCardIndex = 0; // this is the starting index, associated to the id of the first project

    //given an integer, it will display the card at that index, looping throught every car and displaying the one at the given index.
    // other cards are set to display none
    function showCard(index) {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = i === index ? 'block' : 'none';
        }
    }

    // checks the current index, if is the last index it will reset it to index 0, otherwise it will increase the index.
    // then calls a function to show the card at the index
    function showNextCard() {
        if (currentCardIndex === cards.length - 1) {
            currentCardIndex = 0;
        } else {
            currentCardIndex++;
        }
        showCard(currentCardIndex);
    }

    // checks the current index, if zero it will reset it to the last index, otherwise it will decrease the index.
    // then calls a function to show the card at the index
    function showPreviousCard() {
        if (currentCardIndex === 0) {
            currentCardIndex = cards.length - 1;
        } else {
            currentCardIndex--;
        }
        showCard(currentCardIndex);
    }

    // for each "next" button, use an eventlistener and call the function to show the next card on click
    document.querySelectorAll('.next').forEach(function (button) {
        button.addEventListener('click', showNextCard);
    });

    // for each "previsous" button, use an eventlistener and call the function to show the previous card on click
    document.querySelectorAll('.previous').forEach(function (button) {
        button.addEventListener('click', showPreviousCard);
    });

    // Show the first card initially
    showCard(currentCardIndex);
});