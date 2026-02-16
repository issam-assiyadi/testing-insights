const { SUNDAY, SATURDAY } = require("../../../constants");

// here we will use a factory method
const makeVerifier = (inputs, rules, dayOfWeekFn) => {
  return (inputs, rules) => {
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
