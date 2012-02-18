# Error 403
class AccessDenied extends Error
  constructor : (msg) ->
    @status = 403
    Error.call @msg
    
  handle : (err, req, res) ->
    # respond with html page
    if req.accepts("html")
      res.render "error/403",
        locals:
          title: req.i18n.t 'error.NoAccess'
          description: ""
          author: ""
          analyticssiteid: "XXXXXXX"
          error: err
        status: err.status
  
      return
    # respond with json
    if req.accepts("json")
      res.send error: req.i18n.t 'error.NoAccess'
      return
    # default to plain-text. send()
    res.send req.i18n.t 'error.NoAccess'

  route : (Server, Err) ->
    Server.all '/403', (req, res, next) ->
      throw new Err()
  
module.exports = (msg) ->
  new AccessDenied(msg)