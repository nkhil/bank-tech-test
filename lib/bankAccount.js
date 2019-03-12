class BankAccount {
  constructor(handleDate) {
    this._balance = 0;
    this.statement = [];
    this.handleDate = handleDate;
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
    console.log("date || credit || debit || balance");
    this.statement.forEach(transaction => {
      console.log(this.populateRow(transaction));
    });
  }

  populateRow(transaction) {
    return `${transaction.date} || ${
      transaction.type === "credit" ? transaction.amount : ""
    } || ${transaction.type === "debit" ? transaction.amount : ""} || ${
      transaction.balance
    }`;
  }

  createRecordObject(amount, date, type, balance) {
    return { amount, date, type, balance };
  }
}

module.exports = BankAccount;
