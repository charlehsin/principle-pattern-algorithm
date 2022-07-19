interface ILogger {
  log(message: string): void;
}

class WindowsEventLogger implements ILogger {
  public log(message): void {
    console.log(`Use Windows event to log: ${message}`);
  }
}

class AzureLogger implements ILogger {
  public log(message): void {
    console.log(`Use Azure service to log: ${message}`);
  }
}

class AccountUsingAbstraction {
  private logger: ILogger;

  constructor(logger: ILogger) {
    this.logger = logger;
  }

  public deposit(amount: number): void {
    this.logger.log(`deposit ${amount}`);
  }
}

let myAccountUsingAbstraction = new AccountUsingAbstraction(new WindowsEventLogger());
myAccountUsingAbstraction.deposit(500);
myAccountUsingAbstraction = new AccountUsingAbstraction(new AzureLogger());
myAccountUsingAbstraction.deposit(500);
