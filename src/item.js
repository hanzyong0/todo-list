// Arrays to store data
const List = (() => {
    const todoList = [];
    const projectList = [];
    const currentIndex = [];
    return { todoList, projectList, currentIndex };
})();

// Factory function to create an item
const Item = ((title, description, priority, date) => {
    return { title, description, priority, date }
});


export { List, Item };