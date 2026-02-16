const { SUNDAY, SATURDAY } = require("../../../constants");

class PasswordVerifier  {
    constructor(rules, dayOfWeekFn) {
        this.rules = rules;
        this.dayOfWeekFn = dayOfWeekFn;
    }


    verify (inputs) {
        if ([SUNDAY, SATURDAY].includes(this.dayOfWeekFn())) {
            throw new Error("It's the weekend!");
        }

        const errors = [];

        // ... rest of the logic

        return errors;
    }
}

module.exports = {
    PasswordVerifier
}