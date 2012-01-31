# Get libraries
Backbone = require 'npm::backbone-browserify'

# Get User Events
NewAccountCreatedEvent = 'BC::Account/Domain/User/AggregateRoots/User/Event/NewAccountCreated'


UserAggregateRoot = Backbone.Model.extend(
  initialize: ->
    # Bind Events
    #@bind "change:Name", NameChangedAggregateRootEvent

  triggerEvents: ->
    # Trigger events
    new NewAccountCreatedEvent(this)
)

module.exports = UserAggregateRoot