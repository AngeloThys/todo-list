import * as storage from './storage';
import { format, isToday, isBefore, parseISO, parse } from 'date-fns';

// Todo lists based on certain criteria

// Retrieve todos that belong to a specific project
export function getProjectTodos(projectId) {
  const todos = storage.getTodosValue();

  return todos.filter(
    (todo) => parseInt(todo.getProjectId()) === parseInt(projectId)
  );
}

// Retrieve todos that belong to today
export function getTodayOrBeforeTodos() {
  const todos = storage.getTodosValue();

  return todos.filter((todo) => {
    const today = new Date();
    const todoDate = parseISO(todo.getDueDate());

    return isToday(todoDate) || isBefore(todoDate, today);
  });
}

// Retrieve todos that belong to this week
