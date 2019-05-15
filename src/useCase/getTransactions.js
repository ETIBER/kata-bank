const Transaction = require ('../../src/domain/transaction')

module.exports = class GetTransactions {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    execute() {
        const account = this.accountRepository.find()
        return account.retrieveHistoryOfTransactions()
    }
}
