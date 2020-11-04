const Papa = require('papaparse');

module.exports = file => {
  return Papa.parse(file);
};
