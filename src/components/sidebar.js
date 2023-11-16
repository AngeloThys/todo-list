import * as storage from '../storage';
import { setProjectView } from './main';
import setTodayTodoView from '../views/todayTodoView';

export function setTodayEventListener() {
  const todayFilterButton = document.querySelector('.sortToday');

  todayFilterButton.addEventListener('click', () => {
    setTodayTodoView();
  });
}

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
  const projectButtonP = createProjectButtonP(project);
  const projectButtonLogo = createProjectButtonLogo();

  projectButton.className = 'project';
  projectButton.setAttribute('data-project-id', project.getId());
  projectButton.replaceChildren(projectButtonP, projectButtonLogo);
  projectButton.addEventListener('click', () => {
    setProjectView(project);
  });
  projectButton.addEventListener('mouseenter', () => {
    projectButtonP.classList.add('hover');
    projectButtonLogo.classList.add('hover');
  });
  projectButton.addEventListener('mouseleave', () => {
    projectButtonP.classList.remove('hover');
    projectButtonLogo.classList.remove('hover');
  });

  return projectButton;
}

function createProjectButtonP(project) {
  const projectButtonP = document.createElement('p');

  projectButtonP.className = 'projectName';
  projectButtonP.textContent = project.getName();

  return projectButtonP;
}

function createProjectButtonLogo() {
  const projectButtonLogo = document.createElement('img');

  projectButtonLogo.className = 'projectLogo';
  projectButtonLogo.src = '../images/arrow-right.svg';

  return projectButtonLogo;
}

function createAddProjectButton() {
  const addProjectButton = document.createElement('button');
  const createProjectDialog = document.querySelector('.createProject');
  const addProjectLogo = createAddProjectLogo();

  addProjectButton.className = 'addProject';
  addProjectButton.appendChild(addProjectLogo); // this needs an svg
  addProjectButton.addEventListener('click', () => {
    createProjectDialog.showModal();
  });

  return addProjectButton;
}

function createAddProjectLogo() {
  const addTodoLogo = document.createElement('img');

  addTodoLogo.src = '../images/plus.svg';
  addTodoLogo.className = 'addProjectLogo';

  return addTodoLogo;
}
