import {Account} from '../../src/domain/account'
import {Transaction} from '../../src/domain/transaction'

describe('constructor', function () {
  it('should set balance to zero', () => {
    const expectedAmount = 0

    const account = new Account()

    expect(account.currentBalance()).toBe(expectedAmount)
  })
});


describe('applyOperation', function () {
  it('should not change balance when account balance not sufficient', function () {
    const expectedAmount = 2
    const account = new Account([new Transaction(2)])

    account.applyOperation(new Transaction(-5))

    expect(account.currentBalance()).toBe(expectedAmount)
  });

  it('should decrease balance to 10 when withdrawing of 5, in an account with balance of 15', function () {
    const expectedAmount = 10
    const account = new Account([new Transaction(15)])

    account.applyOperation(new Transaction(-5))

    expect(account.currentBalance()).toEqual(expectedAmount)
  });

  it('should have balance to 5 when adding 5 on a new account', function () {
    const expectedAmount = 5
    const account = new Account()

    account.applyOperation(new Transaction(5))

    expect(account.currentBalance()).toEqual(expectedAmount)
  });
});

describe('retrieveHistoryOfTransactions', function () {
  it('should return empty list when no transaction', function () {
    const account = new Account()

    const transactions = account.retrieveHistoryOfTransactions()

    expect(transactions).toEqual([])
  });

  it('should return two transactions after one deposit and one withdrawal', () => {
    const account = new Account([new Transaction(5), new Transaction(-5)]);

    const transactions = account.retrieveHistoryOfTransactions()

    expect(transactions).toEqual([new Transaction(5), new Transaction(-5)])
  })
});
