// Arrays to store data
const List = (() => {
    const todoList = [];
    const projectList = [];
    const currentIndex = [];
    return { todoList, projectList, currentIndex };
})();

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

export { List, Item, Project, Task };