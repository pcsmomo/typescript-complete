import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

// Option #2
// Only accpet dependenies into constructor
// Defined a static class method to preconfigure
// User and assign properties afterwards
// Similar to MatchReader from the last section
export class User {
  static fromData(data: UserProps) {
    const user = new User(new Eventing());
    user.set(data);
    return user;
  }

  private data: UserProps;

  constructor(private event: Eventing) {}

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
