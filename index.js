'use strict';

var Tv      = require('tv')
var Vision  = require('vision')
var Inert   = require('inert')

module.exports = tvEnable;

function tvEnable(server, callback) {

  server.register([Inert, Vision, Tv], registerCb)

  function registerCb(err) {
    callback(err || null)
  }
}
