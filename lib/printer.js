class Printer {
  printStatement(statement) {
    console.log("date || credit || debit || balance");
    statement.reverse().forEach(transaction => {
      console.log(this.populateRow(transaction));
    });
  }

  populateRow(transaction) {
    return `${transaction.date} || ${
      transaction.type === "credit" ? transaction.amount.toFixed(2) : ""
    } || ${
      transaction.type === "debit" ? transaction.amount.toFixed(2) : ""
    } || ${transaction.balance}`;
  }
}

module.exports = Printer;
