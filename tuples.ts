type threeDCoordinate = [x: number, y: number, z: number];

function addThreeDCoordinate(
  c1: threeDCoordinate,
  c2: threeDCoordinate
): threeDCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

console.log(addThreeDCoordinate([0, 2, 0], [2, 2, 4]));

function stringState(initial: string): [() => string, (v: string) => void] {
  let str: string = initial;
  return [() => str, (v: string) => (str = v)];
}

const [str1getter, str1setter] = stringState("hello");
console.log(str1getter());
str1setter("change hello");
console.log(str1getter());
