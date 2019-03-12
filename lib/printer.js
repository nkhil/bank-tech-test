class Printer {
  printStatement(statement) {
    console.log("date || credit || debit || balance");
    statement.reverse().forEach(transaction => {
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
}

module.exports = Printer;
