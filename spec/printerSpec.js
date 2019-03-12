const Printer = require("../lib/printer");

describe("Printer", () => {
  let printer;
  let statement;

  beforeEach(() => {
    printer = new Printer();
    statement = [
      {
        amount: 2000,
        date: "10/01/2019",
        type: "debit",
        balance: 2000
      },
      {
        amount: 1000,
        date: "11/01/2019",
        type: "credit",
        balance: 1000
      }
    ];
    spyOn(console, "log");
  });

  describe(".printStatement", () => {
    it("can print a statement", () => {
      printer.printStatement(statement);
      expect(console.log).toHaveBeenCalledWith(
        "date || credit || debit || balance"
      );
      expect(console.log).toHaveBeenCalledWith(
        "10/01/2019 ||  || 2000 || 2000"
      );
      expect(console.log).toHaveBeenCalledWith(
        "11/01/2019 || 1000 ||  || 1000"
      );
    });
  });
});
