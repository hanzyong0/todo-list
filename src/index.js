import './style.css';
import * as buttons from './buttons.js';

const d = new Date();
const year = d.getFullYear();
const month = d.getMonth() + 1;
const day = d.getDate();
const today = `${year}/${month}/${day}`;
console.log(today);

buttons.addButton();
buttons.formDeleteButton();
buttons.saveButton();
buttons.displayDeleteButton();