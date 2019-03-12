const BankAccount = require("../lib/bankAccount");

describe("BankAccount", () => {
  let bankAccount;

  beforeEach(() => {
    bankAccount = new BankAccount();
    spyOn(console, "log");
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
    it("does something", () => {
      bankAccount.deposit(100, "10-01-2019");
      bankAccount.printStatement();
      expect(console.log).toHaveBeenCalledWith(
        "date || credit || debit || balance"
      );
      expect(console.log).toHaveBeenCalledWith("10/01/2019 ||  || 100 || 100");
    });
  });
});
