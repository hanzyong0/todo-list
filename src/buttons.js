import { List } from "./item";
import { addItemTodo, displayTodoList } from './todo';
import { removeDisplay } from "./display";

const form = document.querySelector('.form-popup');
const formContainer = document.querySelector('.form-container');

function addButton() {
    const buttons = document.querySelectorAll('.round-button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            form.style.display = 'flex';
        });
    });
}

function formDeleteButton() {
    const button = document.querySelector('#form-delete');

    button.addEventListener('click', () => {
        formContainer.reset();
        form.style.display = 'none';
    });
}

function removeButton(index) {
    const { todoList } = List;

    todoList.splice(index, 1);
    displayTodoList();
}

function saveButton() {
    const button = document.querySelector('#save');

    button.addEventListener('click', () => {
        addItemTodo();
        displayTodoList();
        form.style.display = 'none';
        formContainer.reset();
    });
}

function displayDeleteButton() {
    const { todoList, currentIndex } = List;
    const button = document.querySelector('#display-delete');

    button.addEventListener('click', () => {
        todoList.splice(currentIndex[0], 1);
        removeDisplay();
        displayTodoList();
        currentIndex[0] = '';
    });
}

export { addButton, formDeleteButton, removeButton, saveButton, displayDeleteButton };