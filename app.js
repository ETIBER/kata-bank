const express =  require ('express')
const yargs = require('yargs')


const AccountController = require("./src/infrastructure/accountController")
const Account = require("./src/domain/account")
const server = require('./src/infrastructure/server')
const consoleServer = require('./src/infrastructure/console')

const options = {
  port: 3001
}
const accountController = new AccountController(new Account())

server(express(), options, accountController);
consoleServer(yargs, accountController)
