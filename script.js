// Made by Kuba Polomski. Uncopyrighted (you can use it anywhere you want)

window.addEventListener('scroll', showBacktoTop);
let startArrow = document.getElementsByClassName('go-start')[0];

function showBacktoTop() {
    if (window.pageYOffset < 300) {
        startArrow.classList.add('hidden') ;     
    } else {
        startArrow.classList.remove('hidden') 
    }
}

// you could use smooth scrolling if the scrolling is inside scrollable parent element
// e.g.
// main { }