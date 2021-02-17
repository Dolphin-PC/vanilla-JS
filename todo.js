const toDoForm = document.querySelector('.js-todoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveTodos(cleanToDos);
}

function saveTodos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function loadTodos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        console.log(parsedToDos);
        parsedToDos.forEach((toDo) => {
            paintToDo(toDo.text);
        });
    }
}

function paintToDo(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    const toDosObj = {
        text: text,
        id: newId,
    };

    delBtn.className = 'fas fa-backspace';
    delBtn.addEventListener('click', deleteToDo);

    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    toDos.push(toDosObj);
    saveTodos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = '';
}

function init() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser === null) return;

    toDoForm.classList.add('showing');

    loadTodos();
    toDoForm.addEventListener('submit', handleSubmit);
}

init();
