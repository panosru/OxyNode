
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes/main')
  , api = require('./routes/api')
;

var app = module.exports = express.createServer();

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};

// Configuration
app.configure(function(){
  app.enable('jsonp callback');
  app.enable('case sensitive routes');
  app.enable('strict routing');
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
  //app.use(allowCrossDomain);
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes
app.get('/', routes.index);
app.get('/api/user/:id', api.get_user);

//App
app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
