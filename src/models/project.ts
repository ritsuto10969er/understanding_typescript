export enum ProjectStatus {
  active,
  finished,
}

//型をクラスで定義？？何でここはインスタンスを作りたい？
export class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public manday: number,
    public status: ProjectStatus
  ) {}
}
