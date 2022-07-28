export const arrayMutate = (
  numbers: number[],
  mutate: (v: number) => number
): number[] => {
  return numbers.map(mutate);
};

console.log(arrayMutate([1, 2, 3], (v) => v * 10));

type MutationFunction = (v: number) => number;

const myNewMutationFunction: MutationFunction = (v) => v * 100;
console.log(myNewMutationFunction(10));

type AdderFunction = (val: number) => number;

export function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(100));
