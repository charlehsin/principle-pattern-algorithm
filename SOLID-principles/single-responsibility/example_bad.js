// Violation: logging should not be implemented inside Account class.

class Account {
  constructor(balance, owner) {
    if (isNaN(balance)) {
      this.logError('balance is not a number.');
      throw 'balance is not a number.';
    }
    this.balance = balance;
    this.owner = owner;
  }

  logError(message) {
    console.log(message);
  }
}

let myAccount = new Account('not a number', 'David');
