// Base component
class Shape {
  setName(name) {
    this.name = name;
  }

  printName() {
    console.log('name', this.name);
  }
}

// Leaf component
class Square extends Shape {
  constructor() {
    super();
    this.setName('Square');
  }
}

// Leaf component
class Rectangle extends Shape {
  constructor() {
    super();
    this.setName('Rectangle');
  }
}

// Composite
class DrawingObjects extends Shape {
  constructor() {
    super();
    this.shapes = [];
  }

  add(shape) {
    this.shapes.push(shape);
  }

  printName() {
    this.shapes.forEach((shape) => {
      shape.printName();
    });
  }
}

const square = new Square();
square.printName();

const rectangle = new Rectangle();
rectangle.printName();

const drawingObjects = new DrawingObjects();
drawingObjects.add(square);
drawingObjects.add(rectangle);
drawingObjects.add(rectangle);
drawingObjects.printName();
