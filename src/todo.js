// Factory Function that produces todo objects
const todoFactory = function () {
  let title;
  let description;
  let dueDate;
  let priority;
  let status;

  let setTitle = (newTitle) => (title = newTitle);
  let getTitle = () => title;

  let setDescription = (newDescription) => (description = newDescription);
  let getDescription = () => description;

  let setDueDate = (newDueDate) => (dueDate = newDueDate);
  let getDueDate = () => dueDate;

  let setPriority = (newPriority) => (priority = newPriority);
  let getPriority = () => priority;

  let setStatus = (newStatus) => (status = newStatus);
  let getStatus = () => status;

  return {
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
};
