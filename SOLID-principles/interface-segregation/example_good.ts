interface IBird {
  eat(): void;
  walk(): void;
}

interface IFlyingBird {
  fly(): void;
}

class Crow implements IFlyingBird, IBird {
  public eat() {
    console.log('Crow eats.');
  }

  public walk() {
    console.log('Crow walks.');
  }

  public fly() {
    console.log('Crow flies.');
  }
}

class Ostrich implements IBird {
  public eat() {
    console.log('Ostrich eats.');
  }

  public walk() {
    console.log('Ostrich walks.');
  }
}

let myCrow = new Crow();
myCrow.eat();
myCrow.walk();
myCrow.fly();

let myOstrich = new Ostrich();
myOstrich.eat();
myOstrich.walk();