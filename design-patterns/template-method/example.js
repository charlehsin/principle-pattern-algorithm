var game = {
  play: function () {
    this.initialize();
    this.start();
    this.end();
    this.report();
  },

  report: function () {
    console.log('This is the common report.');
  }
}

function inherit(prototype) {
  const InheritedClass = function () { };
  InheritedClass.prototype = prototype;
  return new InheritedClass();
}

let StreetFighter = inherit(game);
StreetFighter.initialize = function () {
  console.log('StreetFighter initializes');
};
StreetFighter.start = function () {
  console.log('StreetFighter starts');
};
StreetFighter.end = function () {
  console.log('StreetFighter ends');
};

let MarioCart = inherit(game);
MarioCart.initialize = function () {
  console.log('MarioCart initializes');
};
MarioCart.start = function () {
  console.log('MarioCart starts');
};
MarioCart.end = function () {
  console.log('MarioCart ends');
};

StreetFighter.play();
MarioCart.play();