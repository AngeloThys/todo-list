import { idGenerator } from './helpers';

// Factory function that produces projects
export default function projectFactory() {
  const id = idGeneratorOne();
  let name;
  let hexColor;
  const todoList = [];

  const getId = () => id;

  const setName = (newName) => {
    if (newName.length > 1 && newName.length < 26) {
      return (name = String(newName));
    }

    return false;
  };
  const getName = () => name;

  const setHexColor = (newColor) => {
    //hex color regex pattern
    const hexColors = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    if (hexColors.test(newColor)) {
      return (hexColor = String(newColor));
    }

    return false;
  };
  const getHexColor = () => hexColor;

  const addTodo = (newTodo) => {
    if (newTodo.isA === 'todo') {
      return todoList.push(newTodo);
    }

    return false;
  };
  const removeTodo = (oldTodo) => {
    if (oldTodo.isA === 'todo') {
      const index = todoList.indexOf(oldTodo);
      return todoList.splice(index, 1);
    }

    return false;
  };

  const getTodoList = () => todoList;

  return {
    isA: 'project',
    getId,
    setName,
    getName,
    setHexColor,
    getHexColor,
    addTodo,
    removeTodo,
    getTodoList,
  };
}

const idGeneratorOne = idGenerator();
