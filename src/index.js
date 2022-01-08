import './style.css';
import * as buttons from './buttons.js';
import { todoList, projectList } from './item';
import { displayTodoList } from './todo';
import { displayProjectList } from './project';
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRBZnKcNGKfYZABz_32nOHO0bpUZ1Bb7A",

    authDomain: "to-do-list-32a5c.firebaseapp.com",

    projectId: "to-do-list-32a5c",

    storageBucket: "to-do-list-32a5c.appspot.com",

    messagingSenderId: "892417758519",

    appId: "1:892417758519:web:c818df30a53b25829136b2"

};

const app = initializeApp(firebaseConfig);

(() => {
    const a = JSON.parse(localStorage.getItem('todoList'));
    const b = JSON.parse(localStorage.getItem('projectList'));

    if (a === null) {
        todoList.splice(0, todoList.length);
    } else {
        todoList.splice(0, todoList.length, ...a);
    };
    if (b === null) {
        projectList.splice(0, projectList.length);
    } else {
        projectList.splice(0, projectList.length, ...b);
    };
})();

(() => {
    buttons.todoAddButton();
    buttons.projectAddButton();
    buttons.displayDeleteButton();

    displayTodoList();
    displayProjectList();
})();