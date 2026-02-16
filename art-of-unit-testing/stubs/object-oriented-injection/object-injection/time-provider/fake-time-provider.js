class FakeTimeProvider {
    constructor(fakeDay) {
        this.fakeDay = fakeDay;
    }

    getDay() {
        return this.fakeDay;
    }
}

module.exports = {
    FakeTimeProvider
}