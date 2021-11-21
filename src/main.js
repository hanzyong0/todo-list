import createNav from "./nav";
import createContent from "./content";

function createMain() {
    const main = document.createElement('main');

    main.appendChild(createNav());
    main.appendChild(createContent());

    return main;
}

export default createMain;