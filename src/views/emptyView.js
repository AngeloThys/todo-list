import * as components from '../components/components';
import { createProjectHeader } from './projectTodoView';

export default function setEmptyView(project) {
  const main = document.querySelector('main');
  const emptyView = document.createElement('div');
  const emptyTodoListHeader = document.createElement('div');
  const projectHeader = createProjectHeader(project);
  const emptyTodoListMessage = createEmptyTodoListMessage();
  const addTodoButton = components.createAddTodoButton();

  emptyTodoListHeader.className = 'emptyHeader';
  emptyTodoListHeader.replaceChildren(emptyTodoListMessage, addTodoButton);

  emptyView.className = 'emptyView';
  emptyView.replaceChildren(projectHeader, emptyTodoListHeader);
  
  main.replaceChildren(emptyView);
}

function createEmptyTodoListMessage() {
  const emptyTodoListMessage = document.createElement('h2');

  emptyTodoListMessage.className = 'emptyTodoListMessage';
  emptyTodoListMessage.textContent = 'Try adding a todo...';

  return emptyTodoListMessage;
}
