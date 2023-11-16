import * as helpers from '../helpers';

export default function setTodayTodoView() {
  const main = document.querySelector('main');
  const todayTodoView = document.createElement('div');
  const todoElementList = helpers.createFilterTodoElementList('today');

  todayTodoView.className = 'todayTodoView';
  todayTodoView.replaceChildren(todoElementList);

  main.replaceChildren(todayTodoView);
}
