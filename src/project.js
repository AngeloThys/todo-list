// Factory function that produces projects
export default function projectFactory(identifier) {
  const id = identifier;
  let name;
  let color;
  const todoList = [];

  return {
    getId: () => id,

    setName: (newName) => (name = newName),
    getName: () => name,

    setColor: (newColor) => (color = newColor),
    getColor: () => color,

    addTodo: (newTodo) => todoList.push(newTodo),
    removeTodo: (todo) => {
      const index = todoList.indexOf(todo);
      todoList.splice(index, 1);
    },
  };
}
