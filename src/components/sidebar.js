import * as storage from '../storage';
import setView from './main';

export function listProjectNames() {
  const projectListContainer = document.querySelector('.projectList');
  const projectButtonList = createProjectButtonList();

  projectListContainer.replaceChildren(projectButtonList);
}

function createProjectButtonList() {
  const projectList = storage.getProjectsValue();
  let projectButtonList;

  projectList.forEach((project) => {
    projectButtonList.push(createProjectButton(project));
  });

  return projectButtonList;
}

function createProjectButton(project) {
  const projectButton = document.createElement('button');

  button.className = 'project';
  button.textContent = project.getName();
  button.addEventListener('click', () => {
    setView(project);
  });

  return projectButton;
}
