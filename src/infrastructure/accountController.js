const CreditTransaction = require('../../src/useCase/creditTransaction')

module.exports = class accountController{

  constructor(loggingRepository, accountRepository) {
    this.loggingRepository = loggingRepository
    this.accountRepository = accountRepository
  }

  applyOperation(amount){
    new CreditTransaction(this.loggingRepository, this.accountRepository).execute(amount)
  }

  getOperation() {
    return this.account.retrieveHistoryOfTransactions()
  }

}
