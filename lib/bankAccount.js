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
    const formattedDate = this.createDateObject(date);
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
    const formattedDate = this.createDateObject(date);
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

  createDateObject(date) {
    const splitDate = date.split("-");
    const dateObject = new Date(
      splitDate[2],
      splitDate[1] - 1,
      splitDate[0]
    ).toLocaleDateString("en-GB");
    console.log("Date object created is...");
    console.log(dateObject);
    return dateObject;
  }

  formatDate(dateObject) {
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    return dateObject.toLocaleString("en-GB", options);
  }

  createRecordObject(amount, date, type, balance) {
    return { amount, date, type, balance };
  }
}

module.exports = BankAccount;
