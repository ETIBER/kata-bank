module.exports = function server(app, options, accountController) {
  const bodyParser = require('body-parser')

  app.use(bodyParser.urlencoded({ extended: false }))

  app.use(bodyParser.json())
  app.post('/operation', function (req, res) {
    accountController.applyOperation(req.body.amount)

    res.send('OK')
  })

  app.get('/operation', function (req, res) {
    res.send(accountController.getOperation())
  })

  app.listen(options.port, function () {
    console.log(`Example app listening on port ${options.port}!`)
  })
}

