const winston = require('winston')
module.exports = class LoggerRepository {
  constructor(){
    this.errorTransport = new winston.transports.File({filename: 'error.log', level: 'error'})
    this.combineTransport = new winston.transports.File({filename: 'combined.log'})
  }

  find(serviceName){
    return winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      defaultMeta: {service: serviceName},
      transports: [
        this.errorTransport,
        this.combineTransport
      ]
    });
  }

}
