AccountInformationDto = require 'BC::Account/Domain/User/Query/AccountInformation'

module.exports = 
  routes :
      "/user/get/:id": "getAccount"
  
  constructor : ->
  
  getAccount: (id) ->
    information = new AccountInformationDto()
    information.getDto
      id: id
      success: (model) ->
        log model.get("name").getName()
  
      error: (e) ->
        # Error action
        log e