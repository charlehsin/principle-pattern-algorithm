// Violation: The higher-level module, Account class, depends on the lower-level module, ConsoleLogger, but it is not using the abstraction.

class ConsoleLogger {
  public log(message: string): void {
    console.log(`Use console log to log: ${message}`);
  }
}

class Account {
  private logger;

  constructor() {
    this.logger = new ConsoleLogger();
  }

  public deposit(amount: number): void {
    this.logger.log(`deposit ${amount}`);
  }
}

let myAccount = new Account();
myAccount.deposit(500);
