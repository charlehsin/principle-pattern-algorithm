// The object to be decorated
function Car() {
  this.cost = function () {
    return 100;
  };
}

// Decorator 1
function CarWith4WheelDrive(car) {
  const baseCost = car.cost();
  car.cost = function () {
    return baseCost + 50;
  };
}

// Decorator 2
function CarWithLeatherSeat(car) {
  const baseCost = car.cost();
  car.cost = function () {
    return baseCost + 25;
  };
}

const car = new Car();
console.log('Base car cost', car.cost());

CarWith4WheelDrive(car);
console.log('+ 4 wheel drive cost', car.cost());

CarWithLeatherSeat(car);
console.log('+ leather seat cost', car.cost());
