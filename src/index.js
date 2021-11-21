import './style.css';
import createHeader from './header.js';
import createNav from './nav.js';
import createFormPopup from './form.js';

document.body.appendChild(createHeader());

const main = document.createElement('main');
document.body.appendChild(main);

main.appendChild(createNav());

const content = document.createElement('div');
content.classList.add('content');
main.appendChild(content);
content.appendChild(createFormPopup());