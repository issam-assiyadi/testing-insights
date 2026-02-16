const { PasswordVerifier } = require(".");
const { SUNDAY, MONDAY } = require("../../../constants");
const { FakeTimeProvider } = require("./time-provider/fake-time-provider");

describe("verifyPassword", () => {

    test("on weekend, it should thrown an error", () => {
        const passwordVerifier = new PasswordVerifier([], new FakeTimeProvider(SUNDAY));

        expect(() => passwordVerifier.verify()).toThrow("It's the weekend!");
    });

    test("on weekdays, with empty rules, it should passed", () => {
        // GIVEN
        const passwordVerifier = new PasswordVerifier([], new FakeTimeProvider(MONDAY));

        // WHEN
        const result = passwordVerifier.verify();

        // THEN
        expect(result.length).toBe(0);
    })


})