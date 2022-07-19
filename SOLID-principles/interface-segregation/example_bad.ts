// Violation: Penguin does not fly; however, it still needs to implement fly method in IBirdBadInterface interface.

interface IBirdBadInterface {
  eat(): void;
  walk(): void;
  fly(): void;
}

class Eagle implements IBirdBadInterface {
  public eat() {
    console.log('Eagle eats.');
  }

  public walk() {
    console.log('Eagle walks.');
  }

  public fly() {
    console.log('Eagle flies.');
  }
}

class Penguin implements IBirdBadInterface {
  public eat() {
    console.log('Penguin eats.');
  }

  public walk() {
    console.log('Penguin walks.');
  }

  public fly() {
    throw new Error('Penguin can not fly!');
  }
}

let myEagle = new Eagle();
myEagle.eat();
myEagle.walk();
myEagle.fly();

let myPenguin = new Penguin();
myPenguin.eat();
myPenguin.walk();
myPenguin.fly();
