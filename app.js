const express =  require ('express')
const yargs = require('yargs')

const LoggingRepository = require ('./src/infrastructure/repository/loggerRepository')
const AccountRepository = require ('./src/infrastructure/repository/accountRepository')

const AccountController = require("./src/infrastructure/accountController")

const server = require('./src/infrastructure/server')
const consoleServer = require('./src/infrastructure/console')

const loggingRepository = new LoggingRepository()
const accountRepository = new AccountRepository(loggingRepository)

const options = {
  port: 3001
}
const accountController = new AccountController(accountRepository)

consoleServer(yargs, accountController)
server(express(), options, accountController)
