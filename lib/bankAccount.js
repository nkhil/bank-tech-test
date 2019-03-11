class BankAccount {
  constructor() {
    this.balance = 0;
    this.statement = [];
  }

  deposit(amount, date) {
    if (amount < 0) return;
    const record = { amount: amount, date: date, type: "debit" };
    this.statement.push(record);
    this.balance += amount;
  }

  withdraw(amount, date) {
    if (amount > this.balance) throw "Insufficient funds";
    const record = { amount: amount, date: date, type: "credit" };
    this.statement.push(record);
    this.balance -= amount;
  }
}

module.exports = BankAccount;
