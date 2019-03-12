# Bank tech test

This program is made using JavaScript(ES6)

## How to run the application locally
**Note:** You will need to have node installed. 

- Clone or fork it: `git clone https://github.com/nkhil/bank-tech-test.git` and `cd bank-tech-test`
- In your terminal, `cd` into the project root folder
- `node` to start node
- Enter the following commands: 
  - `.load /lib/bankAccount.js`
  - `.load /lib/handleDate.js`
  - `.load /lib/printer.js`
  - `const handleDate = new HandleDate()`
  - `const printer = new Printer()`
  - `const bankAccount = new BankAccount(handleDate, printer)`

This will initialise a new instance of the bank account class.

To make a deposit into a bank account: 

- `bankAccount.deposit(2000, '10-01-2019')`

The application assumes that the date will be entered as a string in the `dd-mm-yyyy` format. 

To make a withdrawal: 

- `bankAccount.withdraw(1000, '11-01-2019')`

To see the current balance: 

- `bankAccount.currentBalance()`

To print a bank statement, use: 

- `bankAccount.printStatement()`

The format for the output will be: 

```
  date || credit || debit || balance
  10/01/2019 ||  || 1000 || 3000
  10/01/2019 ||  || 2000 || 2000
```

## Testing

This project uses Jasmine. 

To run the test suite (unit and feature tests), run `npm test` while in the project root. 

