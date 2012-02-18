class Router
  constructor : (@Server, @ErrorHandler) ->
    # Load Resources handler
    @Resources = (require './Resources')(@Server, @ErrorHandler)
    
  init : ->
    # Initialize Resources
    @Resources.init()
    
    # Error routes
    @ErrorHandler.initErrorRoutes()
    
    @Server.get '/omg', (req, res, next) ->
      res.send 'Session ID: ' + req.session

module.exports = (Server, ErrorHandler) ->
  new Router(Server, ErrorHandler)