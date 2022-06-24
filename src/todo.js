import Left from './images/menu-left.png';
import Right from './images/menu-right.png';
import Up from './images/menu-up.png';
import Down from './images/menu-down.png';
import Dots from './images/dots-vertical.png';
import Plus from './images/plus-box.png';
import Minus from './images/minus-box.png';

function createTodo() {
  const todoList = document.createElement('div');
  todoList.classList.add('todoList');
  todoList.appendChild(todoTitle());
  todoList.appendChild(emptyTask());
  todoList.appendChild(emptyTask());
  todoList.appendChild(emptyTask());
  todoList.appendChild(emptyTask());
  todoList.appendChild(emptyTask());
  todoList.appendChild(emptyTask());
  todoList.appendChild(emptyTask());

  return todoList;
}

function todoTitle() {
  const todoHead = document.createElement('div');
  todoHead.classList.add('todoHead');

  const leftIcon = createIcon(Left);
  const rightIcon = createIcon(Right);
  const plusIcon = createIcon(Plus);
  const dotsIcon = createIcon(Dots);

  const headLeft = document.createElement('div');
  headLeft.classList.add('headLeft');

  const headRight = document.createElement('div');
  headRight.classList.add('headRight');

  const categoryName = document.createElement('p');
  categoryName.textContent = 'Category';
  categoryName.classList.add('categoryName');

  headLeft.appendChild(leftIcon);
  headLeft.appendChild(categoryName);
  headLeft.appendChild(rightIcon);
  headRight.appendChild(plusIcon);
  headRight.appendChild(dotsIcon);

  todoHead.appendChild(headLeft);
  todoHead.appendChild(headRight);
  return todoHead;
}

function createIcon(source) {
  const newIcon = new Image();
  newIcon.src = source;
  newIcon.classList.add('smallIcon');

  return newIcon;
}

function emptyTask() {
  const newTodo = document.createElement('div');
  newTodo.classList.add('newTodo', 'todoRow');
  const newLeft = document.createElement('div');
  newLeft.textContent = 'Add task';
  const newRight = document.createElement('div');
  newRight.appendChild(createIcon(Plus));
  newTodo.appendChild(newLeft);
  newTodo.appendChild(newRight);

  return newTodo;
}

export { createTodo };
