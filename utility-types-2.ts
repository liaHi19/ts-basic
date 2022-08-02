type Name = {
  first: string;
  last: string;
};

function addFullName(name: Name): Name & { fullName: string } {
  return {
    ...name,
    fullName: `${name.first} ${name.last}`,
  };
}

function permitRows<T extends (...arg: any[]) => any>(
  iteratorFunc: T,
  data: Parameters<T>[0][]
): ReturnType<T>[] {
  return data.map(iteratorFunc);
}

console.log(permitRows(addFullName, [{ first: "Natalia", last: "Hirniak" }]));

class PersonWithFullName {
  constructor(public name: Name) {}
  get fullName() {
    return `${this.name.first} ${this.name.last}`;
  }
}

function createObjects<T extends new (...arg: any[]) => any>(
  ObjectType: T,
  data: ConstructorParameters<T>[0][]
): InstanceType<T>[] {
  return data.map((item) => new ObjectType(item));
}
console.log(
  createObjects(PersonWithFullName, [{ first: "Nata", last: "Hirniak" }])
);
