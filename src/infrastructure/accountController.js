const CreditTransaction = require('../../src/useCase/creditTransaction')
const GetTransactions = require('../../src/useCase/getTransactions')

module.exports = class accountController {

    constructor(accountRepository) {
        this.accountRepository = accountRepository
    }

    applyOperation(amount) {
        new CreditTransaction(this.accountRepository).execute(amount)
    }

    getTransactions() {
        return new GetTransactions(this.accountRepository).execute()
    }

}
