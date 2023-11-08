import { isDate } from 'date-fns';
import { idGenerator } from './helpers';

// Factory Function that produces todo objects
export default function todoFactory() {
  const id = idGeneratorOne();
  let projectId;
  let title;
  let description;
  let dueDate;
  let priority;
  let status;

  const getId = () => id;

  const setProjectId = (newProjectId) => {
    if (Number.isInteger(newProjectId)) {
      return (projectId = newProjectId);
    }

    return false;
  }
  const getProjectId = () => projectId;

  const setTitle = (newTitle) => {
    if (newTitle.length > 1 && newTitle.length < 26) {
      return (title = newTitle);
    }

    return false;
  };
  const getTitle = () => title;

  const setDescription = (newDescription) => {
    return (description = newDescription);
  };
  const getDescription = () => description;

  const setDueDate = (newDueDate) => {
    if (isDate(newDueDate)) {
      return (date = newDueDate);
    }

    return false;
  };
  const getDueDate = () => dueDate;

  const setPriority = (newPriority) => {
    switch (newPriority) {
      case 1:
      case 2:
      case 3:
        return (priority = newPriority);
      default:
        return false;
    }
  };
  const getPriority = () => priority;

  const setStatus = (newStatus) => {
    if (newStatus instanceof Boolean) {
      return (status = newStatus);
    }

    return false;
  };
  const getStatus = () => status;

  return {
    isA: 'todo',
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
}

const idGeneratorOne = idGenerator();
