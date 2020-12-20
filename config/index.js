const configJs = require('./dev.js').config;

const configJson = JSON.parse(JSON.stringify(configJs));

module.exports = configJson;