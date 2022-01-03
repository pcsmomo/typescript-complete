import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

// Option #3 -> Picked
// Only accept properties into constructor
// Hard code dependencies as class properties
// -> For this project, this approach would not be too bad
//    as there wouldn't be the other Eventing class.
export class User {
  events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}

const user = new User({});

user.events;
