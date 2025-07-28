const { makeVerifier } = require(".")
const { SUNDAY } = require("../../../constants")

describe("verify password", () => {
  it("on weekends, throws exceptions", () => {
    const alwaysSunday = () => SUNDAY
    const verifyPassword = makeVerifier([], alwaysSunday);

    expect(() => verifyPassword("")).toThrow("It's the weekend")
  })
})