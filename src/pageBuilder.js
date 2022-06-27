import Plus from './images/plus.png';
import { eventHandler } from './eventHandler.js';
import { storageHandler } from './storageHandler';
import Down from './images/chevron-down.png';
import Left from './images/chevron-left.png';

const pageBuilder = (() => {
  const templateSetup = () => {
    const body = document.querySelector('body');

    const outerContainer = document.createElement('div');
    outerContainer.classList.add('outerContainer');

    const clearLine = document.createElement('div');
    clearLine.classList.add('clearLine');
    const clearButton = document.createElement('p');
    clearButton.classList.add('clearButton');
    clearButton.textContent = 'X';
    clearButton.addEventListener('click', eventHandler.clearContentEvent);
    clearLine.appendChild(clearButton);
    outerContainer.appendChild(clearLine);

    const pageHeader = document.createElement('h1');
    pageHeader.classList.add('pageHeader');
    pageHeader.textContent = ': t o d o :';
    outerContainer.appendChild(pageHeader);

    const pageContent = document.createElement('div');
    pageContent.classList.add('pageContent');
    outerContainer.appendChild(pageContent);

    body.appendChild(outerContainer);

    displayTasks();
    newTaskLine();
  };

  const displayTasks = () => {
    console.log('Adding tasks');

    const todoItems = storageHandler.getTasks();

    todoItems.forEach((task) => displayTask(task));
  };

  const displayTask = (task) => {
    console.log(`Adding ${task.name}`);
    const pageContent = document.querySelector('.pageContent');

    const taskLine = document.createElement('div');
    taskLine.classList.add('todoLine');

    const iconLeft = new Image();
    iconLeft.src = Left;
    iconLeft.classList.add('newIcon');
    taskLine.appendChild(iconLeft);
    iconLeft.addEventListener('click', (e) =>
      eventHandler.expandEvent(e, task)
    );
    const taskName = document.createElement('p');
    taskName.classList.add('taskName');
    taskName.textContent = task.name;
    taskLine.appendChild(taskName);

    const taskDue = document.createElement('div');
    taskDue.classList.add('taskDue');
    taskLine.appendChild(taskDue);

    const dueTitle = document.createElement('p');
    dueTitle.classList.add('dueTitle');
    dueTitle.textContent = 'Due Date:';

    const dueValue = document.createElement('p');
    dueValue.classList.add('dueValue');
    dueValue.textContent = task.duedate ? task.duedate : 'N/A';

    taskDue.appendChild(dueTitle);
    taskDue.appendChild(dueValue);

    const taskPrio = document.createElement('div');
    taskPrio.classList.add('taskPrio');

    const prioTitle = document.createElement('p');
    prioTitle.textContent = 'Priority:';
    prioTitle.classList.add('prioTitle');

    const prioVal = document.createElement('p');
    prioVal.classList.add('prioVal');
    prioVal.textContent = task.priority ? task.priority : 'N/A';

    taskPrio.appendChild(prioTitle);
    taskPrio.appendChild(prioVal);

    taskLine.appendChild(taskPrio);

    pageContent.appendChild(taskLine);
  };

  const newTaskLine = () => {
    console.log('Creating new task line');
    const pageContent = document.querySelector('.pageContent');

    const newLine = document.createElement('div');
    newLine.classList.add('newLine');
    newLine.classList.add('todoLine');

    const newIcon = new Image();
    newIcon.src = Plus;
    newIcon.classList.add('newIcon');
    console.log('Adding event');
    newIcon.addEventListener('click', eventHandler.newTaskEvent);
    newLine.appendChild(newIcon);

    const newInput = document.createElement('input');
    newInput.classList.add('newTask', 'todoLine');
    newInput.setAttribute('placeholder', 'new task');
    newInput.setAttribute('name', 'new_name');
    newInput.setAttribute('id', 'new_name');
    newLine.appendChild(newInput);

    pageContent.appendChild(newLine);
  };

  const clearContent = () => {
    const pageContent = document.querySelector('.pageContent');
    while (pageContent.firstChild) {
      pageContent.removeChild(pageContent.firstChild);
    }
  };

  const refreshContent = () => {
    clearContent();
    displayTasks();
    newTaskLine();
  };

  const removeChildren = (node) => {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  };

  const expandItem = (line, task) => {
    removeChildren(line);

    const itemDescription = line;
    itemDescription.classList.add('expandedItem');
    itemDescription.classList.remove('todoLine');

    const iconDown = new Image();
    iconDown.src = Down;
    iconDown.classList.add('newIcon');
    itemDescription.appendChild(iconDown);
    iconDown.addEventListener('click', refreshContent);

    const taskName = document.createElement('div');
    taskName.classList.add('taskName');
    taskName.textContent = task.name;
    itemDescription.appendChild(taskName);

    const descInput = document.createElement('textarea');
    console.log(task.description);
    descInput.setAttribute('id', 'descInput');
    descInput.setAttribute('placeholder', 'Describe task');
    descInput.classList.add('descInput');

    const descText = document.createElement('p');
    descText.textContent = task.description ? task.description : null;

    descInput.appendChild(descText);
    itemDescription.appendChild(descInput);

    const confirmDesc = new Image();
    confirmDesc.src = Plus;
    confirmDesc.setAttribute('id', 'confirmDesc');
    confirmDesc.addEventListener('click', (e) => {
      eventHandler.addDescEvent(e, task);
    });
    itemDescription.appendChild(confirmDesc);
  };

  return {
    templateSetup,
    newTaskLine,
    displayTasks,
    clearContent,
    refreshContent,
    removeChildren,
    expandItem,
  };
})();

export { pageBuilder };
