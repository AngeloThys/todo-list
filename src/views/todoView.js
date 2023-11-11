import * as storage from '../storage.js';
import * as filters from '../filters.js';
import * as components from '../components/components.js';

export default function setTodoView(project) {
  const main = document.querySelector('main');
  const todoView = document.createElement('div');
  const todoElementList = createTodoElementList(project);
  const addTodoButton = components.createAddTodoButton();

  todoView.className = 'todoView';
  todoView.replaceChildren(todoElementList);
  todoView.appendChild(addTodoButton);

  main.replaceChildren(todoView);
}

function createTodoElementList(project) {
  const todos = filters.getProjectTodos(project.getId());
  let todoElementList;

  todos.forEach((todo) => {
    todoElementList.push(createTodoElement(todo));
  });

  return todoElementList;
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
