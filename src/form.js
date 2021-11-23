import { saveButton, formDeleteButton } from './buttons';

function createItemForm() {
    const formPopup = document.querySelector('.form-popup');

    // Form
    const formContainer = document.createElement('form');
    formContainer.classList.add('form-container');
    formPopup.appendChild(formContainer);

    // Title
    const formTitleControl = document.createElement('div');
    formTitleControl.classList.add('form-title-control');
    formContainer.appendChild(formTitleControl);

    const title = document.createElement('label');
    title.htmlFor = 'form-title';
    title.textContent = 'Title:'
    formTitleControl.appendChild(title);

    const br1 = document.createElement('br');
    formTitleControl.appendChild(br1);

    const formTitle = document.createElement('input');
    formTitle.type = 'text';
    formTitle.id = 'form-title'
    formTitleControl.appendChild(formTitle);

    // Description
    const formDescriptionControl = document.createElement('div');
    formDescriptionControl.classList.add('form-description-control');
    formContainer.appendChild(formDescriptionControl);

    const description = document.createElement('label');
    description.htmlFor = 'form-description';
    description.textContent = 'Description:'
    formDescriptionControl.appendChild(description);

    const br2 = document.createElement('br');
    formDescriptionControl.appendChild(br2);

    const formDescription = document.createElement('textarea');
    formDescription.id = 'form-description'
    formDescriptionControl.appendChild(formDescription);

    // Misc
    const formMiscControl = document.createElement('div');
    formMiscControl.classList.add('form-misc-control');
    formContainer.appendChild(formMiscControl);

    const div1 = document.createElement('div');
    formMiscControl.appendChild(div1);

    const label1 = document.createElement('label');
    label1.for = 'priority';
    label1.textContent = 'Priority: ';
    div1.appendChild(label1);

    const priority = document.createElement('input');
    priority.type = 'number';
    priority.id = 'priority';
    div1.appendChild(priority);

    const div2 = document.createElement('div');
    formMiscControl.appendChild(div2);

    const label2 = document.createElement('label');
    label2.for = 'date';
    label2.textContent = 'Due Date: ';
    div2.appendChild(label2);

    const date = document.createElement('input');
    date.type = 'date';
    date.id = 'date';
    div2.appendChild(date);

    // Buttons
    const contentButton = document.createElement('div');
    contentButton.classList.add('content-button');
    formContainer.appendChild(contentButton);

    const save = document.createElement('button');
    save.classList.add('edit');
    save.id = 'save';
    save.type = 'button';
    save.textContent = 'Save';
    save.addEventListener('click', () => {
        saveButton();
    });
    contentButton.appendChild(save);

    const delete1 = document.createElement('button');
    delete1.classList.add('delete');
    delete1.id = 'form-delete';
    delete1.type = 'button';
    delete1.textContent = 'Delete';
    delete1.addEventListener('click', () => {
        formDeleteButton();
    });
    contentButton.appendChild(delete1);
}

function deleteForm() {
    const formPopup = document.querySelector('.form-popup');

    while (formPopup.hasChildNodes()) {
        formPopup.removeChild(formPopup.lastChild);
    };
}

export { createItemForm, deleteForm };