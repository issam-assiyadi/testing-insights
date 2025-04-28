const verifyPassword = (input, rules) => {
  const errors = [];
  rules.forEach(rule => {
    const result = rule(input);
    if (!result.passed) {
      errors.push(`error ${result.reason}`);
    }
  });
  return errors;
}

class PasswordVerifier1 {
  constructor() {
    this.rules = [];
  }

  addRule (rule) {
    this.rules.push(rule);
  }

  verify (input) {
    const errors = [];
    this.rules.forEach((rule) => {
      const result = rule(input);
      if (result.passed == false) {
        errors.push(result.reason);
      }
    })
    return errors;
  }
}

const oneUpperCaseRule = (input) => ({
  passed: (input.toLowerCase() !== input),
  reason: "at least one upeer case needed"
})

module.exports = {
  verifyPassword,
  PasswordVerifier1,
  oneUpperCaseRule
}