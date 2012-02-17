# Dependencies
fs    = require 'fs'
path  = require 'path'
_     = require 'underscore'

# Error Handler
class ErrorHandler
  constructor : (@Server) ->
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
  
  #-Core Handler
  handle : (err, req, res, next) ->
    if err instanceof Error
      if err.handle?
        err.handle? err, req, res
      else
        next err
    else
      next err

  # ====== Error Routes ======= #
  initErrorRoutes : () ->
    _.values(_privateScope).forEach (error) =>
      error().route @Server, error
      
    # Garbage Collector
    @Server.all '/*', (req, res, next) ->
      # Throw 404 on everything that is not found
      throw new _privateScope.NotFound()
    
module.exports = (Server) ->
  new ErrorHandler(Server)