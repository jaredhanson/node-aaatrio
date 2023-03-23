var EventEmitter = require('events').EventEmitter;
var util = require('util');


function Response(name, options) {
  EventEmitter.call(this);
  this.allow = undefined;
  if (typeof name == 'boolean') {
    this.allow = name;
    this.grant = options;
  } else {
    this.prompt = name;
    this.params = options;
  }
}

util.inherits(Response, EventEmitter);


module.exports = Response;
