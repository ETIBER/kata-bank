module.exports = class Operation {
  constructor(amount, debtor, creditor) {
    this.amount = amount
    this.debtor = debtor
    this.creditor = creditor
  }

  getAmount() {
    return this.amount;
  }

  getDebtor() {
    return this.debtor;
  }

  getCreditor() {
    return this.creditor;
  }
}
