import { setProjectView } from './main';
import setTodayTodoView from '../views/todayTodoView';
import setWeekTodoView from '../views/weekTodoView';
import * as storage from '../storage';

export function addCloseDialogListener() {
  const dialogList = document.querySelectorAll('dialog');
  const projectId = document.querySelector('.addTodo').dataset.project;
  const project = storage.getProject(projectId);

  dialogList.forEach((dialog) => {
    dialog.addEventListener('click', (e) => {
      if (e.target.localName === 'dialog') {
        const view =
          document.querySelector('main').childNodes[0].className;

        if (view === 'projectTodoView' || view === 'emptyView') {
          setProjectView(project);
        } else if (view === 'todayTodoView') {
          setTodayTodoView();
        } else if (view === 'weekTodoView') {
          setWeekTodoView();
        }

        dialog.close();
      }
    });
  });
}
