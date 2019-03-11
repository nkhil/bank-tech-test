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
  }

  printStatement() {
    console.log("date || credit || debit || balance");
    const statement = this.statement;
    statement.forEach(object => {
      console.log(this.populateRow(object));
    });
  }

  populateRow(object) {
    return `${object.date} || ${
      object.type === "credit" ? object.amount : ""
    } || ${object.type === "debit" ? object.amount : ""} || ${object.balance}`;
  }
}

module.exports = BankAccount;
