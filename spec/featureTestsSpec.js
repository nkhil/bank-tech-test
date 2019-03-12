const BankAccount = require("../lib/bankAccount");
const HandleDate = require("../lib/handleDate");
const Printer = require("../lib/printer");

describe("Feature tests", () => {
  let bankAccount;
  let handleDate;
  let printer;

  beforeEach(() => {
    handleDate = new HandleDate();
    printer = new Printer();
    bankAccount = new BankAccount(handleDate, printer);
    spyOn(console, "log");
  });

  it("allows a user to deposit into their account", () => {
    bankAccount.deposit(2000, "10-01-2019");
    expect(bankAccount.displayBalance()).toEqual(2000);
  });

  it("allows a user to withdraw from their account", () => {
    bankAccount.deposit(2000, "10-01-2019");
    bankAccount.withdraw(1000, "11-01-2019");
    expect(bankAccount.displayBalance()).toEqual(1000);
  });

  it("allows a user to view an accurate statement", () => {
    bankAccount.deposit(2000, "10-01-2019");
    bankAccount.withdraw(1000, "11-01-2019");
    bankAccount.printStatement();
    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance"
    );
    expect(console.log).toHaveBeenCalledWith("10/01/2019 ||  || 2000 || 2000");
    expect(console.log).toHaveBeenCalledWith("11/01/2019 || 1000 ||  || 1000");
  });
});
