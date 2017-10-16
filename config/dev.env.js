var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: "https://ywdev.youngworld.com.cn/ywapi/server.php/"
})
