export interface BaseServiceInterface<T> {
  all(): Promise<T[]>;

  find(id: string): Promise<T>;

  create(createDto: any): Promise<T>;

  update(id: string, updateDto: any): Promise<T>;

  delete(id: string): Promise<T>;

  forceDelete(id: string): Promise<T>;
}
