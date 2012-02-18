# Error 404
class NotFound extends Error
  constructor : (msg) ->
    Error.call this, msg
    Error.captureStackTrace this, arguments.callee
  
  handle : (err, req, res) ->
    # respond with html page
    if req.accepts("html")
      res.render "error/404",
        locals:
          title: "404 - Not Found"
          description: ""
          author: ""
          analyticssiteid: "XXXXXXX"
        status: 404
  
      return
    # respond with json
    if req.accepts("json")
      res.send error: "Not found"
      return
    # default to plain-text. send()
    res.send "Not found"
    
  route : (Server, Err) ->
    Server.all '/404', (req, res, next) ->
      throw new Err()
    
module.exports = (msg) ->
  new NotFound(msg)