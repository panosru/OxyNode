# Dependencies
routes = require './handlers'

class Router
  constructor : (@Server, @ErrorHandler) ->
    
  init : ->
    @Server.all '/', routes.home.index
    @Server.get '/api/user/:id', routes.api.get_user
    
    # Error routes
    @ErrorHandler.initErrorRoutes()
    
    # Garbage Collector
    @Server.all '/*', (req, res, next) ->
      next()

module.exports = (Server, ErrorHandler) ->
  new Router(Server, ErrorHandler)