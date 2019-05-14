const Account = require ('../../src/domain/account')
const Operation = require ('../../src/domain/transaction')
const logger = require ('../../src/infrastructure/logger')

module.exports = class accountController{

  constructor(account) {
    this.account = account
  }

  applyOperation(amount){
    const operation = new Operation(amount);
    logger.info(amount);
    this.account.applyOperation(operation)
  }

  getOperation() {
    return this.account.retrieveHistoryOfTransactions()
  }

}
