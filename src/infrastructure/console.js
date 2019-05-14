module.exports = function server(yargs, accountController) {
  const argv = yargs.argv

  if(argv.amount){
    accountController.applyOperation(argv.amount)
  }
}
