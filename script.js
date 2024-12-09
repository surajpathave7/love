function animateHeart() {
    const heart = document.querySelector('.heart');
    heart.classList.add('clicked');
    setTimeout(() => heart.classList.remove('yes'), 1000);
}

function changeMessage() {
    const message = document.querySelector('.message');
    message.innerHTML = " Thank you My Crush😍";

}
function changeMessage1() {
    const message = document.querySelector('.message');
    message.innerHTML = " Thank You Sister ";
}
