// Setup module dependencies
var
    // Modules
    Gzippo      = require('gzippo')

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
  
    // Get Error Handler
  , ErrorHandler  = System.getErrorHandlerInstance()
  
    // Get Router
  , Router        = System.getRouterInstance()
;


// Bootstrap Application

//-Start i18n
i18n.init();

//-Start Bundle
Bundle.init({
  bundle : false
});

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
        , 'strict routing'
      ],
      
      set : {
          'views'       : $settings.paths.views
        , 'view engine' : $settings.app.view.engine
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
        , Server.router
        , Gzippo.staticGzip($settings.paths.public)
        , Gzippo.compress()
        , ErrorHandler.handle
      ]
    }
  }
});

//-Dynamic helpers
i18n.initHelpers();

Server.dynamicHelpers({
  csrf_token : function(req, res) {
    return req.session._csrf;
  }
});

//-Routes
Router.init();

//-App Listener
Server.listen($settings.app.port);
console.log("Main application server listening on port %d in %s mode", Server.address().port, Server.settings.env);

module.exports = Server;