export function idGenerator() {
  let id = 0;

  return function () {
    return id++;
  };
}
