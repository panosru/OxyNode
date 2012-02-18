# Dependencies
fs      = require 'fs'
path    = require 'path'
_       = require 'underscore'

# Error Handler
class ErrorHandler
  _configure = null
  
  constructor : (@Server, Configure) ->
    _configure = Configure
    loadErrors()
    
  # Private
  
  #-Variables
  _privateScope = {}
  
  #-Methods
  
  # init Errors
  loadErrors = ->
    _errors = fs.readdirSync "#{__dirname}/Errors/"
    _errors.forEach (error) ->
      error_name = path.basename error, '.coffee'
      _privateScope[error_name] = require "#{__dirname}/Errors/#{error_name}"
  
  
  # Public
  
  init : () ->
    # Init error routes
    @initErrorRoutes()
    
    _configure(
      global : =>
        use : [
          # handle errors
          @handle
          # handle not found routes
          @noMatchRoute
        ]
    )
    
  
  #-Core Handler
  handle : (err, req, res, next) ->
    if err instanceof Error
      if err.handle?
        err.handle? err, req, res
      else
        next err
    else
      next err

  noMatchRoute : (req, res, next) ->
    # Throw 404 on everything that is not found
    _privateScope.NotFound().handle _privateScope.NotFound, req, res
    
  # ====== Error Routes ======= #
  initErrorRoutes : () ->
    _.values(_privateScope).forEach (error) =>
      error().route @Server, error
    
module.exports = (Server, Configure) ->
  new ErrorHandler(Server, Configure)