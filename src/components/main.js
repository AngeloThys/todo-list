import setEmptyView from '../views/emptyView';
import setTodoView from '../views/todoView';
import * as filters from '../filters';

export function setView(project) {
  const todoList = filters.getProjectTodos(project.getId());

  if (todoList.length === 0) {
    setEmptyView();
  } else {
    setTodoView(project);
  }
}

export function setDefaultView() {
  const projectList = storage.getProjectsValue();
  const defaultProjectId = 0;
  const defaultProject = projectList.find(
    (project) => project.getId() === defaultProjectId
  );

  setView(defaultProject);
}
