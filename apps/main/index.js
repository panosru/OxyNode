// Setup module dependencies
var express     = require('express')
  , jade        = require('jade')
  , Settings    = require('settings')
  , BundleUp    = require('bundle-up')
  , Gzippo      = require('gzippo')
  , nib         = require('nib')
  , stylus      = require('stylus')
  , i18n        = require('i18next')
  , chromeframe = require('express-chromeframe')
;

// Load settings
Settings = new Settings(__dirname + '/system/config/environment.js', { globalKey : '$settings' });

//Setup application (Server)
var app = module.exports = express.createServer();

//Load i18n
i18n.init({
    lng : 'el-GR'
  , fallbackLng : 'en-US'
  , resGetPath : $settings.paths.locales
  , resSetPath : $settings.paths.locales
  , dynamicLoad: true
});

// Bundle assets
BundleUp(app, $settings.paths.config + 'assets', {
    staticRoot : $settings.paths.public
  , staticUrlRoot : '/'
  , bundle : true
  , compilers: {
      stylus: function(str, path) {
        return stylus(str)
          .set("filename", path)
          .set("compress", true)
          .use(nib())
          .import("nib") // This imports the nib lib
        ;
      }
    }
});

// Load System
var System = require('./system');

// Get Helpers
var _ErrorHandler = System.loadHelper('error-handler');

//-Development Env configuration
app.configure('development', function() {
  //app.use(express.responseTime());
  app.use(express.profiler());
  //app.use(express.logger({ format: ':method :url' }));
});

//-Global configuration
app.configure(function(){
  app.enable('case sensitive routes');
  app.enable('strict routing');
  app.set('views', $settings.paths.views);
  app.set('view engine', $settings.app.view.engine);
  app.use(express.favicon());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: $settings.app.session.secret }));
  app.use(i18n.handle);
  app.use(express.csrf());
  app.use(require($settings.paths.config + 'modul8'));
  //app.use(chromeframe('IE8'))
  app.use(app.router);
  app.use(Gzippo.staticGzip($settings.paths.public));
  app.use(Gzippo.compress());
  app.use(_ErrorHandler);
});

//-Development Env configuration
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

//-Production Env configuration
app.configure('production', function(){
  app.enable('view cache');
  app.use(express.errorHandler()); 
});

// Dynamic helpers
i18n.serveClientScript(app)        // grab i18next.js in browser
    .serveDynamicResources(app)    // route which returns all resources in on response
<<<<<<< HEAD
    //.serveMissingKeyRoute(app)    // route to send missing keys
=======
    .serveMissingKeyRoute(app)    // route to send missing keys
>>>>>>> 045b528129f2f31bac0b3a98c7b0df4d5c56a8a5
    .registerAppHelper(app)
;

app.dynamicHelpers({
  csrf_token : function(req, res) {
    return req.session._csrf;
  }
});

//Setup Socket.IO
// Routes
require($settings.paths.routes)(app);

//-Error routes
app.all('/404', function(req, res, next){
  throw new _ErrorHandler.NotFound;
});

app.all('/403', function(req, res, next){
  throw new _ErrorHandler.Error403;
});

app.all('/500', function(req, res, next){
  next(new Error('keyboard cat!'));
});

app.all('/*', function (req, res, next) {
  //throw new _ErrorHandler.NotFound;
  next();
});

// App Listener
app.listen($settings.app.port);
console.log("Main application server listening on port %d in %s mode", app.address().port, app.settings.env);
