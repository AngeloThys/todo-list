import { setDefaultView } from './components/main';
import {
  setProjectContainerContent,
  setTodayEventListener,
} from './components/sidebar';
import { addCloseDialogListener } from './components/dialog';
import { createProject } from './views/createProjectDialog';
import { createTodo, addPriorityButton } from './views/createTodoDialog';

setTodayEventListener();
setProjectContainerContent();
setDefaultView();
addCloseDialogListener();
createProject();
addPriorityButton();
createTodo();
