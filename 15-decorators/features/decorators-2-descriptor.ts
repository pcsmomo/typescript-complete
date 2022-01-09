class BoatDesc {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logErrorDesc
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

function logErrorDesc(
  target: any,
  key: string,
  desc: PropertyDescriptor
): void {
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (e) {
      console.log('Ooops, boat was sunk');
    }
  };
}

new BoatDesc().pilot();
