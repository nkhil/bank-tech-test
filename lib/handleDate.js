class HandleDate {
  createDateObject(date) {
    const splitDate = date.split("-");
    const dateObject = new Date(
      splitDate[2],
      splitDate[1] - 1,
      splitDate[0]
    ).toLocaleDateString("en-GB");
    return dateObject;
  }
}

module.exports = HandleDate;
