# rubens-router
Homework

```js
var http = require('http')
var Router = require('rubens-router')
var router = new Router()

router.get('/', function (req, res) {
  res.send('Hello World')
})

http.createServer(router.route()).listen(3000);

```

## Installation

```bash
$ npm install rubens-router
```

## Features

  * Easily creates routes for each REST request and stores its path.
  * Makes routes object for easy routing access.

## How to use

  * Require in the router constructor from the package

```js
var Router = require('rubens-router');
var router = new Router();
```

  * Specify what REST method to what request url you want to create and store the path inside the package's `routes` object

  * `res.send` is a simple method that combines `res.write()` and `res.end()` to make logging something out easy.

```js
router.get('/route',(req,res)=>{
  // Insert whatever you want the GET request to /route to do
  res.send('Hello from the GET request!')
})
```
output:

```console
Hello from the GET request!
```

  * `router.route()` is passed into `http.createServer()` in place of `(req,res)` which will search through the `routes` object for that route and callback function to run.

```js
http.createServer(router.route()).listen(3000);
```

## Tests

  To run the test suite, first install the devDependencies in the project file, then run `npm test`:

```bash
$ npm install
$ npm test
```
