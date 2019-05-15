const Account = require('../../../src/domain/account')

module.exports = class AccountRepository {
    constructor(loggingRepository) {
        this.account = new Account([], loggingRepository)
    }

    find() {
        return this.account
    }
}
