let surface = document.querySelector('.root');
let nameBtn = "Scroll";
const MIN_POSITION = 75; //px
let position = 0;
const FAST_ANIMATION = 10;

function animateScroll(e){
    if (position > 0) {
        window.scrollBy(0, -5);
        setTimeout(animateScroll, FAST_ANIMATION);
    }
}

let MyButton = (function createScroll() {
    let btn = document.createElement('button');
    btn.addEventListener('click', function(e){
        e.stopPropagation();
        animateScroll(e);
    }, false);
    btn.textContent = nameBtn;
    btn.classList.add('scroll');
    surface.appendChild(btn);
    return btn;
})();

function scrollShow(e) {
    position = document.body.scrollTop || window.scrollY;// fix for chrome
    if (position > MIN_POSITION) {
        MyButton.style.display = 'block';
    } else {
        MyButton.style.display = null;
    }  
}
window.addEventListener('scroll', scrollShow, false);