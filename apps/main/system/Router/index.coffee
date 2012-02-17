class Router
  constructor : (@Server, @ErrorHandler) ->
    # Load Resources handler
    @Resources = (require './Resources')(@Server, @ErrorHandler)
    
  init : ->
    # Initialize Resources
    @Resources.init()
    
    # Error routes
    @ErrorHandler.initErrorRoutes()

module.exports = (Server, ErrorHandler) ->
  new Router(Server, ErrorHandler)