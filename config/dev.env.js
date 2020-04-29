'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
进行更改
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
