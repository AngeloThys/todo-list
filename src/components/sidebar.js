function getProjects() {
  const stringProjects = localStorage.getItem('projects');
  return JSON.parse(stringProjects);
}

export function listProjectNames() {
  const listProjects = document.querySelector('.listProjects');
  const projects = getProjects();
  listProjects.replaceChildren(); // wipes the view.
  projects.forEach((project) => {
    const button = document.createElement('button');
    button.textContent = project.name;
    button.classList.add('project');
    button.addEventListener('click', fillMain(project)); // shows the todos
    listProjects.appendChild(button);
  });
}
