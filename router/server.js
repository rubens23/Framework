const http = require('http');
const Router = require('./lib/router');
const router = new Router();

router.get('/test', (req, res) => {
  res.write('Hello World!');
  res.end();
});

http.createServer((req, res) => {

}).listen(3000, () => console.log('up on 3000'));
