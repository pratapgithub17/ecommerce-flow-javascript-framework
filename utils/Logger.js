const winston = require('winston');
const path = require('path');
const fs = require('fs');

// Create logs folder automatically
const logDir = 'logs';

if (!fs.existsSync(logDir)) {

   fs.mkdirSync(logDir);
}

const logger = winston.createLogger({

   level: 'info',

   format: winston.format.combine(

      winston.format.timestamp({

         format: 'YYYY-MM-DD HH:mm:ss'
      }),

      winston.format.printf(({

         timestamp,
         level,
         message

      }) => {

         return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
      })
   ),

   transports: [

      // Console Logging
      new winston.transports.Console(),

      // File Logging
      new winston.transports.File({

         filename: path.join(logDir, 'execution.log')
      })
   ]
});

module.exports = logger;