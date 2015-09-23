# tv-enable

register TV plugin with all dependencies

<a href="https://nodei.co/npm/tv-enable/"><img src="https://nodei.co/npm/tv-enable.png?downloads=true"></a>

[![Build Status](https://travis-ci.org/joaquimserafim/tv-enable.png?branch=master)](https://travis-ci.org/joaquimserafim/tv-enable)



## Usage

```js
var Hapi        = require('hapi')
var tvEnable    = require('tv-enable')

...

var server = new Hapi.Server()

...

tvEnable(server, function(err) {})

```

## Development

**this projet has been set up with a precommit that forces you to follow a code style, no jshint issues and 100% of code coverage before commit**


to run test
``` js
npm test
```

to run jshint
``` js
npm run jshint
```

to run code style
``` js
npm run code-style
```

to check code coverage
``` js
npm run check-coverage
```

to open the code coverage report
``` js
npm run coverage
```
