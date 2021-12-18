import faker from 'faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  useCustomMarker: boolean;

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.useCustomMarker = true;
  }

  markerContent(): string {
    return `
      <div>
        <h2>Company Name: ${this.companyName}</h2>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}
