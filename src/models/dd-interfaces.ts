//D&D
export interface Draggable {
  dragStartHandler(evt: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

export interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(evt: DragEvent): void;
  dragLeaveHandler(evt: DragEvent): void;
}
