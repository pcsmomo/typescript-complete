class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('vroom');
  }
}

const car = new Car();
car.drive();
car.honk();

/**************/
// Modifiers
class Vehicle2 {
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle2 = new Vehicle2();
vehicle2.honk();

class Car2 extends Vehicle2 {
  private drive(): void {
    console.log('vroom');
  }
  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}
