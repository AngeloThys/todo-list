// Factory Function that produces todo objects
export default function todoFactory(identifier) {
  const id = identifier;
  let title;
  let description;
  let dueDate;
  let priority;
  let status;

  return {
    getId: () => id,

    setTitle: (newTitle) => (title = newTitle),
    getTitle: () => title,

    setDescription: (newDescription) => (description = newDescription),
    getDescription: () => description,

    setDueDate: (newDueDate) => (dueDate = newDueDate),
    getDueDate: () => dueDate,

    setPriority: (newPriority) => (priority = newPriority),
    getPriority: () => priority,

    setStatus: (newStatus) => (status = newStatus),
    getStatus: () => status,
  };
}
