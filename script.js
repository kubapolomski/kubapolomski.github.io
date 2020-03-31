

window.addEventListener('scroll', showBacktoTop);
let startArrow = document.getElementsByClassName('go-start')[0];
let documentSize = document.body.offsetHeight - window.innerHeight;

function showBacktoTop() {
    if (window.pageYOffset < 300) {
        startArrow.classList.add('hidden') ;    
    } else if (window.pageYOffset == documentSize) {
        startArrow.classList.add('hidden') ;    
    } else {
        startArrow.classList.remove('hidden') 
    }
}