#Get Command Handler
DoSetupAccountCommandHandler = require 'BC::Account/Domain/User/Commands/Handlers/DoSetupAccount'

class DoSetupAccountCommand
  data = 
    name          : ''
    email         : ''
    countryCode   : ''
    countryTitle  : ''
    languageCode  : ''
    languageTitle : ''
    
  
  constructor : (name, email, countryCode, countryTitle, languageCode, languageTitle) ->
    data.name          = name          ? data.name         
    data.email         = email         ? data.email        
    data.countryCode   = countryCode   ? data.countryCode  
    data.countryTitle  = countryTitle  ? data.countryTitle 
    data.languageCode  = languageCode  ? data.languageCode 
    data.languageTitle = languageTitle ? data.languageTitle
    
    # Trigger Command Handler
    new DoSetupAccountCommandHandler("AccountUserRepository", null, this)
    
  @getName = ->
    data.name

  @getEmailAddress = ->
    data.email

  @getCountryCode = ->
    data.countryCode

  @getCountryTitle = ->
    data.countryTitle

  @getLanguageCode = ->
    data.languageCode

  @getLanguageTitle = ->
    data.languageTitle

module.exports = DoSetupAccountCommand