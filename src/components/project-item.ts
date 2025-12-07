import { Draggable } from '../models/dd-interfaces.js';
import { Component } from './base-component.js';
import { Project } from '../models/project.js';
import { Autobind } from '../decorators/autobind.js';

export class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable
{
  private project: Project;

  get manday() {
    if (this.project.manday < 20) {
      return this.project.manday.toString() + ' (light)';
    } else {
      return (this.project.manday / 20).toString() + ' (heavy)';
    }
  }

  constructor(hostId: string, project: Project) {
    super('single-project', hostId, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  @Autobind
  dragStartHandler(evt: DragEvent): void {
    evt.dataTransfer!.setData('text/plain', this.project.id);
    evt.dataTransfer!.effectAllowed = 'move';
  }

  dragEndHandler(__: DragEvent): void {
    console.log('DragEnd');
  }

  configure() {
    this.element.addEventListener('dragstart', this.dragStartHandler);
    this.element.addEventListener('dragend', this.dragEndHandler);
  }

  renderContent() {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('h3')!.textContent = this.manday;
    this.element.querySelector('p')!.textContent = this.project.description;
  }
}
