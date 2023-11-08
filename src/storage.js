// CRUD for projects and todos in localStorage

import todoFactory from './todo';
import projectFactory from './project';

// localStorage Projects item functions

function projectsItemExists() {
  if (localStorage.getItem('projects')) {
    return true;
  } else {
    return false;
  }
}

function createProjectsItem() {
  localStorage.setItem('projects', '[]');
}

function getProjectsValue() {
  if (projectsItemExists()) {
    return JSON.parse(localStorage.getItem('projects'));
  } else {
    createProjectsItem();
    return JSON.parse(localStorage.getItem('projects'));
  }
}

function setProjectsValue(value) {
  localStorage.setItem('projects', JSON.stringify(value));
}

// Project object functions

export function createProject() {
  const project = projectFactory();
  const projects = getProjectsValue();

  projects.push(project);

  setProjectsValue(projects);
}

export function getProject(id) {
  const projects = getProjectsValue();

  return projects.find((project) => project.getId() === id);
}

export function deleteProject(id) {
  const projects = getProjectsValue();
  const project = getProject(id);
  const index = projects.indexOf(project);

  projects.splice(index, 1);
}

export function updateProject(project) {
  const projects = getProjectsValue();

  deleteProject(project.getId());
  projects.push(project);
}

// Todo object functions

export function createTodo() {
  const todo = todoFactory();

  localStorage.setItem;
}
