class NameValueObject
  name = 'unknown'
  
  constructor : (param) ->
    name = param ? name
    
  getName : ->
    name
    
NameValueObject::toJSON = ->
  @getName()
  
module.exports = NameValueObject