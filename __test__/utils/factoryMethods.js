const { PasswordVerifier1 } = require("../../PasswordVerifier");

const makeVerfier = () => new PasswordVerifier1();
const passingRule = () => (input) => ({ passed: true, reason: "" });

const makeVerifierWithPassingRule = () => {
  const verifier = makeVerfier();
  // the key idea is there since we can create the instance we can use the setter to injet the fake callback.
  // so there we will create the exact the sut and inject all fakes used in the test and the test will focus in the test itself.
  verifier.addRule(passingRule);
  return verifier;
};

const makeVerfierWithFailedRule = (reason) => {
  const verifier = makeVerfier();
  const fakeRule = (input) => ({ passed: false, reason: reason });
  verifier.addRule(fakeRule);return verifier;
};

module.exports = {
  makeVerfier,
  passingRule,
  makeVerfierWithFailedRule,
  makeVerifierWithPassingRule
}