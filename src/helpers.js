export function idGenerator() {
  return function (idItem) {
    let id;

    if (idItemExists(idItem)) {
      id = parseInt(localStorage.getItem(idItem));
    } else {
      localStorage.setItem(idItem, '0');
      id = parseInt(localStorage.getItem(idItem));
    }

    id++;

    localStorage.setItem(idItem, id);

    return id;
  };
}

function idItemExists(idItem) {
  if (localStorage.getItem(idItem)) {
    return true;
  } else {
    return false;
  }
}
