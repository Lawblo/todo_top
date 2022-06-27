import { pageBuilder } from './pageBuilder.js';
import { storageHandler } from './storageHandler.js';

const eventHandler = (() => {
  const newTaskEvent = () => {
    const new_name = document.getElementById('new_name').value;
    if (!new_name) {
      console.log('EMPTY INPUT NOT VALID');
      return;
    }
    console.log(`ADDING ${new_name}`);
    storageHandler.addNewTask(new_name);

    pageBuilder.refreshContent();
  };

  const clearContentEvent = () => {
    console.log('REMOVING ALL TODOS');
    storageHandler.clearTasks();
    pageBuilder.refreshContent();
  };

  const expandEvent = (event, task) => {
    const todoLine = event.target.parentNode;
    pageBuilder.expandItem(todoLine, task);
  };

  const addDescEvent = (event, task) => {
    const description = document.getElementById('descInput').value;
    storageHandler.changeTaskDesc(task, description);
  };

  return {
    newTaskEvent,
    clearContentEvent,
    expandEvent,
    addDescEvent,
  };
})();

export { eventHandler };
