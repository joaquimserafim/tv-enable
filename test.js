'use strict'

var Hapi  = require('hapi')
var Lab   = require('lab')
var Code  = require('code')

var lab = module.exports.lab = Lab.script()

var describe  = lab.describe
var it        = lab.it
var expect    = Code.expect

var tvEnable = require('./')

describe('tv', function() {

  it('should do the register', function(done) {
    var server = new Hapi.Server()

    server.connection({})

    tvEnable(server, function(err) {
      expect(err).to.be.null()
      expect(server.views).to.exists()
      done()
    })
  })

  it('should fail doing the register', function(done) {
    var server = {
      register: function(_, cb) {
        cb(new Error())
      }
    }

    tvEnable(server, function(err) {
      expect(err).to.exists()
      done()
    })
  })
})
