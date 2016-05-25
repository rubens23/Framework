const chai = require('chai');
const chaiHTTP = require('chai-http');
const expect = chai.expect;
chai.use(chaiHTTP);
const request = chai.request;
const Router = require('../lib/router.js');
const router = new Router();
require('../server.js');

describe('REST methods test', () => {
  it('should give text on /nbaPlayer', (done) => {
    request('localhost:3000')
    .get('/nbaPlayer')
    .end((err,res) => {
      expect(err).to.eql(null);
      expect(res.text).to.eql('New NBA player');
      done();
    });
  });
  it('should send a POST request', (done) => {
    request('localhost:3000')
   .post('/nbaPlayer')
   .end((err, res) =>{
     expect(err).to.eql(null);
     expect(res).to.have.status(200);
     expect(res.text).to.eql('Made new player');
     done();
   });
  });
  it('should send a PUT request', (done) => {
    request('localhost:3000')
   .put('/nbaPlayer')
   .end((err, res) =>{
     expect(err).to.eql(null);
     expect(res).to.have.status(200);
     expect(res.text).to.eql('Player updated');
     done();
   });
  });
  it('should send a DELETE request', (done) => {
    request('localhost:3000')
   .delete('/nbaPlayer')
   .end((err, res) =>{
     expect(err).to.eql(null);
     expect(res).to.have.status(200);
     expect(res.text).to.eql('Player deleted');
     done();
   });
  });
});
