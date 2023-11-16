import { setProjectView } from './main';
import setTodayTodoView from '../views/todayTodoView';
import * as storage from '../storage';

export function addCloseDialogListener() {
  const dialogList = document.querySelectorAll('dialog');
  const projectId = document.querySelector('.addTodo').dataset.project;
  const project = storage.getProject(projectId);

  dialogList.forEach((dialog) => {
    dialog.addEventListener('click', (e) => {
      if (e.target.localName === 'dialog') {
        const view =
          document.querySelector('.todoContainerList').parentNode.className;

        if (view === 'projectTodoView') {
          setProjectView(project);
        } else if (view === 'todayTodoView') {
          setTodayTodoView();
        }

        dialog.close();
      }
    });
  });
}
