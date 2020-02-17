import * as winston from 'winston';
import _ from 'lodash'

const customColors = {
  trace: 'white',
  debug: 'green',
  info: 'green',
  warn: 'yellow',
  crit: 'red',
  fatal: 'red'
};

const defaultLevel = process.env.LOGLEVEL || '2';

const logger = winston.createLogger({
  levels: {
    trace: 0,
    debug: 1,
    info: 2,
    warn: 3,
    crit: 4,
    fatal: 5
  },
});

winston.addColors(customColors);

// Extend logger object to properly log 'Error' types
var origLog = logger.log;

/* LOGGER EXAMPLES
    app.logger.trace('testing');
    app.logger.debug('testing');
    app.logger.info('testing');
    app.logger.warn('testing');
    app.logger.crit('testing');
    app.logger.fatal('testing');
    */

export default logger;