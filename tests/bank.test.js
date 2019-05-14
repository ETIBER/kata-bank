jest.mock('../src/account')

import {Account} from '../src/account'
import {Transaction} from '../src/transaction'
import {Bank} from '../src/bank'

describe('constructor', function () {
  it('should set balance to zero', () => {
    const expectedAmount = 0

    const account = new Account()

    expect(account.currentBalance()).toBe(expectedAmount)
  })
});


describe('executeOrder', function () {
  it('should applyOperation on each account', () => {
    const creditorAccount = new Account()
    const debtorAccount = new Account()

    const operation = new Transaction(5, creditorAccount, debtorAccount)
    Bank.executeOrder(operation)

    expect(creditorAccount.applyOperation).toBeCalledWith(operation)
    expect(debtorAccount.applyOperation).toBeCalledWith(operation)
  })
});
