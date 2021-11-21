function createTodoNav() {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');

    const containerHeader = document.createElement('div');
    containerHeader.classList.add('container-header');
    todoContainer.appendChild(containerHeader);

    const p = document.createElement('p');
    p.textContent = 'Todo';
    containerHeader.appendChild(p);

    const roundButton = document.createElement('button');
    roundButton.classList.add('round-button');
    roundButton.type = 'button';
    roundButton.textContent = '+';
    containerHeader.appendChild(roundButton);

    const listDisplay = document.createElement('div');
    listDisplay.classList.add('list-display');
    todoContainer.appendChild(listDisplay);

    const item = document.createElement('button');
    item.textContent = 'hi';
    item.classList.add('item');
    listDisplay.appendChild(item);

    const hide = document.createElement('div');
    hide.classList.add('hide');
    hide.textContent = 'X';
    listDisplay.appendChild(hide);

    return todoContainer;
}

function createHr() {
    const hr = document.createElement('hr');

    return hr;
}

function createProjectNav() {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    const containerHeader = document.createElement('div');
    containerHeader.classList.add('container-header');
    projectContainer.appendChild(containerHeader);

    const p = document.createElement('p');
    p.textContent = 'Project';
    containerHeader.appendChild(p);

    const roundButton = document.createElement('button');
    roundButton.classList.add('round-button');
    roundButton.type = 'button';
    roundButton.textContent = '+';
    containerHeader.appendChild(roundButton);

    const listDisplay = document.createElement('div');
    listDisplay.classList.add('list-display');
    projectContainer.appendChild(listDisplay);

    const item = document.createElement('button');
    item.textContent = 'hi';
    item.classList.add('item');
    listDisplay.appendChild(item);

    const hide = document.createElement('div');
    hide.classList.add('hide');
    hide.textContent = 'X';
    listDisplay.appendChild(hide);

    return projectContainer;
}

function createNav() {
    const nav = document.createElement('nav');

    nav.appendChild(createTodoNav());
    nav.appendChild(createHr());
    nav.appendChild(createProjectNav());

    return nav;
}

export default createNav;