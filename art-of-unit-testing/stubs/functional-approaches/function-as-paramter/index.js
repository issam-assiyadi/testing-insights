const { SUNDAY, SATURDAY } = require("../../../constants");

const verifyPassword = (input, rules, getDayFn) => {
  const dayOfWeek = getDayFn();

  if ([SUNDAY, SATURDAY].includes(dayOfWeek)) {
    throw Error("It's the weekend")
  }

  // more logic here ...

  return [];
}

module.exports = {
  verifyPassword
}

/*
As we can see, adding a `getDayFn` callback as a parameter to the `verifyPassword`
function solves the issue — it allows us to inject and control the current day during testing.

However, this comes at the cost of readability. The `getDayFn` parameter is unrelated
to the core logic of verifying a password, so including it in the function signature
can be considered a bad practice.

A better solution is to use a factory function to inject dependencies like `getDayFn`
in a more modular way. This approach improves testability without polluting the core function's signature.
(See "../factory-method" for the implementation.)
*/