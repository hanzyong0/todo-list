import { List } from "./item";
import { addItemTodo, displayTodoList } from './todo';
import { removeDisplay } from "./display";
import { createItemForm, deleteForm, createProjectForm } from "./form";
import { addItemProject, addTaskProject, displayProjectList, displayTaskList, projectDisplay } from "./project";


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

function projectSaveButton() {
    const projectTitle = document.querySelector('#project-title');
    const formAddProject = document.querySelector('.form-add-project');
    const form = document.querySelector('.form-popup');
    const { projectList, currentIndex } = List;

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
    }
}

function removeProjectButton(index) {
    const { projectList } = List;

    projectList.splice(index, 1);
    displayProjectList();
}

function projectFormDeleteButton() {
    const formAddProject = document.querySelector('.form-add-project');
    const form = document.querySelector('.form-popup');

    formAddProject.reset();
    form.style.display = 'none';
    deleteForm();
}

function taskSaveButton() {
    const form = document.querySelector('.form-popup');
    const { currentIndex, taskList } = List;

    if (document.querySelector('#task-title').value === '') {
        projectDisplay();
    } else {
        addTaskProject();
        projectDisplay();
    };
}

export {
    todoAddButton, formDeleteButton, removeButton, saveButton, displayDeleteButton,
    projectAddButton, projectSaveButton, removeProjectButton, projectFormDeleteButton,
    taskSaveButton
};