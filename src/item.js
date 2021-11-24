export const todoList = [];
export const projectList = [];
export const currentIndex = [];

// Factory function to create an item
const Item = (title, description, priority, date) => {
    return { title, description, priority, date }
};

// Factory function to create a project
const Project = (title) => {

    return { title, array: [] };
};

// Factory function to create a task
const Task = (title) => {

    return { title }
};

// Store todo list array to local storage
function storeTodo() {

    localStorage.setItem('todoList', JSON.stringify(todoList));
}

// Store project list array to local storage
function storeProject() {

    localStorage.setItem('projectList', JSON.stringify(projectList));
}

export { Item, Project, Task, storeTodo, storeProject };