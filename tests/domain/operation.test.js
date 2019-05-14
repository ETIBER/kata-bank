import {Transaction} from '../../src/domain/transaction'

describe('constructor', function () {
  it('should hold an amount', () => {
    const expectedAmount = 5

    const operation = new Transaction(expectedAmount, "toto", 'toto')

    expect(operation.getAmount()).toBe(expectedAmount)
  })

  it('should hold a debtor', () => {
    const expectedDeptor = "thomas"

    const operation = new Transaction(2, expectedDeptor, 'toto')

    expect(operation.getDebtor()).toBe(expectedDeptor)
  })

  it('should hold a creditor', () => {
    const expectedCreditor = "paul"

    const operation = new Transaction(2, 'toto', expectedCreditor)

    expect(operation.getCreditor()).toBe(expectedCreditor)
  })
});
