const { SUNDAY, PasswordVerifier3 } = require("../../PasswordVerifier/index");

function FakeTimeProvider(fakeDay) {
  this.getDay = function () {
    return fakeDay;
  }
}

describe('verifier', () => {
  test('class constructor: on weekends, throws exceptions', () => {
    const verifier = new PasswordVerifier3([], new FakeTimeProvider(SUNDAY));
    expect(() => verifier.verify('anything')).toThrow("It's the weekend");
  })
})
