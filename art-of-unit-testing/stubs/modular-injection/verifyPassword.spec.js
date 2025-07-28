const { verifyPassword, inject } = require(".")
const { SUNDAY } = require("../../constants")

const injectDate = (newDate) => {
  const reset = inject({
    moment: () => {
      // faking moment.js module's API
      return {
        day: () => newDate
      }
    }
  })

  return reset;
}


describe("verify password", () => {
  it("on weekends, throws exceptions", () => {
    const reset = injectDate(SUNDAY);

    expect(() => verifyPassword("", [])).toThrow("It's the weekend!");

    reset();
  })
})
