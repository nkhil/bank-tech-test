# Bank tech test

[![Screen-Shot-2019-03-13-at-22-37-28.png](https://i.postimg.cc/s2JsPpNG/Screen-Shot-2019-03-13-at-22-37-28.png)](https://postimg.cc/jWCptJKR)

This program is made using JavaScript(ES6)

## How to run the application locally

**Note:** You will need to have node installed

- Clone or fork it: `git clone https://github.com/nkhil/bank-tech-test.git` and `cd bank-tech-test`
- In your terminal, `cd` into the project root folder
- `npm install` to install all dependencies
- `node` to start node
- Enter the following commands:
  - `.load ./lib/bankAccount.js`
  - `.load ./lib/handleDate.js`
  - `.load ./lib/printer.js`
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

## My Approach

Following single responsibility, my application uses a `BankAccount` class that is my 'runner' class that uses a `Printer` class to format and print the statement, as well as a `HandleDate` class to manage the formatting of the date.
