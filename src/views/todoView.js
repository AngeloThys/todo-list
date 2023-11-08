export default function setTodoView(project) {
  const main = document.querySelector('main');
  const todoList = project.getTodoList();
  const container = document.createElement('div');
  const addTodoButton = document.createElement('button');

  container.className = 'todoView';

  todoList.forEach((todo) => {
    createTodoElement(project, todo);
  });

  addTodoButton.className = 'addTodo';
  addTodoButton.addEventListener('click', showTodoCreationModal); // the todo buttons should invoke a function that opens a modal with a todo creation form.
  container.appendChild(addTodoButton);

  main.replaceChildren(container);
}

function createTodoElement(project, todo) {
  const priorityButton = document.createElement('button');
  const expandButton = document.createElement('button');
  const deleteButton = document.createElement('button');
  const title = document.createElement('h2');
  const description = document.createElement('p');
  const dueDate = document.createElement(''); // figure out how to structure.
  const statusCheckbox = document.createElement('input'); // add the type checkbox

  priorityButton.className = 'changePriority';
  priorityButton.src = createPriorityIcon(todo);
  priorityButton.addEventListener('click', () => {
    cyclePriority();
    priorityButton.src = createPriorityIcon(todo);
  });

  expandButton.className = 'openTodo';
  expandButton.addEventListener('click', showTodoViewModal);

  deleteButton.className = 'deleteTodo';
  deleteButton.addEventListener('click', () => {
    project.removeTodo(todo); // this removes the todo from the project but not from the local storage.
    setTodoView(project);
  });

  title.className = 'titleTodo';
  title.textContent = todo.title;

  description.className = 'descriptionTodo';
  description.textContent = todo.description;
}

function cyclePriority(todo) {
  const currentPriority = todo.getPriority();

  switch (currentPriority) {
    case 1:
      todo.setPriority(2);
      break;
    case 2:
      todo.setPriority(3);
      break;
    case 3:
      todo.setPriority(1);
      break;
  }
}

function createPriorityIcon(todo) {
  const priorityIcon = document.createElement('img');
  switch (todo.priority) {
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
