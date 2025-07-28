const { verifyPassword } = require(".")
const { SUNDAY } = require("../../../constants")

describe("verify password", () => {
  it("on weekends, throws exceptions", () => {
    const alwaysSunday = () => SUNDAY
    expect(() => verifyPassword("", [], alwaysSunday)).toThrow("It's the weekend")
  })
})


/*
The issue with the original test is that it doesn't align with how try-catch logic works.

When testing code that may throw an error, we shouldn't directly test the result. Instead,
we should check whether the function *throws* as expected.

For example, this is incorrect:
  expect(verifyPassword("", [], alwaysSunday).toThrow("It's the weekend"))

Here, `verifyPassword(...)` is executed immediately, and its result is passed to `expect`,
which doesn't make sense. We're not testing a function that returns a value — we're testing
whether an exception is thrown.

*/
