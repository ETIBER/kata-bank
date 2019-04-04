import {Operation} from '../src/operation'

describe('constructor', function () {
  it('should hold an amount', () => {
    const expectedAmount = 5

    const operation = new Operation(expectedAmount)

    expect(operation.getAmount()).toBe(expectedAmount)
  })
});
