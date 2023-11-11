import * as storage from '../storage';
import { setView } from './main';

export function setProjectContainerContent() {
  const projectsContainer = document.querySelector('.projects');
  const projectsHeader = createProjectsHeader();
  const projectButtonList = createProjectButtonList();
  const addProjectButton = createAddProjectButton();

  projectsContainer.replaceChildren(
    projectsHeader,
    projectButtonList,
    addProjectButton
  );
}

function createProjectsHeader() {
  const projectsHeader = document.createElement('h2');

  projectsHeader.textContent = 'Projects';

  return projectsHeader;
}

function createProjectButtonList() {
  const projectButtonListContainer = document.createElement('div');
  const projectList = storage.getProjectsValue();

  projectButtonListContainer.className = 'projectList';
  projectList.forEach((project) => {
    projectButtonListContainer.appendChild(createProjectButton(project));
  });

  return projectButtonListContainer;
}

function createProjectButton(project) {
  const projectButton = document.createElement('button');

  projectButton.className = 'project';
  projectButton.textContent = project.getName();
  projectButton.addEventListener('click', () => {
    setView(project);
  });

  return projectButton;
}

function createAddProjectButton() {
  const addProjectButton = document.createElement('button');
  const createProjectDialog = document.querySelector('.createProject');

  addProjectButton.className = 'addProject';
  addProjectButton.textContent = 'Add a project'; // this needs an svg
  addProjectButton.addEventListener('click', () => {
    createProjectDialog.showModal();
  });

  return addProjectButton;
}
