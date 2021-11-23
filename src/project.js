import { removeProjectButton } from "./buttons";
import { List, Item } from "./item";

function addItemProject() {
    const { projectList } = List;

    const title = document.querySelector('#project-title').value;

    projectList.push(title);
}

function displayProjectList() {
    const { projectList } = List;

    const list = document.querySelector('#project-list');
    while (list.hasChildNodes()) {
        list.removeChild(list.lastChild);
    };
    for (let i = 0; i < projectList.length; i++) {
        const button = document.createElement('button');
        button.classList.add('item');
        button.type = 'button';
        button.textContent = projectList[i];
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
            removeProjectButton(e.target.dataset.index);

        });
        button.appendChild(div);
    }
}

export { addItemProject, displayProjectList };