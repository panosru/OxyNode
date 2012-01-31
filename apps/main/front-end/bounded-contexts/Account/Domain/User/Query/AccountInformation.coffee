# Load User Aggregate Root (Model Object)
UserAggregateRoot = require 'BC::Account/Domain/User/AggregateRoots/User'

class AccountInformation
  
  # Define constants
  ACCOUNT_REPOSITORY : 'AccountUserRepository'
  
  constructor : ->
    
  getDto : ->
    try
      # Check if repository exists
      if App.hasRepository(@ACCOUNT_REPOSITORY)
        # Get repository
        repository = App.getRepository(@ACCOUNT_REPOSITORY)
        # Check if model does not exist in repository
        unless App.hasModel(args.id, @ACCOUNT_REPOSITORY)
          # Create model
          model = new UserAggregateRoot(id: args.id)
          # Store model in reporitory
          repository.add model
          
        # Update model in repository from server
        App.getModel(args.id, @ACCOUNT_REPOSITORY).getFromServer
          BC: repository.BC
          Domain: repository.DOMAIN
          repository: repository.NAME
          modelID: args.id
        , args.success
      else
        # Throw exception
        throw new Error("Repository #{@ACCOUNT_REPOSITORY} does not exists!")
    catch e
      args.error e
      
module.exports = AccountInformation