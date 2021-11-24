import { todoList } from "./item";

const title = document.querySelector('.title');
const description = document.querySelector('.description-display');
const priority = document.querySelector('.priority');
const date = document.querySelector('.due-date');

function displayItem(index) {
    title.textContent = todoList[index].title;
    description.textContent = todoList[index].description;
    priority.textContent = todoList[index].priority;
    date.textContent = todoList[index].date;
}

function removeDisplay() {
    title.textContent = '';
    description.textContent = '';
    priority.textContent = '';
    date.textContent = '';
}

export { displayItem, removeDisplay };