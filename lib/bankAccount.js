class BankAccount {
  constructor() {
    this.balance = 0;
    this.statement = [];
  }

  deposit(amount, date) {
    if (amount < 0) return;
    const record = { amount: amount, date: date };
    this.statement.push(record);
    this.balance += amount;
  }
}

module.exports = BankAccount;
