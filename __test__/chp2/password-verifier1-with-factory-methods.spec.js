const {
  makeVerfierWithFailedRule,
  makeVerifierWithPassingRule,
} = require("../utils/factoryMethods");

describe("PasswordVerifier", () => {
  describe("with a failing rule", () => {
    it("has an error message based on the rule.reason", () => {
      const verifier = makeVerfierWithFailedRule("fake reason");
      // WHEN
      const errors = verifier.verify("any value");

      // THEN
      expect(errors[0]).toContain("fake reason");
    });

    it("has exactly one error", () => {
      const verifier = makeVerfierWithFailedRule("fake reason");
      // WHEN
      const errors = verifier.verify("any value");

      // THEN
      expect(errors.length).toBe(1);
    });
  });

  describe("with a passing rule", () => {
    it("has no errors", () => {
      const verifier = makeVerifierWithPassingRule();
      const errors = verifier.verify("any input");
      expect(errors.length).toBe(0);
    });
  });
});

/* 
since we delete the beforeEach() block, describe() blocks act only as added sugar for understanding.
we can use test("...", () => {}) instead.
*/
