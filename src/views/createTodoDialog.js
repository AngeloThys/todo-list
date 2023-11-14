import * as storage from '../storage';
import { parseISO } from 'date-fns';
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
    const todoPriority = document.querySelector('.cyclePriorityButton').dataset.priority;
    const todoStatus = document.querySelector('#todoStatus').checked;

    const parsedTodoDueDate = parseISO(todoDueDate);

    todo.setTitle(todoTitle);
    todo.setDescription(todoDescription);
    todo.setDueDate(parsedTodoDueDate);
    todo.setPriority(todoPriority);
    todo.setStatus(todoStatus);

    storage.updateTodo(todo);
    todoForm.reset();
    main.setView(project);
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
      cyclePriorityButton.setAttribute('data-priority', "2");
      break;
    case '2':
      cyclePriorityButton.setAttribute('data-priority', "3");
      break;
    case '3':
      cyclePriorityButton.setAttribute('data-priority', "1");
      break;
  }
}

function createPriorityIcon() {
  const priorityIcon = document.createElement('img');
  let currentPriority = getCurrentPriority();

  switch (currentPriority) {
    case '1':
      priorityIcon.src = '../images/priority1.svg';
      break;
    case '2':
      priorityIcon.src = '../images/priority2.svg';
      break;
    case '3':
      priorityIcon.src = '../images/priority3.svg';
      break;
  }

  return priorityIcon;
}

function getCurrentPriority() {
  const cyclePriorityButton = document.querySelector('.cyclePriorityButton');
  let currentPriority;

  if (cyclePriorityButton) {
    currentPriority = cyclePriorityButton.dataset.priority;
  } else {
    currentPriority = '1';
  }

  return currentPriority;
}
