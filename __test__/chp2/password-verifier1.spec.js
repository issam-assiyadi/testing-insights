const { PasswordVerifier1 } = require("../../PasswordVerifier");

describe("PasswordVerifier1", () => {
  let verifier;
  beforeEach(() => (verifier = new PasswordVerifier1()));

  describe("with a failing rule", () => {
    let errors;

    beforeEach(() => {
      // GIVEN
      const fakeRule = () => ({ passed: false, reason: "fake reason" });
      verifier.addRule(fakeRule);

      // WHEN
      errors = verifier.verify("any value");
    });

    it("has an error message based on the rule.reason", () => {
      // THEN
      expect(errors[0]).toContain("fake reason");
    });

    it("has exactly one error", () => {
      // THEN
      expect(errors.length).toBe(1);
    });
  });
});
