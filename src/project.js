import { idGenerator } from 'helpers';

// Factory function that produces projects
export default function projectFactory() {
  const id = idGeneratorOne();
  let name;
  let color;
  const todoList = [];

  const getId = () => id;

  const setName = (newName) => {
    if (newName.length > 1 && newName.length < 26) {
      return (name = String(newName));
    }

    return false;
  };
  const getName = () => name;

  const setColor = (newColor) => {
    //hex color regex pattern
    const hexColors = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    if (hexColors.test(newColor)) {
      return (color = String(newColor));
    }

    return false;
  };
  const getColor = () => color;

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

  return {
    isA: 'project',
    getId,
    setName,
    getName,
    setColor,
    getColor,
    addTodo,
    removeTodo,
  };
}

const idGeneratorOne = idGenerator();
