class HoldNumber {
  data: number;
}

class HoldString {
  data: string;
}

const holdNumber = new HoldNumber();
holdNumber.data = 123;

const holdString = new HoldString();
holdString.data = 'abcd';

// Using Generic
class HoldAnything<TypeOfData> {
  data: TypeOfData;

  add(a: TypeOfData): TypeOfData {
    return a;
  }
}

const holdNumber2 = new HoldAnything<number>();
holdNumber2.data = 123;

const holdString2 = new HoldAnything<string>();
holdString2.data = 'abc';
