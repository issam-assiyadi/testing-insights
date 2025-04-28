const { verifyPassword } = require("../../PasswordVerifier/index.js");

describe("PasswordVerifier", () => {
  describe("with a failing rule", () => {
    // GEVIN
    const fakeRule = (input) => ({
      passed: false,
      reason: "fake reason",
    });

    it("has an error message based on the rule.reason", () => {
      // WHEN
      const errors = verifyPassword("any input", [fakeRule]);

      // THEN
      expect(errors[0]).toContain("fake reason");
    });
  });
});

/*

describe("[SUT]"", () => {
  describe("[scenario or input]", () => {
    it ("[expectation]")
      // it's better to reduce the number of the assertions in each test to reduce the assertion roulette.
    })
  })

or

test("[SUT, scenario or input, expectation]", () => {
  // the remarque there.
})
*/
