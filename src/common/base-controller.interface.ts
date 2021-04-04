export interface BaseControllerInterface<T> {
  all(): Promise<T[]>;

  find(id: string): Promise<T>;

  create(): Promise<T>;

  update(id: string, updateDto: any): Promise<T>;

  delete(id: string): Promise<T>;

  forceDelete(id: string): Promise<T>;
}
