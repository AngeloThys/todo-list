import * as helpers from '../helpers';

export default function setWeekTodoView() {
  const main = document.querySelector('main');
  const weekTodoView = document.createElement('div');
  const todoElementList = helpers.createFilterTodoElementList('week');

  weekTodoView.className = 'weekTodoView';
  weekTodoView.replaceChildren(todoElementList);

  main.replaceChildren(weekTodoView);
}
