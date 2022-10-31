class MyEvent {
  cost: number;
  quantity: number;
  orderId: number;
}

interface IObserver {
  notify(event: MyEvent): void;
}

class Observer1 implements IObserver {
  public notify(event: MyEvent) {
    console.log('Observer1', event);
  }
}

class Observer2 implements IObserver {
  public notify(event: MyEvent) {
    console.log('Observer2', event);
  }
}

class Observer3 implements IObserver {
  public notify(event: MyEvent) {
    console.log('Observer3', event);
  }
}

interface ISubject {
  attach(observer: IObserver): void;
  detach(observer: IObserver): void;
  notify(event: MyEvent): void;
}

class Subject1 implements ISubject {
  observers: IObserver[];

  constructor() {
    this.observers = [];
  }

  public attach(observer: IObserver) {
    this.observers.push(observer);
  }

  public detach(observer: IObserver): void {
    const found = this.observers.indexOf(observer);
    if (found >= 0) {
      this.observers.splice(found, 1);
    }
  }

  public notify(event: MyEvent): void {
    this.observers.forEach(element => {
      element.notify(event);
    });
  }
}

console.log('Add 3 observers: 1, 2, and 3. Push the 1st event to all observers.');
const observer1 = new Observer1();
const observer2 = new Observer2();
const observer3 = new Observer3();
const subjectA = new Subject1();
subjectA.attach(observer1);
subjectA.attach(observer2);
subjectA.attach(observer3);
subjectA.notify({
  cost: 5,
  quantity: 20,
  orderId: 1
});

console.log('Remove observer 3. Push the 2nd event to all observers.');
subjectA.detach(observer3);
subjectA.notify({
  cost: 6,
  quantity: 10,
  orderId: 2
});

console.log('Remove observer 2. Push the 3rd event to all observers.');
subjectA.detach(observer2);
subjectA.notify({
  cost: 7,
  quantity: 15,
  orderId: 3
});