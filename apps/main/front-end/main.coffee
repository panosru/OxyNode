# load Utils
plugin = require 'LIB::utils'
#gravatar = require 'npm::gravatar'

# load dependencies
JSON      = require 'npm::JSON'
_         = require 'npm::underscore'
Backbone  = require 'npm::backbone-browserify'
App       = require './app'

# Override some Backbone methods

#-Override Backbone.Model.prototype.toJSON in order to get values from ValueObjects
Backbone.Model::toJSON = ->
  tmpObj = _.clone(@attributes)
  _.each tmpObj, (value, key) ->
    unless _.any([ "id" ], (val) ->
      val is key
    )
      if (key.underscoreToCamelCase() + "ValueObject") is (/function (.{1,})\(/.exec(value.constructor.toString())[1])
        eval "tmpObj." + key + " = value.toJSON();"
      else
        log key + " is not a value object"
  tmpObj
  
#-Extend Backbone.Model with getFromServer method which fetch data from server and convert propertis to ValueObjects
Backbone.Model::getFromServer = (options, callback) ->
  @fetch success: (model, resp) ->
    _.each resp, (value, key) ->
      unless _.any([ "id" ], (val) ->
        val is key
      )
        ValueObject = require('BC::' + options.BC + "/Domain/" + options.Domain + "/ValueObjects/" + key.underscoreToCamelCase())
        eval "App.getRepository(\"" + options.repository + "\").get(" + options.modelID + ").set({ " + key + " : new ValueObject(value) });"

    callback eval("App.getRepository(\"" + options.repository + "\").get(" + options.modelID + ")")

#-Extend Backbone.Collection with getFromServer method which fetch data from server and convert propertis to ValueObjects
Backbone.Collection::getFromServer = (options, callback) ->
  current_collection = this
  current_collection.fetch success: (collection, resp) ->
    _.each resp, (model) ->
      _.each model, (value, key) ->
        unless _.any([ "id" ], (val) ->
          val is key
        )
          ValueObject = require('BC::' + current_collection.BC + "/Domain/" + current_collection.DOMAIN + "/ValueObjects/" + key.underscoreToCamelCase())
          eval "App.getRepository(\"" + current_collection.NAME + "\").get(" + model.id + ").set({ " + key + " : new ValueObject(value) });"

$(document).ready ->
  App()
  ###
  A/B Testing example
  var ABTest = require('npm::dice-roll');

  $(document).ready(function () {
    var test = new ABTest("testName", 1);
        test.test(50, function() { log('I see a red button!'); })
        test.otherwise(function() { log('I see a blue button!');});
        test.run();
  });
  ###
  #log gravatar.url 'panos@hostindex.gr'