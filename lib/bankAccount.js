class BankAccount {
  constructor(handleDate, printer) {
    this._balance = 0;
    this.statement = [];
    this.handleDate = handleDate;
    this.printer = printer;
  }

  displayBalance() {
    return this._balance;
  }

  deposit(amount, date) {
    if (amount < 0) return;
    this._balance += amount;
    const formattedDate = this.handleDate.createDateObject(date);
    const record = this.createRecordObject(
      amount,
      formattedDate,
      "debit",
      this._balance
    );
    this.statement.push(record);
  }

  withdraw(amount, date) {
    if (amount > this._balance) throw "Insufficient funds";
    this._balance -= amount;
    const formattedDate = this.handleDate.createDateObject(date);
    const record = this.createRecordObject(
      amount,
      formattedDate,
      "credit",
      this._balance
    );
    this.statement.push(record);
  }

  printStatement() {
    return this.printer.printStatement(this.statement);
  }

  createRecordObject(amount, date, type, balance) {
    return { amount, date, type, balance };
  }
}

module.exports = BankAccount;
