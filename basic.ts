let userName = "Natalia";
let hasLogged: boolean = true;

userName += " Hirniak";
console.log(hasLogged);

let myNumber: number = 10;
let myRegex: RegExp = /foo/;

const names: string[] = userName.split(" ");
const myValues: Array<number> = [1, 2, 3];

interface Person {
  firstName: string;
  lastName: string;
}

const myPerson: Person = {
  firstName: "Natalia",
  lastName: "Hirniak",
};

const ids: Record<number, string> = {
  10: "a",
  20: "b",
};
ids[30] = "c";
