import setEmptyView from '../views/emptyView';
import setTodoView from '../views/todoView';
import * as filters from '../filters';

export default function setView(project) {
  const todoList = filters.getProjectTodos(project.getId());
  
  if (todoList.length === 0) {
    setEmptyView();
  } else {
    setTodoView(project);
  }
}
