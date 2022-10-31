function autoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElementL: HTMLDivElement;
  element: HTMLFormElement;
  //? 3 inputs title, description and people
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
    this.hostElementL = document.getElementById('app')! as HTMLDivElement;
    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';
    this.titleInputElement = this.element.querySelector('#title')! as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector('#description')! as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector('#people')! as HTMLInputElement;
    this.configre();
    this.attach();
  }
  @autoBind
  private submitHandler(e: Event) {
    e.preventDefault();
    console.log(
      this.titleInputElement.value,
      this.descriptionInputElement.value,
      this.peopleInputElement.value,
    );
  }

  private configre() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  private attach() {
    this.hostElementL.insertAdjacentElement('afterbegin', this.element);
  }
}

const prjInput = new ProjectInput();
