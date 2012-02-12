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
  initErrorRoutes : ->
    _server = @Server
    _.values(_privateScope).forEach (error) ->
      error().route _server, error
    
module.exports = (Server) ->
  new ErrorHandler(Server)