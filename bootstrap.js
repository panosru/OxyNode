// Init Coffee-script system wide (ICED) [TameJS]
require('iced-coffee-script');

// Get Express
var express = require('express');

// Create express server
var app = express.createServer();

// Configure Development Environment
app.configure('development', function() {
  //app.use(express.vhost('app-ui.design.rnd', require('./apps/main')));
  app.use(express.vhost('localhost', require('./apps/main')));
  //app.use(express.vhost('api.design.rnd', require('./apps/api')));
  app.listen(3000);
});

// Configure Production Environment
app.configure('production', function() {
  app.use(express.vhost('example.com', require('./apps/main')));
  app.use(express.vhost('api.example.com', require('./apps/api')));
  app.listen(80);
});

// Report back to console
console.log("VHost server listening on port %d in %s mode", app.address().port, app.settings.env);