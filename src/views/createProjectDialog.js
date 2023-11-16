import * as storage from '../storage';
import * as sidebar from '../components/sidebar';
import * as main from '../components/main';

export function createProject() {
  const createProjectButton = document.querySelector('.createProjectButton');

  createProjectButton.addEventListener('click', () => {
    const project = storage.createProject();
    const projectForm = document.querySelector('.projectForm');
    const createProject = document.querySelector('.createProject');
    const projectName = document.querySelector('#projectName').value;
    const projectHexColor = document.querySelector('#projectColor').value;

    project.setName(projectName);
    project.setHexColor(projectHexColor);

    storage.updateProject(project);
    projectForm.reset();
    sidebar.setProjectContainerContent();
    main.setProjectView(project);
    createProject.close();
  });
}
