class i18n
  constructor : (@Server) ->
    @i18next = @getInstance()
    @_       = require 'underscore'

  # Get i18next instance
  getInstance : ->
    @i18next = require 'i18next' if "undefined" is typeof @i18next
    @i18next

  init : (opts) ->
    # If no object is defined then set an empty object
    opts = opts ? {}

    # Set default values
    options =
      lng : 'en-US'
      fallbackLng : 'en-US'
      resGetPath : $settings.paths.locales
      resSetPath : $settings.paths.locales

    @_.extend options, opts

    # Load i18next and set an instance of i18next
    @i18next = @i18next.init options

  handle : ->
    console.log @i18next
    @i18next.handle.apply @i18next, [].slice.call arguments, 0

  initHelpers : (opts) ->
    # If no object is defined then set an empty object
    opts = opts ? {}
    
    # Set default values
    options = 
      serveClientScript     : true
      serveDynamicResources : true
      serveMissingKeyRoute  : false
      registerAppHelper     : true
      
    @_.extend options, opts
    
    # grab i18next.js in browser
    @getInstance().serveClientScript @Server if options.serveClientScript
  
    # route which returns all resources in on response
    @getInstance().serveDynamicResources @Server if options.serveDynamicResources
  
    # route to send missing keys
    @getInstance().serveMissingKeyRoute @Server if options.serveMissingKeyRoute
  
    # Register server helper
    @getInstance().registerAppHelper @Server if options.registerAppHelper
    
module.exports = (Server) ->
  new i18n Server