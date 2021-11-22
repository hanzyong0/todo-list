import { List } from "./item";
import { addItemTodo, displayTodoList } from './todo';

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

function deleteButton() {
    const buttons = document.querySelectorAll('.delete');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            formContainer.reset();
            form.style.display = 'none';
        });
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


export { addButton, deleteButton, removeButton, saveButton };