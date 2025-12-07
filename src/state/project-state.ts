import { Project, ProjectStatus } from '../models/project.js';

//Project State Manegement
type Listener<T> = (item: T[]) => void;

class State<T> {
  protected listeners: Listener<T>[] = [];

  addListener(addListener: Listener<T>) {
    this.listeners.push(addListener);
  }
}

//シングルトンのクラス　全体でインスタンスが一つ？
export class ProjectState extends State<Project> {
    private projects: Project[] = [];
    private static instance: ProjectState;

    private constructor() {
      super();
    }

    static getInstance() {
      if (this.instance) {
        return this.instance;
      }
      this.instance = new ProjectState();
      return this.instance;
    }

    addProject(title: string, description: string, manday: number) {
      const newProject = new Project(
        Math.random().toString(),
        title,
        description,
        manday,
        ProjectStatus.active
      );
      this.projects.push(newProject);
      for (const listenersFn of this.listeners) {
        listenersFn(this.projects.slice());
      } //ここではオリジナルでなくコピーの配列を渡している？
    }

    moveProject(prjId: string, newStatus: ProjectStatus) {
      const project = this.projects.find((prj) => prj.id === prjId);
      if (project && project.status !== newStatus) {
        project.status = newStatus;
        this.updateListeners();
      }
    }

    private updateListeners() {
      for (const listenersFn of this.listeners) {
        listenersFn(this.projects.slice());
      }
    }
  }

export const projectState = ProjectState.getInstance();
