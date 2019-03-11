const BankAccount = require("../lib/bankAccount");

describe("BankAccount", () => {
  let bankAccount;

  beforeEach(() => {
    bankAccount = new BankAccount();
  });

  describe(".deposit", () => {
    it("can take a deposit and increment the account balance", () => {
      bankAccount.deposit(100, "10-01-2019");
      expect(bankAccount.balance).toEqual(100);
    });
  });
});
