const body = document.querySelector('body');

const IMG_NUMBER = 3;

function paintImage(number) {
    const image = new Image();
    image.src = `./bg-images/${number}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
}

function getRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const rndNumber = getRandom();
    paintImage(rndNumber);
}

init();
