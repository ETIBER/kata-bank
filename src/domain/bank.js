export class Bank {

  static executeOrder(operation) {
    operation.getDebtor().applyOperation(operation)
    operation.getCreditor().applyOperation(operation)
  }
}
