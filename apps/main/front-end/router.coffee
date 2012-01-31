_ = require 'npm::underscore'
Backbone = require 'npm::backbone-browserify'

# Get application read services
AccountReadService = require 'BC::Account/AppServices/Read/AccountService'

# Get application write services
AccountWriteService = require 'BC::Account/AppServices/Write/AccountService'

# Create base router
RouterObject =
  routes : {}

# Merge base router with application services without override defaults

# Merge routes
_.defaults RouterObject.routes, 
  AccountReadService.routes, 
  AccountWriteService.routes

# Merge actions
_.defaults RouterObject, 
  AccountReadService, 
  AccountWriteService

ApplicationRouter = Backbone.Router.extend(RouterObject);

initialize = ->
  # Initiate router object
  new ApplicationRouter()

  # Start history
  Backbone.history.start();

module.exports =
  initialize: initialize