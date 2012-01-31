class EmailAddressValueObject
  email = 'unknown'
  
  constructor : (param) ->
    email = param ? email
    
  getEmailAddress : ->
    email
    
EmailAddressValueObject::toJSON = ->
  @getEmailAddress()
  
module.exports = EmailAddressValueObject