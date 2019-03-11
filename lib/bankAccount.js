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
    const record = {
      amount: amount,
      date: date,
      type: "debit",
      balance: this._balance
    };
    this.statement.push(record);
  }

  withdraw(amount, date) {
    if (amount > this._balance) throw "Insufficient funds";
    this._balance -= amount;
    const record = {
      amount: amount,
      date: date,
      type: "credit",
      balance: this._balance
    };
    this.statement.push(record);
    this._balance -= amount;
  }
}

module.exports = BankAccount;
