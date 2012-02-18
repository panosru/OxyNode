// Required Dependencies (Private scope)
var
    // Modules
    express   = require('express')
  , Resource  = require('express-resource')
  , jade      = require('jade')
  , Settings  = require('settings')
  , _         = require('underscore')
    
    // Libraries
  , i18n          = require('./i18n')
  , Bundle        = require('./Bundle')
  , ErrorHandler  = require('./ErrorHandler')
  , Router        = require('./Router')
  
    // Variables
  , _app            = null
  , _server         = null
  , _error_handler  = null
  , _i18n           = null
  , _router         = null
;

// Globalize settings
new Settings(__dirname + '/config/environment.js', { globalKey : '$settings' });

/**
 * =======================================
 * Private Methods
 * =======================================
 */

// Pass Array with settings to be enabled
function _enableSettings (settings) {
  // Get server
  var server = getServerInstance();
  
  // Iterate through keys
  settings.forEach(function (setting) {
    server.enable(setting);
  });
};

// Pass Object with settings to be set
function _setSettings (settings) {
  // Get Keys
  var keys = _.keys(settings);
  
  // Get server
  var server = getServerInstance();
  
  // Iterate through keys
  keys.forEach(function (key) {
    server.set(key, settings[key]);
  });
};

// Pass Array with settings to be used
function _useSettings (settings) {
  // Get server
  var server = getServerInstance();
  
  // Iterate through keys
  settings.forEach(function (setting) {
    server.use(setting);
  });
};

//Handle configuration
function _handleConfiguration(configuration) {
  // Get types
  var types = _.keys(configuration);

  // Iterate through types
  types.forEach(function (type) {
    switch (type) {
      case 'enable':
        _enableSettings(configuration[type]);
        break;
      
      case 'set':
        _setSettings(configuration[type]);
        break;
        
      case 'use':
        _useSettings(configuration[type]);
        break;
      
      default:
    }
  });
}

/**
 * =======================================
 * Creators
 * =======================================
 */

// Create Application instance
exports.createAppInstance = function () {
  return getAppInstance();
};

// Create Application server
exports.createServerInstance = function () {
  return getServerInstance();
};


/**
 * =======================================
 * Loaders
 * =======================================
 */

// Load helpers
exports.loadHelper = function (helper) {
  return require($settings.paths.helpers + helper );
};


/**
 * =======================================
 * Actions
 * =======================================
 */
// Set System configuration
exports.configure = function (configuration) {
  // Get env's
  var envs = _.keys(configuration);
  
  // Get server
  var server = getServerInstance();
  
  // Call pre configure event
  if (
        ('undefined' !== typeof configuration._preConfigure)
    &&  ('function' === typeof configuration._preConfigure)
  ) configuration._preConfigure();
  
  // Iterate through envs
  envs.forEach (function (env) {
    switch (env) {
      case 'global':
        server.configure(function () {
          _handleConfiguration(configuration[env]());
        });
        break;
        
      default:
        server.configure(env, function () {
          _handleConfiguration(configuration[env]());
        });
    }
  });
  
  // Call post configure event
  if (
        ('undefined' !== typeof configuration._postConfigure)
    &&  ('function' === typeof configuration._postConfigure)
  ) configuration._postConfigure();
}


/**
 * =======================================
 * Getters
 * =======================================
 */

// Get Application Instance (Singleton)
exports.getAppInstance = getAppInstance = function () {
  if (null === _app) {
    _app = express;
  }
  return _app;
};

// Get Application Server (Singleton)
exports.getServerInstance = getServerInstance = function () {
  if (null === _server) {
    _server = getAppInstance().createServer();
  }
  return _server;
};

// Get Error Handler (Singleton)
exports.getErrorHandlerInstance = getErrorHandlerInstance = function () {
  if (null === _error_handler) {
    _error_handler = ErrorHandler(getServerInstance(), exports.configure);
  }
  return _error_handler;
}

// Get i18n (Singleton)
exports.getI18nInstance = getI18nInstance = function () {
  if (null === _i18n) {
    _i18n = i18n(getServerInstance());
  }
  return _i18n;
};

// Get Router (Singleton)
exports.getRouterInstance = getRouterInstance = function () {
  if (null === _router) {
    _router = Router(getServerInstance());
  }
  return _router;
}

// Get Bundle
exports.getBundle = function () {
  return Bundle(getServerInstance());
}