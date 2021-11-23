import { List, Item } from "./item";
import { removeButton } from './buttons';
import { displayItem, removeDisplay } from "./display";

function addItemTodo() {
    const { todoList } = List;

    const title = document.querySelector('#form-title').value;
    const description = document.querySelector('#form-description').value;
    const priority = document.querySelector('#priority').value;
    const date = document.querySelector('#date').value;

    const item = Item(title, description, priority, date);
    todoList.push(item);
}

function displayTodoList() {
    const { todoList, currentIndex } = List;
    const list = document.querySelector('#todo-list');
    while (list.hasChildNodes()) {
        list.removeChild(list.lastChild);
    };
    for (let i = 0; i < todoList.length; i++) {
        const button = document.createElement('button');
        button.classList.add('item');
        button.type = 'button';
        button.textContent = todoList[i].title;
        button.dataset.index = i;
        button.addEventListener('click', (e) => {
            displayItem(e.target.dataset.index);
            currentIndex[0] = e.target.dataset.index;
        });
        list.appendChild(button);

        const div = document.createElement('div');
        div.classList.add('hide');
        div.textContent = 'X';
        div.dataset.index = i;
        div.addEventListener('click', (e) => {
            removeButton(e.target.dataset.index);
            removeDisplay();
        });
        button.appendChild(div);
    };
}

export { addItemTodo, displayTodoList };