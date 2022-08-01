abstract class StreetFighter {
  constructor() {}
  move() {}
  fight() {
    console.log(`${this.name} fight with ${this.getSpecialAttact()}`);
  }
  abstract getSpecialAttact(): string;
  abstract get name(): string;
}

class Ryu extends StreetFighter {
  getSpecialAttact(): string {
    return "Hadoken";
  }
  get name(): string {
    return "Ryu";
  }
}

class Li extends StreetFighter {
  getSpecialAttact(): string {
    return "Lighting Kick";
  }
  get name(): string {
    return "Li";
  }
}
const ryu = new Ryu();

console.log(ryu.getSpecialAttact());
ryu.fight();

const li = new Li();
li.fight();
