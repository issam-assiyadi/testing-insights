const { SUNDAY, SATURDAY } = require("../../../constants");

// here we will use a factory method
const makeVerifier = (rules, dayOfWeekFn) => {
  return (rules) => {
    if ([SUNDAY, SATURDAY].includes(dayOfWeekFn())) {
      throw Error("It's the weekend");
    }

    // more logic here ...

    return [];
  };
};


module.exports = {
  makeVerifier
}
