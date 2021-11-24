import './style.css';
import * as buttons from './buttons.js';
import { todoList, projectList } from './item';
import { displayTodoList } from './todo';
import { displayProjectList } from './project';

(() => {
    const a = JSON.parse(localStorage.getItem('todoList'));
    const b = JSON.parse(localStorage.getItem('projectList'));

    todoList.splice(0, todoList.length, ...a);
    projectList.splice(0, projectList.length, ...b);
})();

(() => {
    buttons.todoAddButton();
    buttons.projectAddButton();
    buttons.displayDeleteButton();

    displayTodoList();
    displayProjectList();
})();