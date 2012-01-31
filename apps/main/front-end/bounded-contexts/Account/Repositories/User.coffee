Backbone = require 'npm::backbone-browserify'

module.exports = ->
  Backbone.Collection.extend
    url: "/api/user"
    BC: "Account"
    DOMAIN: "User"
    NAME: "AccountUserRepository"
    comparator: (model) ->
      model.id