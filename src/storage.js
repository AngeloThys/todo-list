// CRUD for projects and todos in localStorage

import todoFactory from './todo';
import { projectFactory, projectFunctions } from './project';

// localStorage Projects item functions

function projectsItemExists() {
  if (localStorage.getItem('projects')) {
    return true;
  } else {
    return false;
  }
}

function createDefaultProject() {
  const defaultProject = projectFactory();

  defaultProject.setName('Default');
  defaultProject.setHexColor('#808080');

  return defaultProject;
}

function createProjectsItem() {
  const defaultProject = createDefaultProject();
  const projectsArray = [defaultProject];

  setProjectsValue(projectsArray);
}

export function getProjectsValue() {
  let projectList;
  if (projectsItemExists()) {
    projectList = JSON.parse(localStorage.getItem('projects'));
    populateProjectFunctions(projectList);
    return projectList;
  } else {
    createProjectsItem();
    projectList = JSON.parse(localStorage.getItem('projects'));
    populateProjectFunctions(projectList);
    return projectList;
  }
}

function populateProjectFunctions(projectList) {
  projectList.forEach((project) => {
    Object.assign(project, projectFunctions); // create the projectFunctions
  });
}

function setProjectsValue(projectsArray) {
  localStorage.setItem('projects', JSON.stringify(projectsArray));
}

// Project object functions

export function createProject() {
  const project = projectFactory();
  const projects = getProjectsValue();

  projects.push(project);
  setProjectsValue(projects);

  return project;
}

export function getProject(projectId) {
  const projects = getProjectsValue();

  return projects.find((project) => project.getId() === projectId);
}

export function deleteProject(project) {
  const projects = getProjectsValue();
  const index = projects.indexOf(project);

  projects.splice(index, 1);
}

export function updateProject(project) {
  const projects = getProjectsValue();

  deleteProject(project.getId());
  projects.push(project);
  setProjectsValue(projects);
}

// localStorage Todos item functions

function todosItemExists() {
  if (localStorage.getItem('todos')) {
    return true;
  } else {
    return false;
  }
}

function createTodosItem() {
  localStorage.setItem('todos', '[]');
}

export function getTodosValue() {
  if (todosItemExists()) {
    return JSON.parse(localStorage.getItem('todos'));
  } else {
    createTodosItem();
    return JSON.parse(localStorage.getItem('todos'));
  }
}

function setTodosValue(todosArray) {
  localStorage.setItem('todos', JSON.stringify(todosArray));
}

// Todo object functions

export function createTodo(projectId = 0) {
  const todo = todoFactory();
  const todos = getTodosValue();

  todo.setProjectId(projectId);
  todos.push(todo);
  setTodosValue(todos);

  return todo;
}

export function getTodo(todoId) {
  const todos = getTodosValue();

  return todos.find((todo) => todo.getId() === todoId);
}

export function deleteTodo(todo) {
  const todos = getTodosValue();
  const index = todos.indexOf(todo);

  todos.splice(index, 1);
}

export function updateTodo(todo) {
  const todos = getTodosValue();

  deleteTodo(todo.getId());
  todos.push(todo);
  setTodosValue(todos);
}
