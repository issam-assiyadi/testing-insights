const { PasswordVerifier } = require(".");
const { SUNDAY, MONDAY } = require("../../../constants")

test("on weekends, throws exceptions", () => {
    const alwaysSunday = () => SUNDAY; // our sub

    // In larger tests, prefer a factory/helper for this setup so object creation details stay out of the test body.
    // This test is simple, but that pattern keeps scenarios focused and easier to read as setup complexity grows.
    const verifier = new PasswordVerifier([], alwaysSunday);

    expect(() => verifier.verify('dump string')).toThrow("It's the weekend!");
})


describe("refactored version", () => {
    const makeVerifier = (rules, dayFn) => {
        return new PasswordVerifier(rules, dayFn);
    }


    test('on weekend, throw an error', () => {
        const alwaysSunday = () => SUNDAY;
        const verifier = makeVerifier([], alwaysSunday);

        expect(() => verifier.verify([])).toThrow("It's the weekend!");
    });

    test("on weekdays, with no rules, passes", () => {
        const alwaysMonday = () => MONDAY;
        const verifier = makeVerifier([], alwaysMonday);

        // ACT
        const result = verifier.verify('dump string')

        expect(result.length).toBe(0);

    })

})