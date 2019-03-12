const BankAccount = require("../lib/bankAccount");

describe("BankAccount", () => {
  let bankAccount;
  let handleDate;
  let printer;

  class HandleDate {
    createDateObject() {}
  }

  class Printer {
    printStatement() {}
  }

  beforeEach(() => {
    handleDate = new HandleDate();
    // printer = new Printer();
    printer = jasmine.createSpyObj("printer", ["printStatement"]);
    bankAccount = new BankAccount(handleDate, printer);
    spyOn(console, "log");
    spyOn(handleDate, "createDateObject").and.returnValue("10/01/2019");
  });

  describe(".deposit", () => {
    it("can take a deposit and increment the account balance", () => {
      bankAccount.deposit(100, "10-01-2019");
      expect(bankAccount.displayBalance()).toEqual(100);
    });

    it("can handle a negative number being deposited", () => {
      bankAccount.deposit(-100, "10-01-2019");
      expect(bankAccount.displayBalance()).toEqual(0);
    });
  });

  describe(".withdraw", () => {
    it("can withdraw from the account balance", () => {
      bankAccount.deposit(100, "10-01-2019");
      bankAccount.withdraw(10, "11-01-2019");
      expect(bankAccount.displayBalance()).toEqual(90);
    });

    it("can throws an error if withdrawal amount > account balance", () => {
      bankAccount.deposit(100, "10-01-2019");
      expect(() => {
        bankAccount.withdraw(101, "10-01-2019");
      }).toThrow();
    });
  });

  describe(".printStatement", () => {
    it("can print a correctly formatted statement", () => {
      bankAccount.deposit(100, "10-01-2019");
      bankAccount.printStatement();
      expect(printer.printStatement).toHaveBeenCalled();
    });
  });
});
