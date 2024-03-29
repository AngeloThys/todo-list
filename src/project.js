import { idGenerator } from './helpers';

const projectIdGenerator = idGenerator();

export function projectFactory() {
  let _id = projectIdGenerator("projectId");

  return Object.assign(
    {
      isA: 'project',
      _id,
    },
    projectFunctions
  );
}

function getId() {
  return this._id;
}

function setName(newName) {
  if (newName.length > 0 && newName.length < 26) {
    return (this._name = String(newName));
  }

  return false;
}

function getName() {
  return this._name;
}

function setHexColor(newColor) {
  //hex color regex pattern
  const hexColors = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  if (hexColors.test(newColor)) {
    return (this._hexColor = String(newColor));
  }

  return false;
}

function getHexColor() {
  return this._hexColor;
}

export const projectFunctions = {
  getId,
  setName,
  getName,
  setHexColor,
  getHexColor,
};
