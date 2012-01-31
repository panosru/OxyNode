class LanguageValueObject
  data = {}
  
  constructor : (param) ->
    data = param
    
  getCode : ->
    data.code
    
  getTitle : ->
    data.title
    
LanguageValueObject::toJSON = ->
  code : @getCode()
  title : @getTitle()
  
module.exports = LanguageValueObject