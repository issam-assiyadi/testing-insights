const { PasswordVerifier1 } = require("../../PasswordVerifier");

const makeVerfier = () => new PasswordVerifier1();
const passingRule = () => (input) => ({ passed: true, reason: "" });

const makeVerifierWithPassingRule = () => {
  const verifier = makeVerfier();
  verifier.addRule(passingRule);
  return verifier;
};

const makeVerfierWithFailedRule = (reason) => {
  const verifier = makeVerfier();
  const fakeRule = (input) => ({ passed: false, reason: reason });
  verifier.addRule(fakeRule);
  return verifier;
};

module.exports = {
  makeVerfier,
  passingRule,
  makeVerfierWithFailedRule,
  makeVerifierWithPassingRule
}