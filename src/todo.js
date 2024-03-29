import { isDate } from 'date-fns';
import { idGenerator } from './helpers';

const todoIdGenerator = idGenerator();

export function todoFactory() {
  let _id = todoIdGenerator('todoId');

  return Object.assign(
    {
      isA: 'todo',
      _id,
    },
    todoFunctions
  );
}

function getId() {
  return this._id;
}

function setProjectId(newProjectId) {
  if (newProjectId) {
    return (this._projectId = newProjectId);
  }

  return false;
}

function getProjectId() {
  return this._projectId;
}

function setTitle(newTitle) {
  if (newTitle.length > 0 && newTitle.length < 26) {
    return (this._title = newTitle);
  }

  return false;
}

function getTitle() {
  return this._title;
}

function setDescription(newDescription) {
  return (this._description = newDescription);
}

function getDescription() {
  return this._description;
}

function setDueDate(newDueDate) {
  return (this._dueDate = newDueDate);
}

function getDueDate() {
  return this._dueDate;
}

function setPriority(newPriority) {
  switch (newPriority) {
    case '1':
    case '2':
    case '3':
      return (this._priority = newPriority);
    default:
      return false;
  }
}

function getPriority() {
  return this._priority;
}

function setStatus(newStatus) {
  if (typeof newStatus === 'boolean') {
    return (this._status = newStatus);
  }

  return false;
}

function getStatus() {
  return this._status;
}

export const todoFunctions = {
  getId,
  setProjectId,
  getProjectId,
  setTitle,
  getTitle,
  setDescription,
  getDescription,
  setDueDate,
  getDueDate,
  setPriority,
  getPriority,
  setStatus,
  getStatus,
};
