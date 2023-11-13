import { setDefaultView } from './components/main';
import { setProjectContainerContent } from './components/sidebar';
import { addCloseDialogListener } from './components/dialog';
import { createProject } from './views/createProjectDialog';

setProjectContainerContent();
setDefaultView();
addCloseDialogListener();
createProject();