const { oneUpperCaseRule } = require("../../PasswordVerifier")

describe("one uppercase rule", () => {
  test("given no uppercase, it fails", () => {
    // WHEN
    const result = oneUpperCaseRule("abc");

    // THEN
    expect(result.passed).toEqual(false);
  });

  test("given one uppercase, it passes", () => {
    // when
    const result = oneUpperCaseRule("aBc");

    // THEN
    expect(result.passed).toEqual(true);
  });

  test("given a different uppercase, it passes", () => {
    // WHEN
    const result = oneUpperCaseRule("ABC");

    // THEN
    expect(result.passed).toEqual(true);
  })

})


/* 
we can reduce the duplication there by using a parameterized tests ( test.each())
*/


describe("one uppercase rule", () => {
  test.each([
    ["Abc", true],
    ["ABC", true],
    ["abc", false]
  ])("given %s, %s", (input, expected) => {
    const result = oneUpperCaseRule(input);

    expect(result.passed).toEqual(expected);
  }) 
})