import createFormPopup from "./form";
import createDisplay from "./display";

function createContent() {
    const content = document.createElement('div');
    content.classList.add('content');

    content.appendChild(createFormPopup());
    content.appendChild(createDisplay());

    return content;
}

export default createContent;