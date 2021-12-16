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
// 47. Instance Method Modifiers
class Vehicle2 {
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle2 = new Vehicle2();
// vehicle2.honk();

class Car2 extends Vehicle2 {
  private drive(): void {
    console.log('vroom');
  }
  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

/**************/
// 48. Fields in Classes
class Vehicle3 {
  constructor(public color: string) {}
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle3 = new Vehicle3('orange');
console.log(vehicle3.color);

class Car3 extends Vehicle3 {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car3 = new Car3(4, 'red');
car3.startDrivingProcess();
