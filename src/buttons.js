import { todoList, projectList, currentIndex, storeProject, storeTodo } from "./item";
import { addItemTodo, displayTodoList } from './todo';
import { removeDisplay } from "./display";
import { createItemForm, deleteForm, createProjectForm } from "./form";
import { addItemProject, addTaskProject, displayProjectList, projectDisplay } from "./project";


function todoAddButton() {
    const form = document.querySelector('.form-popup');
    const button = document.querySelector('#todo-add');

    button.addEventListener('click', () => {
        deleteForm();
        createItemForm();
        form.style.display = 'flex';
    });
}

function projectAddButton() {
    const form = document.querySelector('.form-popup');
    const button = document.querySelector('#project-add');

    button.addEventListener('click', () => {
        deleteForm();
        createProjectForm();
        form.style.display = 'flex';
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
    todoList.splice(index, 1);
    displayTodoList();
    storeTodo();
}

function saveButton() {
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
        storeTodo();
    };
}

function displayDeleteButton() {
    const button = document.querySelector('#display-delete');

    button.addEventListener('click', () => {
        todoList.splice(currentIndex[0], 1);
        removeDisplay();
        displayTodoList();
        currentIndex[0] = '';
        storeTodo();
    });
}

function projectSaveButton() {
    const projectTitle = document.querySelector('#project-title');
    const formAddProject = document.querySelector('.form-add-project');
    const form = document.querySelector('.form-popup');

    if (projectTitle.value === '') {
        form.style.display = 'none';
        formAddProject.reset();
        deleteForm();
    } else {
        addItemProject();
        displayProjectList();
        form.style.display = 'none';
        formAddProject.reset();
        deleteForm();
        storeProject();
    }
}

function removeProjectButton(index) {
    projectList.splice(index, 1);
    displayProjectList();
    storeProject();
}

function projectFormDeleteButton() {
    const formAddProject = document.querySelector('.form-add-project');
    const form = document.querySelector('.form-popup');

    formAddProject.reset();
    form.style.display = 'none';
    deleteForm();
}

function taskSaveButton() {
    if (document.querySelector('#task-title').value === '') {
        projectDisplay();
    } else {
        addTaskProject();
        projectDisplay();
        storeProject();
    };
}

export {
    todoAddButton, formDeleteButton, removeButton, saveButton, displayDeleteButton,
    projectAddButton, projectSaveButton, removeProjectButton, projectFormDeleteButton,
    taskSaveButton
};