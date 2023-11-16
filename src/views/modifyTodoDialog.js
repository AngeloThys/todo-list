import * as components from '../components/components';
import * as storage from '../storage';

export function populateModifyTodoDialog(todo) {
  const modifyTodoDialog = document.querySelector('.modifyTodo');
  const modifyTodoContainer = document.createElement('div');
  const todoProject = storage.getProject(todo.getProjectId());
  const priorityButton = components.createPriorityButton(todo);
  const deleteButton = components.createDeleteButton(todoProject, todo);
  const titleInput = components.createTitleInput(todo);
  const descriptionTextarea = createDescriptionTextarea(todo);
  const dueDateInput = components.createDueDateInput(todo);
  const statusInput = components.createStatusInput(todo);

  modifyTodoContainer.className = 'modifyTodoContainer';

  modifyTodoContainer.replaceChildren(
    priorityButton,
    deleteButton,
    titleInput,
    descriptionTextarea,
    dueDateInput,
    statusInput
  );

  modifyTodoDialog.replaceChildren(modifyTodoContainer);
}

function createDescriptionTextarea(todo) {
  const descriptionTextarea = document.createElement('textarea');

  descriptionTextarea.className = 'updateDescription';
  descriptionTextarea.value = todo.getDescription();
  descriptionTextarea.addEventListener('change', () => {
    let description = descriptionTextarea.value;
    updateTodoDescription(description, todo);
  });

  return descriptionTextarea;
}

function updateTodoDescription(description, todo) {
  todo.setDescription(description);
  storage.updateTodo(todo);
}
