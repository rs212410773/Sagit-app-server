const winston = require('winston');
const winstonMongoDB=require('winston-mongodb');

const logConfiguration = {
    transports: [
        new winston.transports.Console({
            level: 'info'
        }),
        new winston.transports.File({
            level: 'error',
            filename: "./.log.log"
        }),
        new winston.transports.MongoDB({
            level: 'error',
            db:'mongodb://srv1:27017/212410773Sarale&Ruth',
            options:{
                useUnifiedTopology:true
            },
            collection:'logger'
        })
    ],
        
    format: winston.format.combine(
        winston.format.timestamp({format:'MMM-DD-YYYY HH:mm:ss'}),
        winston.format.printf(info =>`${info.level} : ${info.timestamp} : ${info.message}`)

        )
}
const logger= winston.createLogger(logConfiguration);
module.exports=logger;