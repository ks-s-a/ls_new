const fs = require('fs')
const path = require('path')

function getTemplates() {
  // console.log('__dirname is: ', __dirname);
  return fs.readdirSync(path.join(__dirname, '../templates') ).map(path => path.split('.')[0])
}

module.exports = {
  getTemplates,
}
