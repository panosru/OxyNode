// Setup module dependencies
var
    // Modules
    Gzippo        = require('gzippo')

    // Load System
  , System        = require('./system')
  
    // Get application instance
  , App           = System.createAppInstance()
  
    // Setup application server    
  , Server        = System.createServerInstance()
  
    // Get i18n
  , i18n          = System.getI18nInstance()
  
    // Get Bundle
  , Bundle        = System.getBundle()
  
    // Get Router
  , Router        = System.getRouterInstance()
  
    // Get Error Handler
  , ErrorHandler  = System.getErrorHandlerInstance()
;


// Bootstrap Application
System.configure({
  //-Development Env configuration
  development : function () {
    return {
      use : [
          App.profiler()
        , App.errorHandler({ dumpExceptions: true, showStack: true })
      ]
    }
  },
  
  //-Production Env configuration
  production : function () {
    
    return {
      enable : [
        'view cache'
      ],
      
      use : [
        App.errorHandler()
      ]
    }
  },
  
  //-Global configuration
  global : function () {
    return {
      enable : [
          'case sensitive routes'
        //, 'strict routing'
      ],
      
      set : {
          'views'         : $settings.paths.views
        , 'view engine'   : $settings.app.view.engine
        , 'view options'  : { layout: false }
      },
      
      use : [
          App.favicon()
        , App.bodyParser()
        , App.methodOverride()
        , App.cookieParser()
        , App.session({ secret: $settings.app.session.secret })
        , i18n.getInstance().handle
        , App.csrf()
        , require($settings.paths.config + 'modul8')
        , Gzippo.staticGzip($settings.paths.public)
        //, Gzippo.compress()
        , Server.router
      ]
    }
  },
  
  //=== Events
  
  // Pre configure event
  _preConfigure : function () {
    //-Start i18n
    i18n.init();
    
    //-Start Bundle
    Bundle.init({
      bundle : true
    });
  },
  
  // Post configure event
  _postConfigure : function () {
    //-Routes
    Router.init();
    
    //-Error Handler
    ErrorHandler.init();
    
    //-Dynamic helpers
    i18n.initHelpers();

    Server.dynamicHelpers({
      csrf_token : function(req, res) {
        return req.session._csrf;
      }
    });
  }
});

//-App Listener
Server.listen($settings.app.port);
console.log("Main application server listening on port %d in %s mode", Server.address().port, Server.settings.env);

module.exports = Server;