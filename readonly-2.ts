class Doggy {
  constructor(public readonly name: string, public readonly age: number) {}
}

const small = new Doggy("Small", 12);
console.log(small.name);

class DogList {
  private doggies: Doggy[] = [];

  static instance: DogList = new DogList();

  private constructor() {}
  static addDog(dog: Doggy) {
    DogList.instance.doggies.push(dog);
  }
  getDogs() {
    return this.doggies;
  }
}

DogList.instance;
DogList.addDog(small);

console.log(DogList.instance.getDogs());

// const dl = new DogList();
