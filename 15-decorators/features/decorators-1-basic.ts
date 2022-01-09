class BoatBasic {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @testDecoratorBasic
  pilot(): void {
    console.log('swish');
  }
}

function testDecoratorBasic(target: any, key: string): void {
  console.log('Target:', target);
  console.log('Key:', key);
}

// testDecorator(BoatBasic.prototype, 'pilot');
