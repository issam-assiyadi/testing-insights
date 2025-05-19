const verifyPassword = (input, rules) => {
  const errors = [];
  rules.forEach((rule) => {
    const result = rule(input);
    if (!result.passed) {
      errors.push(`error ${result.reason}`);
    }
  });
  return errors;
};

class PasswordVerifier1 {
  constructor() {
    this.rules = [];
  }

  addRule(rule) {
    this.rules.push(rule);
  }

  verify(input) {
    const errors = [];
    this.rules.forEach((rule) => {
      const result = rule(input);
      if (result.passed == false) {
        errors.push(result.reason);
      }
    });
    return errors;
  }
}

const oneUpperCaseRule = (input) => ({
  passed: input.toLowerCase() !== input,
  reason: "at least one upeer case needed",
});

// there we want inject the dependencies via the constructor
// What is the difference between the PasswordVerifier1 & PasswordVerifier2 (inject the dependencies via setter or via a constructor)  
class PasswordVerifier2 {
  constructor(rules, dayOfWeekFn) {
    this.rules = rules;
    this.dayOfWeekFn = dayOfWeekFn;
  }

  verify(input) {
    const errors = [];
    this.rules.forEach((rule) => {
      const result = rule(input);
      if (result.passed == false) {
        errors.push(result.reason);
      }
    });
    return errors;
  }
}

const SUNDAY = 0, MONDAY = 1, SATURDAY = 6;
class RealTimeProvider {
  constructor(){
    this.getDay = () => moment().day();
  }
}
class PasswordVerifier3 {
  constructor(rules, timePorvide) {
    this.rules = rules;
    this.timePorvide = timePorvide;
  }

  verify(input) {
    if ([SATURDAY, SUNDAY].includes(this.timePorvide.getDay())) {
      throw new Error("It's the weekend");
    }

    const errors = [];
    this.rules.forEach((rule) => {
      const result = rule(input);
      if (result.passed == false) {
        errors.push(result.reason);
      }
    });
    return errors;
  }
}

const passwordVerfierFactory = (rules) => {
  return new PasswordVerifier3(rules, new RealTimeProvider());
}

module.exports = {
  verifyPassword,
  PasswordVerifier1,
  PasswordVerifier2,
  PasswordVerifier3,
  passwordVerfierFactory,
  oneUpperCaseRule,
  SUNDAY,
};
