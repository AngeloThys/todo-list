import { setDefaultView } from './components/main';
import { setProjectContainerContent } from './components/sidebar';
import { addCloseDialogListener } from './components/dialog';
import { createProject } from './views/createProjectDialog';
import { createTodo, addPriorityButton } from './views/createTodoDialog';

setProjectContainerContent();
setDefaultView();
addCloseDialogListener();
createProject();
addPriorityButton();
createTodo();
