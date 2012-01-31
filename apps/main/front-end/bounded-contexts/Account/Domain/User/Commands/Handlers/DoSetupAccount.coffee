# Get ValueObjects
NameValueObject = require 'BC::Account/Domain/User/ValueObjects/Name'
EmailAddressValueObject = require 'BC::Account/Domain/User/ValueObjects/EmailAddress'
CountryValueObject = require 'BC::Account/Domain/User/ValueObjects/Country'
LanguageValueObject = require 'BC::Account/Domain/User/ValueObjects/Language'

# Load User Aggregate Root (Model Object)
UserAggregateRoot = require 'BC::Account/Domain/User/AggregateRoots/User'


class DoSetupAccountCommandHandler
  
  constructor = (repository, realIdentifier, command) ->
    # Check if Repository exist
    if App.hasRepository(repository)
      try
        # Create user model
        user = new UserAggregateRoot(
          id: 24
          name: new NameValueObject(command.getName())
          email_address: new EmailAddressValueObject(command.getEmailAddress())
          country: new CountryValueObject(
            code: command.getCountryCode()
            title: command.getCountryTitle()
          )
          language: new LanguageValueObject(
            code: command.getLanguageCode()
            title: command.getLanguageTitle()
          )
        )
        
        # Store User to repository
        App.getRepository(repository).add user
        
        # Trigger events
        user.triggerEvents()
        
        log user
        
        # Save to server
        #user.save()
      catch e
        # Trigger some error type event
        log e
    else
      # Trigger some error type event
    
module.exports = DoSetupAccountCommandHandler