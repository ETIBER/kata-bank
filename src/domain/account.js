module.exports = class Account {

  constructor(transactions = [], loggerRepository) {
    this.transactions = transactions
    this.logger = loggerRepository.find('operation')
  }

  currentBalance() {
    return this.transactions.reduce((balance, transaction) => balance + transaction.getAmount(), 0)
  }

  applyOperation(operation, logger) {
    if (this.currentBalance() + operation.getAmount() > 0) {
      this.transactions.push(operation)
      this.logger.info(operation)
    }
  }

  retrieveHistoryOfTransactions() {
    return this.transactions;
  }
}

