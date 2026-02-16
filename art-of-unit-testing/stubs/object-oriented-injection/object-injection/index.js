const { SUNDAY, SATURDAY } = require("../../../constants");
const { RealtimeProvider } = require("./time-provider/real-time-provider");


class PasswordVerifier {
    constructor(rules, timeProvider) {
        this.rules = rules;
        this.timeProvider = timeProvider;
    }

    verify(input) {
        if ([SUNDAY, SATURDAY].includes(this.timeProvider.getDay())) {
            throw new Error ("It's the weekend!")
        }

        const errors = [];
        // ...
        return errors;
    }
}


const PasswordVerifierFactory = (rules) => {
    return new PasswordVerifier(rules,  new RealtimeProvider())
} 


module.exports = {
    PasswordVerifier,
    PasswordVerifierFactory,
}