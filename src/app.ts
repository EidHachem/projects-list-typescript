class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElementL: HTMLDivElement;
  element: HTMLFormElement;

  constructor() {
    this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
    this.hostElementL = document.getElementById('app')! as HTMLDivElement;
    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.attach();
  }

  private attach() {
    this.hostElementL.insertAdjacentElement('afterbegin', this.element);
  }
}

const prjInput = new ProjectInput();
