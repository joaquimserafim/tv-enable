# tv-enable

register TV plugin with all dependencies

<a href="https://nodei.co/npm/tv-enable/"><img src="https://nodei.co/npm/tv-enable.png?downloads=true"></a>

[![Build Status](https://travis-ci.org/joaquimserafim/tv-enable.png?branch=master)](https://travis-ci.org/joaquimserafim/tv-enable)



####API

```js
var Hapi        = require('hapi')
var tvEnable    = require('tv-enable')

...

var server = new Hapi.Server()

...

tvEnable(server, function(err) {})

```