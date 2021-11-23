import { List } from "./item";
import { addItemTodo, displayTodoList } from './todo';
import { removeDisplay } from "./display";
import { createItemForm, deleteForm } from "./form";


function addButton() {
    const form = document.querySelector('.form-popup');
    const buttons = document.querySelectorAll('.round-button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            createItemForm();
            form.style.display = 'flex';
        });
    });
}

function formDeleteButton() {
    const form = document.querySelector('.form-popup');
    const formContainer = document.querySelector('.form-container');

    formContainer.reset();
    form.style.display = 'none';
    deleteForm();
}

function removeButton(index) {
    const { todoList } = List;

    todoList.splice(index, 1);
    displayTodoList();
}

function saveButton() {
    const button = document.querySelector('#save');
    const form = document.querySelector('.form-popup');
    const formContainer = document.querySelector('.form-container');

    if (document.querySelector('#form-title').value === '') {
        form.style.display = 'none';
        formContainer.reset();
        deleteForm();
    } else {
        addItemTodo();
        displayTodoList();
        form.style.display = 'none';
        formContainer.reset();
        deleteForm();
    };
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