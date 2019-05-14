module.exports = class Account {

  constructor(transactions = []) {
    this.transactions = transactions
  }

  currentBalance() {
    return this.transactions.reduce((balance, transaction) => balance + transaction.getAmount(), 0)
  }

  applyOperation(operation) {
    if (this.currentBalance() + operation.getAmount() > 0) {
      this.transactions.push(operation)
    }
  }

  retrieveHistoryOfTransactions() {
    return this.transactions;
  }
}

