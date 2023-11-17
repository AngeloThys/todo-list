import priority1Image from '../images/priority1.svg';
import priority2Image from '../images/priority2.svg';
import priority3Image from '../images/priority3.svg';
import * as storage from '../storage';
import * as main from '../components/main';

export function createTodo() {
  const createTodoButton = document.querySelector('.createTodoButton');

  createTodoButton.addEventListener('click', (event) => {
    event.preventDefault();
    const projectId = document.querySelector('.addTodo').dataset.project;
    const project = storage.getProject(projectId);
    const todo = storage.createTodo(projectId);
    const todoForm = document.querySelector('.todoForm');
    const createTodo = document.querySelector('.createTodo');
    const todoTitle = document.querySelector('#todoTitle').value;
    const todoDescription = document.querySelector('#todoDescription').value;
    const todoDueDate = document.querySelector('#todoDueDate').value;
    const todoPriority = document.querySelector('.cyclePriorityButton').dataset
      .priority;
    const todoStatus = document.querySelector('.todoStatus').checked;

    todo.setTitle(todoTitle);
    todo.setDescription(todoDescription);
    todo.setDueDate(todoDueDate);
    todo.setPriority(todoPriority);
    todo.setStatus(todoStatus);

    storage.updateTodo(todo);
    todoForm.reset();
    main.setProjectView(project);
    createTodo.close();
  });
}

export function addPriorityButton() {
  const todoPriorityContainer = document.querySelector(
    '.todoPriorityContainer'
  );
  const priorityButton = createPriorityButton();

  todoPriorityContainer.appendChild(priorityButton);
}

function createPriorityButton() {
  const priorityButton = document.createElement('button');

  priorityButton.className = 'cyclePriorityButton';
  priorityButton.setAttribute('data-priority', '1');
  priorityButton.appendChild(createPriorityIcon());
  priorityButton.addEventListener('click', (event) => {
    event.preventDefault();
    cyclePriority();
    priorityButton.replaceChildren(createPriorityIcon());
  });

  return priorityButton;
}

function cyclePriority() {
  const cyclePriorityButton = document.querySelector('.cyclePriorityButton');
  let currentPriority = getCurrentPriority();

  switch (currentPriority) {
    case '1':
      cyclePriorityButton.setAttribute('data-priority', '2');
      break;
    case '2':
      cyclePriorityButton.setAttribute('data-priority', '3');
      break;
    case '3':
      cyclePriorityButton.setAttribute('data-priority', '1');
      break;
  }
}

function createPriorityIcon() {
  const priorityIcon = document.createElement('img');
  let currentPriority = getCurrentPriority();

  switch (currentPriority) {
    case '1':
      priorityIcon.src = priority1Image;
      break;
    case '2':
      priorityIcon.src = priority2Image;
      break;
    case '3':
      priorityIcon.src = priority3Image;
      break;
  }

  return priorityIcon;
}

function getCurrentPriority() {
  const cyclePriorityButton = document.querySelector('.cyclePriorityButton');
  let currentPriority;

  if (
    cyclePriorityButton?.dataset?.priority !== null &&
    cyclePriorityButton?.dataset?.priority !== undefined
  ) {
    currentPriority = cyclePriorityButton.dataset.priority;
  } else {
    currentPriority = '1';
  }

  return currentPriority;
}
