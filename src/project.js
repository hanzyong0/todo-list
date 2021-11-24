import { removeProjectButton } from "./buttons";
import { deleteForm, createTaskForm } from "./form";
import { List, Project, Task } from "./item";

function addItemProject() {
    const { projectList } = List;

    const title = document.querySelector('#project-title').value;

    const project = Project(title);
    projectList.push(project);
}

function addTaskProject() {
    const { currentIndex, projectList } = List;

    const title = document.querySelector('#task-title').value;

    const task = Task(title);
    projectList[currentIndex[0]].array.push(task);
}

function displayProjectList() {
    const { projectList, currentIndex } = List;

    const list = document.querySelector('#project-list');
    while (list.hasChildNodes()) {
        list.removeChild(list.lastChild);
    };
    for (let i = 0; i < projectList.length; i++) {
        const button = document.createElement('button');
        button.classList.add('item');
        button.type = 'button';
        button.textContent = projectList[i].title;
        button.dataset.index = i;
        button.addEventListener('click', (e) => {
            currentIndex[0] = e.target.dataset.index;
            projectDisplay(e.target.dataset.index);
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

function projectDisplay() {
    const { projectList, currentIndex } = List;
    const formPopup = document.querySelector('.form-popup');

    deleteForm();

    const div = document.createElement('div');
    div.classList.add('project-display');
    formPopup.appendChild(div);

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = projectList[currentIndex[0]].title;
    div.appendChild(title);

    const projectTop = document.createElement('div');
    projectTop.classList.add('project-top');
    div.appendChild(projectTop);

    const p = document.createElement('p');
    p.textContent = 'Task List: ';
    projectTop.append(p);

    const roundButton = document.createElement('button');
    roundButton.classList.add('round-button');
    roundButton.id = 'project-add';
    roundButton.type = 'button';
    roundButton.textContent = '+'
    roundButton.addEventListener('click', () => {
        createTaskForm();
    });
    projectTop.appendChild(roundButton);

    const projectTaskDisplay = document.createElement('div');
    projectTaskDisplay.classList.add('project-task-display');
    div.appendChild(projectTaskDisplay);

    displayTaskList();

    formPopup.style.display = 'flex';
}

function displayTaskList() {
    const { projectList, currentIndex } = List;

    const list = document.querySelector('.project-task-display');
    while (list.hasChildNodes()) {
        list.removeChild(list.lastChild);
    };
    for (let i = 0; i < projectList[currentIndex[0]].array.length; i++) {
        const button = document.createElement('button');
        button.classList.add('item');
        button.type = 'button';
        button.textContent = projectList[currentIndex[0]].array[i].title;
        button.dataset.index = i;
        list.appendChild(button);

        const div = document.createElement('div');
        div.classList.add('hide');
        div.textContent = 'X';
        div.dataset.index = i;
        div.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            projectList[currentIndex[0]].array.splice(index, 1);
            displayTaskList();
        });
        button.appendChild(div);
    }
}

export {
    addItemProject, displayProjectList, addTaskProject, displayTaskList,
    projectDisplay
};