type TypeConcat = (a: string, b: string) => string;

const concat: TypeConcat = (a, b) => {
  return a + b;
};

concat('Hello ', 'World');

interface MyHometaskInterface {
  howIDoIt: string;
  simeArray: [string, string, number];
  withData: [{ [n: string]: string | [string, number] }];
}

const MyHometask: MyHometaskInterface = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

console.log(MyHometask);

interface MyArray<T> {
  [n: number]: T;

  reduce(fn: (sum: T, current: T, i: number, array: T[]) => T, init: number): T;
}

const tsArr: MyArray<number> = [1, 2, 3, 4, 5];

tsArr.reduce((sum, current) => sum + current, 0);
