export class UserForm {
  constructor(public parent: Element) {}

  template(): string {
    return `
      <div class="flex flex-col">
        <h1 class="mb-5 text-2xl font-bold">User Form</h1>
        <input class="p-2 rounded" />
      </div>
    `;
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}
