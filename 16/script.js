const moment = require('moment');

function getCurrentDate() {
  return moment().format('YYYY-MM-DD');
}

module.exports = getCurrentDate;