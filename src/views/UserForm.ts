export class UserForm {
    constructor(public parent: Element | null) {
        if (parent === null) {
            throw new Error('Element not found');
        }
    }
  
    template(): string {
      return `
        <div>
          <h1>User Form</h1>
          <input />
        </div>
      `;
    }
  
    render(): void {
      const templateElement = document.createElement('template');
      templateElement.innerHTML = this.template();
  
      this.parent?.append(templateElement.content);
    }
  }
  