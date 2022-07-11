class Logger {
  static LogError(message) {
    console.log(message);
  }
}

class Account {
  constructor(balance, owner) {
    if (isNaN(balance)) {
      Logger.LogError('balance is not a number.');
      throw 'balance is not a number.';
    }
    this.balance = balance;
    this.owner = owner;
  }
}

let myAccount = new Account('not a number', 'David');
