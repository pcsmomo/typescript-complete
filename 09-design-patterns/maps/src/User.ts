import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  // random color
  color: string = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  useCustomMarker: boolean = true;

  constructor() {
    this.name = faker.name.firstName();
    // Before initialization, location is still undefined
    // so we cannot use this.location.lat yet
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
