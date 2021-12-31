import { AxiosResponse } from 'axios';

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosResponse;
  save(data: T): AxiosResponse;
}

interface Events {
  on(eventName: string, callBack: () => void): void;
  trigger(eventName: string): void;
}

export class Model {}
