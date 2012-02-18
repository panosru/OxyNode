class Router
  constructor : (@Server) ->
    # Load Resources handler
    @Resources = (require './Resources')(@Server)
    
  init : ->
    # Initialize Resources
    @Resources.init()

module.exports = (Server) ->
  new Router(Server)