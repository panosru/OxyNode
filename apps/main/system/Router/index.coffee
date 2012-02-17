class Router
  constructor : (@Server, @ErrorHandler) ->
    (require './Resources')(@Server, @ErrorHandler)
    
  init : ->
    ###
    @Server.all '/', routes.home.index
    @Server.get '/api/user/:id', routes.api.get_user
    @Server.get '/test', routes.test.index
    
    # Error routes
    @ErrorHandler.initErrorRoutes()
    
    # Garbage Collector
    @Server.all '/*', (req, res, next) ->
      next()
    ###

module.exports = (Server, ErrorHandler) ->
  new Router(Server, ErrorHandler)