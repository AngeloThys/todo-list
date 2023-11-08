export default function setEmptyView() {
  const main = document.querySelector('main');

  const container = document.createElement('div');
  container.className = 'emptyView';
  container.innerHTML = `
        <div>
            <h2>Try adding a todo...</h2>
            <button class="addTodo">Add a Todo</button> 
        </div>
    `;

  main.replaceChildren(container); // I think I'm missing an event listener on the button.
}