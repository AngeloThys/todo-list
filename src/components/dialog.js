import { setView } from './main';
import * as storage from '../storage';

export function addCloseDialogListener() {
  const dialogList = document.querySelectorAll('dialog');
  const projectId = document.querySelector('.addTodo').dataset.project;
  const project = storage.getProject(projectId);

  dialogList.forEach((dialog) => {
    dialog.addEventListener('click', (e) => {
      if (e.target.localName === 'dialog') {
        setView(project);
        dialog.close();
      }
    });
  });
}
