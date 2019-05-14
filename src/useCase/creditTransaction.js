const Transaction = require ('../../src/domain/transaction')

module.exports = class CreditTransaction {
  constructor(accountRepository) {
    this.accountRepository = accountRepository;
  }
  execute(amount) {
    const account = this.accountRepository.find()
    const transaction = Transaction.factoryCreate(amount)
    account.applyOperation(transaction)
  }
}
