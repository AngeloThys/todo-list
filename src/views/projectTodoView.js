import * as components from '../components/components.js';
import * as helpers from '../helpers.js';

export default function setprojectTodoView(project) {
  const main = document.querySelector('main');
  const projectTodoView = document.createElement('div');
  const todoElementList = helpers.createProjectTodoElementList(project);
  const addTodoButton = components.createAddTodoButton();

  projectTodoView.className = 'projectTodoView';
  projectTodoView.replaceChildren(todoElementList);
  projectTodoView.appendChild(addTodoButton);

  main.replaceChildren(projectTodoView);
}
