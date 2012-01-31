_ = require 'npm::underscore'
Backbone = require 'npm::backbone-browserify'

# Get Commands
DoSetupAccountCommand = require 'BC::Account/Domain/User/Commands/DoSetupAccount'

# Template
SetupAccountTemplate = require 'IF::Account/User/create'

module.exports = 
  routes:
      "/user/create": "SetupAccount"
      "/user/create/:name": "DoSetupAccount"

  SetupAccount: ->
    SetupAccountView = Backbone.View.extend(
      initialize: ->
  
      render: ->
        data = {}
        compiledTemplate = jade.render(SetupAccountTemplate, data)
        @el.html(compiledTemplate).find("select.chosen").chosen()
  
      events:
        "submit form#createAccountForm": "createAccount"
  
      createAccount: (e) ->
        e.preventDefault()
        log @el.find("#lang option[value=" + @el.find("#lang").val() + "]").text()
    )
    asd = new SetupAccountView(el: $("#createAccount"))
    asd.render()
  
  DoSetupAccount: (name) ->
    #DoSetupAccountCommand "Panos", "info@aviant.av", "el", "Greece", "gr", "Greek"'
    log "wohooo! #{name} created!"