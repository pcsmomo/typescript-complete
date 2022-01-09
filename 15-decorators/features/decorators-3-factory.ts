class BoatFactory {
  @testDecorator
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logErrorFactory('Opps boat was sunk in ocean')
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
  console.log(target.color); // it is never available as the decorator is executed before instanciated
}

// Decorator Factory
function logErrorFactory(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}
// new BoatFactory().pilot();
