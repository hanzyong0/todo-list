function createDisplay() {
    const contentDisplay = document.createElement('div');
    contentDisplay.classList.add('content-display');

    const title = document.createElement('div');
    title.classList.add('title');
    contentDisplay.appendChild(title);

    const p = document.createElement('p');
    p.textContent = 'Description:';
    contentDisplay.appendChild(p);

    const descriptionDisplay = document.createElement('div');
    descriptionDisplay.classList.add('description-display');
    contentDisplay.appendChild(descriptionDisplay);

    const miscDisplay = document.createElement('div');
    miscDisplay.classList.add('misc-display');
    contentDisplay.appendChild(miscDisplay);

    const div1 = document.createElement('div');
    div1.textContent = 'Priority: ';
    miscDisplay.appendChild(div1);

    const priority = document.createElement('span');
    priority.classList.add('priority');
    div1.appendChild(priority);

    const div2 = document.createElement('div');
    div2.textContent = 'Due Date: ';
    miscDisplay.appendChild(div2);

    const dueDate = document.createElement('span');
    dueDate.classList.add('due-date');
    div1.appendChild(dueDate);

    const contentButton = document.createElement('div');
    contentButton.classList.add('content-button');
    contentDisplay.appendChild(contentButton);

    const edit = document.createElement('button');
    edit.classList.add('edit');
    edit.type = 'button';
    edit.textContent = 'Edit';
    contentButton.appendChild(edit);

    const delete1 = document.createElement('button');
    delete1.classList.add('delete');
    delete1.type = 'button';
    delete1.textContent = 'Delete';
    contentButton.appendChild(delete1);

    return contentDisplay;
}

export default createDisplay;