class CountryValueObject
  data = {}
  
  constructor : (param) ->
    data = param
    
  getCode : ->
    data.code
    
  getTitle : ->
    data.title
    
CountryValueObject::toJSON = ->
  code : @getCode()
  title : @getTitle()
  
module.exports = CountryValueObject