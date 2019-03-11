class BankAccount {
  constructor() {
    this._balance = 0;
    this.statement = [];
  }

  displayBalance() {
    return this._balance;
  }

  deposit(amount, date) {
    if (amount < 0) return;
    const record = { amount: amount, date: date, type: "debit" };
    this.statement.push(record);
    this._balance += amount;
  }

  withdraw(amount, date) {
    if (amount > this._balance) throw "Insufficient funds";
    const record = { amount: amount, date: date, type: "credit" };
    this.statement.push(record);
    this._balance -= amount;
  }
}

module.exports = BankAccount;
