import * as storage from '../storage.js';
import * as filters from '../filters.js';

export default function setTodoView(project) {
  const main = document.querySelector('main');
  const todos = filters.getProjectTodos(project.getId());
  const container = document.createElement('div');
  const addTodoButton = document.createElement('button');

  container.className = 'todoView';

  todoList.forEach((todo) => {
    createTodoElement(project, todo); // manage the created todo container elements
  });

  addTodoButton.className = 'addTodo';
  addTodoButton.addEventListener('click', showTodoCreationModal); // the todo buttons should invoke a function that opens a modal with a todo creation form.
  container.appendChild(addTodoButton);

  main.replaceChildren(container);
}

function createTodoElement(project, todo) {
  const todoContainer = createTodoContainer(todo);
  const priorityButton = createPriorityButton(todo);
  const expandButton = createExpandButton();
  const deleteButton = createDeleteButton(project, todo);
  const titleInput = createTitleInput(todo);
  const descriptionP = createDescriptionP(todo);
  const dueDateInput = createDueDateInput(todo);
  const statusInput = createStatusInput(todo);

  todoContainer.replaceChildren(priorityButton, expandButton, deleteButton, titleInput, descriptionP, dueDateInput, statusInput);

  return todoContainer;
}

function createTodoContainer(todo) {
  const todoContainer = document.createElement('div');

  todoContainer.className = 'todoContainer';

  return todoContainer;
}

function createStatusInput(todo) {
  const statusInput = document.createElement('input');
  const todoStatus = todo.getStatus();

  statusInput.type = 'checkbox';
  statusInput.className = 'updateStatus';
  statusInput.checked = todoStatus;
  statusInput.addEventListener('change', () => {
    updateTodoStatus();
  });

  return statusInput;
}

function updateTodoStatus(status, todo) {
  todo.setStatus(status);
  storage.updateTodo(todo);
}

function createDueDateInput(todo) {
  const dueDateInput = document.createElement('input');
  const todoDueDate = todo.getDueDate();

  dueDateInput.type = 'date';
  dueDateInput.className = 'updateDueDate';
  dueDateInput.value = todoDueDate;
  dueDateInput.addEventListener('change', () => {
    let date = dueDateInput.value;
    updateTodoDueDate(date, todo);
  });

  return dueDateInput;
}

function updateTodoDueDate(date, todo) {
  todo.setDueDate(date);
  storage.updateTodo(todo);
}

function createDescriptionP(todo) {
  const descriptionP = document.createElement('p');
  const modifyTodoDialog = document.querySelector('.modifyTodo');

  descriptionP.className = 'descriptionTodo';
  descriptionP.textContent = todo.getDescription();
  descriptionP.addEventListener('click', () => {
    modifyTodoDialog.showModal();
  });

  return descriptionP;
}

function createTitleInput(todo) {
  const titleInput = document.createElement('input');
  const todoTitle = todo.getTitle();

  titleInput.type = 'text';
  titleInput.className = 'updateTitle';
  titleInput.value = todoTitle;
  // we could swap out keyup for change as change is processed before click
  let keyupTimeout;
  titleInput.addEventListener('keyup', () => {
    clearTimeout(keyupTimeout);
    let title = titleInput.value;
    keyupTimeout = setTimeout(updateTodoTitle(title, todo), 2000);
  });

  return titleInput;
}

function updateTodoTitle(title, todo) {
  todo.setTitle(title);
  storage.updateTodo(todo);
}

function createDeleteButton(project, todo) {
  const deleteButton = document.createElement('button');
  const deleteIcon = document.createElement('img');

  deleteIcon.src = url('../images/delete.svg');

  deleteButton.className = 'deleteTodo';
  deleteButton.appendChild(deleteIcon);
  deleteButton.addEventListener('click', () => {
    storage.deleteTodo(todo);
    setTodoView(project);
  });

  return deleteButton;
}

function createExpandButton() {
  const expandButton = document.createElement('button');
  const expandIcon = document.createElement('img');
  const modifyTodoDialog = document.querySelector('.modifyTodo');

  expandIcon.src = url('../images/maximize.svg');

  expandButton.className = 'openTodo';
  expandButton.appendChild(expandIcon);
  expandButton.addEventListener('click', () => {
    modifyTodoDialog.showModal();
  });

  return expandButton;
}

function createPriorityButton(todo) {
  const priorityButton = document.createElement('button');

  priorityButton.className = 'changePriority';
  priorityButton.appendChild(createPriorityIcon(todo));
  priorityButton.addEventListener('click', () => {
    cyclePriority(todo);
    priorityButton.replaceChildren(createPriorityIcon(todo));
  });

  return priorityButton;
}

function cyclePriority(todo) {
  const currentPriority = todo.getPriority();

  switch (currentPriority) {
    case 1:
      updateTodoPriority(2, todo);
      break;
    case 2:
      updateTodoPriority(3, todo);
      break;
    case 3:
      updateTodoPriority(1, todo);
      break;
  }
}

function updateTodoPriority(priority, todo) {
  todo.setPriority(priority);
  storage.updateTodo(todo);
}

function createPriorityIcon(todo) {
  const priorityIcon = document.createElement('img');
  const currentPriority = todo.getPriority();

  switch (currentPriority) {
    case 1:
      priorityIcon.src = url('./src/images/priority1.svg');
      break;
    case 2:
      priorityIcon.src = url('./src/images/priority2.svg');
      break;
    case 3:
      priorityIcon.src = url('./src/images/priority3.svg');
      break;
  }

  return priorityIcon;
}
