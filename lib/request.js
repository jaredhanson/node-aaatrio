var Response = require('./response');
var EventEmitter = require('events').EventEmitter;
var util = require('util');


function Request(client) {
  EventEmitter.call(this);
  this.client = client;
}

util.inherits(Request, EventEmitter);

Request.prototype.respond = function(name, options) {
  var response = new Response(name, options);
  return response;
};

Request.prototype.prompt = function(name, options) {
  return this.respond(name, options);
}

Request.prototype.permit = function(grant) {
  return this.respond(true, grant);
}


module.exports = Request;
