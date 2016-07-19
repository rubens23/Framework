const http = require('http');
const Router = require('./lib/router');
const router = new Router();

router.get('/nbaPlayer', (req, res) => {
  res.write('New NBA player');
  res.end();
});

router.post('/nbaPlayer', (req,res) => {
  res.send('Made new player');
});

router.delete('/nbaPlayer', (req,res) => {
  res.send('Player deleted');
});

router.put('/nbaPlayer', (req,res) => {
  res.send('Player updated');
});

http.createServer((req, res) => {

}).listen(3000, () => console.log('up on 3000'));
