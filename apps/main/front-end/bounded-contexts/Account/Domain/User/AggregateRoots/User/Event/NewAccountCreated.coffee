# Get Event Handlers
Logger = require 'BC::Account/Domain/User/EventHandlers/Logger'

module.exports = (User) ->
  log "Created user: #{User.get('name').getName()}"
  
  # Trigger Event Handlers
  Logger();