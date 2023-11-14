// CRUD for projects and todos in localStorage

import { todoFactory, todoFunctions } from './todo';
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

  return projects.find((project) => project.getId() === parseInt(projectId));
}

export function deleteProject(project) {
  const projects = getProjectsValue();
  const projectToBeDeleted = getProject(project.getId());
  const index = projects.indexOf(projectToBeDeleted);

  projects.splice(index, 1);
  setProjectsValue(projects);

  return projects;
}

export function updateProject(project) {
  deleteProject(project);

  const projects = getProjectsValue();
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
  let todoList;
  if (todosItemExists()) {
    todoList = JSON.parse(localStorage.getItem('todos'));
    populateTodoFunctions(todoList);
    return todoList;
  } else {
    createTodosItem();
    todoList = JSON.parse(localStorage.getItem('todos'));
    populateTodoFunctions(todoList);
    return todoList;
  }
}

function populateTodoFunctions(todoList) {
  todoList.forEach((todo) => {
    Object.assign(todo, todoFunctions);
  });
}

function setTodosValue(todosArray) {
  localStorage.setItem('todos', JSON.stringify(todosArray));
}

// Todo object functions

export function createTodo(projectId) {
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
  const todoToBeDeleted = getTodo(todo.getId());
  const index = todos.indexOf(todoToBeDeleted);

  todos.splice(index, 1);
  setTodosValue(todos);

  return todos;
}

export function updateTodo(todo) {
  deleteTodo(todo);

  const todos = getTodosValue();
  todos.push(todo);
  setTodosValue(todos);
}
