import * as components from '../components/components';

export default function setEmptyView() {
  const main = document.querySelector('main');
  const emptyView = document.createElement('div');
  const emptyTodoListMessage = createEmptyTodoListMessage();
  const addTodoButton = components.createAddTodoButton();

  emptyView.className = 'emptyView';

  emptyView.replaceChildren(emptyTodoListMessage, addTodoButton);

  main.replaceChildren(emptyView);
}

function createEmptyTodoListMessage() {
  const emptyTodoListMessage = document.createElement('h2');

  emptyTodoListMessage.className = 'emptyTodoListMessage';
  emptyTodoListMessage.textContent = 'Try adding a todo...';

  return emptyTodoListMessage;
}
