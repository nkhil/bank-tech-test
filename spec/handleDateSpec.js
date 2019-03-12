const HandleDate = require("../lib/handleDate");

describe("HandleDate", () => {
  let handleDate;

  beforeEach(() => {
    handleDate = new HandleDate();
  });

  describe(".createDateObject", () => {
    it("formats the date correctly", () => {
      expect(handleDate.createDateObject("10-01-2019")).toEqual("10/01/2019");
    });
  });
});
