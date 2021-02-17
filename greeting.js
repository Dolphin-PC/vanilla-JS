const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greetings'),
    greetingWrapper = document.querySelector('.greetings');

const USER_LS = 'currentUser';
const SHOWING_ON = 'showing';

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    window.location.reload();
}

function askForName() {
    form.classList.add(SHOWING_ON);
    form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greetingWrapper.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    console.log(currentUser);
    if (currentUser === null) {
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    askForName();
    loadName();
}

init();
