import deleteImage from '../images/delete.svg';
import * as components from '../components/components.js';
import * as helpers from '../helpers.js';
import * as storage from '../storage.js';
import { setProjectContainerContent } from '../components/sidebar.js';
import { setDefaultView } from '../components/main.js';

export function setProjectTodoView(project) {
  const main = document.querySelector('main');
  const projectTodoView = document.createElement('div');
  const projectHeader = createProjectHeader(project);
  const todoElementList = helpers.createProjectTodoElementList(project);
  const addTodoButton = components.createAddTodoButton();

  projectTodoView.className = 'projectTodoView';
  projectTodoView.replaceChildren(projectHeader, todoElementList);
  projectTodoView.appendChild(addTodoButton);

  main.replaceChildren(projectTodoView);
}

export function createProjectHeader(project) {
  const projectHeader = document.createElement('div');
  const projectColorPicker = createProjectColorPicker(project);
  const projectNameInput = createProjectNameInput(project);
  const projectDeleteButton = createProjectDeleteButton(project);

  projectHeader.className = 'projectHeader';

  if (project.getId() === 1) {
    projectHeader.replaceChildren(projectColorPicker, projectNameInput);
  } else {
    projectHeader.replaceChildren(
      projectColorPicker,
      projectNameInput,
      projectDeleteButton
    );
  }

  return projectHeader;
}

function createProjectColorPicker(project) {
  const colorPicker = document.createElement('input');
  const projectColor = project.getHexColor();

  colorPicker.type = 'color';
  colorPicker.className = 'projectColorPicker';
  colorPicker.value = projectColor;
  colorPicker.addEventListener('change', () => {
    const newProjectColor = colorPicker.value;
    updateProjectColor(project, newProjectColor);
    setProjectContainerContent();
  });

  return colorPicker;
}

function updateProjectColor(project, newProjectColor) {
  project.setHexColor(newProjectColor);
  storage.updateProject(project);
}

function createProjectNameInput(project) {
  const nameInput = document.createElement('input');
  const projectName = project.getName();

  nameInput.type = 'text';
  nameInput.className = 'projectNameInput';
  nameInput.value = projectName;
  nameInput.addEventListener('change', () => {
    const newProjectName = nameInput.value;
    updateProjectName(project, newProjectName);
    setProjectContainerContent();
  });

  return nameInput;
}

function updateProjectName(project, newProjectName) {
  project.setName(newProjectName);
  storage.updateProject(project);
}

function createProjectDeleteButton(project) {
  const deleteButton = document.createElement('img');

  deleteButton.src = deleteImage;
  deleteButton.className = 'projectDeleteButton';
  deleteButton.addEventListener('click', () => {
    storage.deleteProject(project);
    setDefaultView();
    setProjectContainerContent();
  });

  return deleteButton;
}
