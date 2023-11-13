import * as storage from './storage';

// Todo lists based on certain criteria

// Retrieve todos that belong to a specific project
export function getProjectTodos(projectId) {
  const todos = storage.getTodosValue();

  return todos.filter((todo) => todo.getProjectId() === projectId);
}
