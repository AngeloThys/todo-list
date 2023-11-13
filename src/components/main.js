import setEmptyView from '../views/emptyView';
import setTodoView from '../views/todoView';
import * as filters from '../filters';
import * as storage from '../storage';

export function setView(project) {
  const todoList = filters.getProjectTodos(project.getId());

  removeActiveClass();
  setActiveClass(project);

  if (todoList.length === 0) {
    setEmptyView();
  } else {
    setTodoView(project);
  }
}

export function setDefaultView() {
  const projectList = storage.getProjectsValue();
  const defaultProjectId = 1;
  const defaultProject = projectList.find(
    (project) => project.getId() === defaultProjectId
  );

  setView(defaultProject);
}

function setActiveClass(project) {
  const projectButtonList = document.querySelectorAll('.project');

  projectButtonList.forEach((projectButton) => {
    if (parseInt(projectButton.dataset.projectId) === project.getId()) {
      projectButton.childNodes[0].classList.add('active');
      projectButton.childNodes[1].classList.add('active');
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
