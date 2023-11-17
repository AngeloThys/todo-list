import setEmptyView from '../views/emptyView';
import { setProjectTodoView } from '../views/projectTodoView';
import * as filters from '../filters';
import * as storage from '../storage';

export function setProjectView(project) {
  const todoList = filters.getProjectTodos(project.getId());

  removeActiveClass();
  setActiveClass(project);

  if (todoList.length === 0) {
    setEmptyView(project);
  } else {
    setProjectTodoView(project);
  }

  setAddTodoProjectId(project);
}

export function setDefaultView() {
  const projectList = storage.getProjectsValue();
  const defaultProjectId = 1;
  const defaultProject = projectList.find(
    (project) => project.getId() === defaultProjectId
  );

  setProjectView(defaultProject);
}

function setAddTodoProjectId(project) {
  const projectId = project.getId();
  const addTodoButton = document.querySelector('.addTodo');

  addTodoButton.setAttribute('data-project', projectId);
}

function setActiveClass(project) {
  const projectButtonList = document.querySelectorAll('.project');

  projectButtonList.forEach((projectButton) => {
    if (parseInt(projectButton.dataset.projectId) === project.getId()) {
      projectButton.childNodes[1].classList.add('active');
      projectButton.childNodes[2].classList.add('active');
    }
  });
}

function removeActiveClass() {
  const projectButtonPList = document.querySelectorAll('.projectName');
  const projectButtonLogoList = document.querySelectorAll('.projectLogo');

  projectButtonPList.forEach((p) => {
    p.classList.remove('active');
  });
  projectButtonLogoList.forEach((logo) => {
    logo.classList.remove('active');
  });
}
