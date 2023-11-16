import * as storage from './storage';
import { isToday, isBefore, parseISO, isThisWeek } from 'date-fns';

// Todo lists based on certain criteria

// Retrieve todos that belong to a specific project
export function getProjectTodos(projectId) {
  const todos = storage.getTodosValue();

  return todos.filter(
    (todo) => parseInt(todo.getProjectId()) === parseInt(projectId)
  );
}

export function getTodayOrBeforeTodos() {
  const todos = storage.getTodosValue();

  return todos.filter((todo) => {
    const today = new Date();
    const todoDate = parseISO(todo.getDueDate());

    return isToday(todoDate) || isBefore(todoDate, today);
  });
}

export function getWeekTodos() {
  const todos = storage.getTodosValue();

  return todos.filter((todo) => {
    const todoDate = parseISO(todo.getDueDate());

    return isThisWeek(todoDate);
  });
}
