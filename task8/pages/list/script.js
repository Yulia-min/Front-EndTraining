const READY_STATE = {
    UNSENT: 0,
    OPENED: 1,
    HEADERS_RECEIVED: 2,
    LOADING: 3,
    DONE: 4,
};

const READY_STATE_MESSAGE = {
    [READY_STATE.UNSENT]: 'исходное состояние',
    [READY_STATE.OPENED]: 'вызван метод open',
    [READY_STATE.HEADERS_RECEIVED]: 'получены заголовки ответа',
    [READY_STATE.LOADING]: 'ответ в процессе передачи (данные частично получены)',
    [READY_STATE.DONE]: 'запрос завершён',
};

const NOTE_STATUS = {
    LOW: 0,
    MIDDLE: 1,
    HIGHT: 2, 
    CRITICAL: 3,
};

const NOTE_STATUS_MESSAGE = {
    [NOTE_STATUS.LOW]: 'low',
    [NOTE_STATUS.MIDDLE]: 'middle',
    [NOTE_STATUS.HIGHT]: 'hight',
    [NOTE_STATUS.CRITICAL]: 'critical',
};

const notesElements = document.getElementsByClassName('notes-section');
const statusElements = document.querySelectorAll('.status-section > div');
const [creationButton] = document.getElementsByClassName('creation-form__submit');
const [creationForm] = document.getElementsByClassName('creation-form');

function getDataRequest(section, notesElement, statusElement) {
    const path = `/data/${section}`;
    const method = 'GET';
    const xhr = new XMLHttpRequest();

    xhr.onload = () => renderNotes(JSON.parse(xhr.response), notesElement);

    xhr.onreadystatechange = () => renderStatus(xhr.readyState, path, method, statusElement);

    xhr.open(method, path);

    xhr.send();
}

function createDataRequest(name, description, dataFile, status, date, time, notesElement, statusElement) {
    const path = '/data/';
    const method = 'POST';
    const body = JSON.stringify({ name, description, status, dataFile, date, time });
    const xhr = new XMLHttpRequest();

    console.dir(notesElement);
    xhr.onload = () => renderNewNote(JSON.parse(xhr.response), notesElement);

    xhr.onreadystatechange = () => renderStatus(xhr.readyState, path, method, statusElement);

    xhr.open(method, path);

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(body);
}

function renderStatus(readyState, path, method, element) {
    element.innerHTML += `<div> ${new Date()} ${method} ${path}: ${READY_STATE_MESSAGE[readyState]}</div>`;
}

function renderNotes(notes, element) {
    const content = notes
        .map((note, index) => getNoteStr(note, index + 1))
        .join('');

    element.innerHTML = content;
}

function renderNewNote(note, element) {
    element.innerHTML += getNoteStr(note, element.children.length + 1);
}

function getNoteStr({ value, description, status, date, time },  num) {
    return `<div>${num}. ${value} ${description} ${NOTE_STATUS_MESSAGE[status]} ${date} ${time}</div>`;
}

creationButton.addEventListener('click', (event) => {
    event.preventDefault();

    const [dataFileElement] = creationForm.querySelectorAll('[type="radio"][name="dataFile"]:checked');
    const [statusElement] = creationForm.querySelectorAll('[type="radio"][name="status"]:checked');
    const [nameElement, descriptionElement, dateElement, timeElement] = creationForm;

    console.log(dateElement.value);
    console.log(timeElement.value);

    createDataRequest(
        nameElement.value, 
        descriptionElement.value,
        dataFileElement.value, 
        statusElement.value,
        dateElement.value,
        timeElement.value,
        notesElements[dataFileElement.value],
        statusElements[dataFileElement.value],
    );
});

getDataRequest(1, notesElements[0], statusElements[0]);
getDataRequest(2, notesElements[1], statusElements[1]);
getDataRequest(3, notesElements[2], statusElements[2]);