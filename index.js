'use strict';

var Tv      = require('tv')
var Vision  = require('vision')
var Inert   = require('inert')

module.exports = tvEnable;

function tvEnable(server, options, cb) {
  if (typeof options === 'function') {
    cb      = options
    options = {}
  }

  server.register([Inert, Vision, {register: Tv, options: options}], registerCb)

  function registerCb(err) {
    cb(err || null)
  }
}
