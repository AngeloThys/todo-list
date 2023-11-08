import setEmptyView from '../views/emptyView';
import setTodoView from '../views/todoView';

export default function setView(project) {
  const todos = project.getTodoList();
  if (todos.length === 0) {
    setEmptyView();
  } else {
    setTodoView(project);
  }
}
