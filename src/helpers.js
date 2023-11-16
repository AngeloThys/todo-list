import * as filters from './filters';
import * as components from './components/components';
import * as storage from './storage';

export function idGenerator() {
  return function (idItem) {
    let id;

    if (idItemExists(idItem)) {
      id = parseInt(localStorage.getItem(idItem));
    } else {
      localStorage.setItem(idItem, '0');
      id = parseInt(localStorage.getItem(idItem));
    }

    id++;

    localStorage.setItem(idItem, id);

    return id;
  };
}

function idItemExists(idItem) {
  if (localStorage.getItem(idItem)) {
    return true;
  } else {
    return false;
  }
}

export function createFilterTodoElementList(filter) {
  const todoElementContainer = document.createElement('div');
  let todos;

  if (filter === 'today') {
    todos = filters.getTodayOrBeforeTodos();
  } else if (filter === 'week') {
    // todos = filters.getWeekTodos();
  }

  todoElementContainer.className = 'todoContainerList';
  todos.forEach((todo) => {
    const project = storage.getProject(todo.getProjectId()); 
    todoElementContainer.appendChild(createTodoElement(project, todo));
  });

  return todoElementContainer;
}

export function createProjectTodoElementList(project) {
  const todos = filters.getProjectTodos(project.getId());
  const todoElementContainer = document.createElement('div');

  todoElementContainer.className = 'todoContainerList';
  todos.forEach((todo) => {
    todoElementContainer.appendChild(createTodoElement(project, todo));
  });

  return todoElementContainer;
}

function createTodoElement(project, todo) {
  const todoContainer = components.createTodoContainer(todo);
  const priorityButton = components.createPriorityButton(todo);
  const expandButton = components.createExpandButton();
  const deleteButton = components.createDeleteButton(project, todo);
  const titleInput = components.createTitleInput(todo);
  const descriptionP = components.createDescriptionP(todo);
  const dueDateInput = components.createDueDateInput(todo);
  const statusInput = components.createStatusInput(todo);

  todoContainer.replaceChildren(
    priorityButton,
    expandButton,
    deleteButton,
    titleInput,
    descriptionP,
    dueDateInput,
    statusInput
  );

  return todoContainer;
}