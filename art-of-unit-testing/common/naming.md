# Naming

I like to put three pieces of information in test names:

- The unit of work under test.
- The scenario or inputs of the unit.
- The expected behavior or exit point

N.B.: We will use this pattern: [SUT], [scenario], [expectation]

example:

```jsx
test("verifyPassword, giving a failing rule, returns errors", () => {
 ...
})
```

A better way to do it:

```jsx
describe([SUT], () => {
 describe([scenario or input], () => {
  it([expectation], () => {
   ...
  }
 })
})

// example :

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
```
