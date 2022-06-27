const storageHandler = (() => {
  const setupLocal = () => {
    if (localStorage.todo) {
      console.log('Fetched existing todo object.');
      return true;
    }
    localStorage.todo = JSON.stringify([]);
    console.log('No todo object found. Creating new todo object.');
    return false;
  };

  const getTasks = () => {
    setupLocal();
    const todo = JSON.parse(localStorage.todo);
    return todo;
  };

  const clearTasks = () => {
    localStorage.clear();
  };

  const addNewTask = (taskName) => {
    const todoObject = JSON.parse(localStorage.todo);
    todoObject.push({
      name: taskName,
      description: null,
      duedate: null,
      priority: null,
    });
    localStorage.todo = JSON.stringify(todoObject);
  };

  const changeTaskDesc = (task, description) => {
    const todoObject = JSON.parse(localStorage.todo);
    todoObject.forEach((element) => {
      if (element.name === task.name) {
        element.description = description;
      }
    });
    localStorage.todo = JSON.stringify(todoObject);
  };

  return {
    setupLocal,
    addNewTask,
    getTasks,
    clearTasks,
    changeTaskDesc,
  };
})();

export { storageHandler };
