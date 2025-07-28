const { SUNDAY, SATURDAY } = require("../../constants");

const realDependenceis = {
  // moment: require("moment"),
};

let dependencies = { ...realDependenceis };

const inject = (fakes) => {
  Object.assign(dependencies, fakes);
  // after testing the application we should reset the dependencies to the real ones
  return function reset() {
    dependencies = { ...realDependenceis };
  };
};

const verifyPassword = (input, rules) => {
  const dayOfWeek = dependencies.moment().day();
  if ([SATURDAY, SUNDAY].includes(dayOfWeek)) {
    throw Error("It's the weekend!");
  }
  // more code goes here...
  // return list of errors found..
  return [];
};

module.exports = {
  verifyPassword,
  inject,
}