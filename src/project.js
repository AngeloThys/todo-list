import { idGenerator } from './helpers';

// Factory function that produces projects
export default function projectFactory() {
  const id = idGeneratorOne();
  let name;
  let hexColor;

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

  return {
    isA: 'project',
    getId,
    setName,
    getName,
    setHexColor,
    getHexColor,
  };
}

const idGeneratorOne = idGenerator();
