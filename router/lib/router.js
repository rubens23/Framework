'use strict';

const Router = module.exports = function() {
  this.routes = {};
};

Router.prototype.get = function(url, cb) {
  if(!this.routes.GET) this.routes.GET = {};
  this.routes.GET[url] = cb;
};

Router.prototype.post = function(url, cb) {
  if (!this.routes.POST) this.routes.POST = {};
  this.routes.POST[url] = cb;
};

Router.prototype.put = function(url, cb) {
  if (!this.routes.PUT) this.routes.PUT = {};
  this.routes.PUT[url] = cb;
};

Router.prototype.delete = function(url, cb) {
  if (!this.routes.DELETE) this.routes.DELETE = {};
  this.routes.DELETE[url] = cb;
};

Router.prototype.route = function() {
  return function(req, res) {
    send(req, res);
    this.routes[req.method][req.url](req, res);
  }
}

function send(req, res) {
  res.send = function() {
    res.writeHead(200, {
      'Content-Tyoe': 'text/html'
    });
    res.write(str);
    res.end();
  }
}
