# load dependencies
_           = require 'npm::underscore'
Backbone    = require 'npm::backbone-browserify'
Router      = require 'CONF::router'
Repository  = require 'CONF::repository'
Facade      = require 'LIB::facade'

class Application
  constructor : (@repositories, @router) ->
    # Pass in our Router module and call it's initialize function
    @router.initialize()

  # Check if repository exists
  hasRepository : (repository) ->
    if "object" is typeof @repositories
      @repositories.hasOwnProperty repository
    else
      false

  # Get Repository
  getRepository : (repository) ->
    if "string" is typeof repository
      _.values(@repositories)[_.indexOf(_.keys(@repositories), repository)]
    else
      throw new Error("Only string is allowed to be passed, type of \"" + typeof repository + "\" given!")

  # Check if model exist in repository
  hasModel : (realIdentifier, repository, useCID) ->
    # first check if repository exist
    if @hasRepository(repository)
      useCID = useCID or false
      tmpRepository = @getRepository(repository)
      if useCID
        tmpResults = tmpRepository.getByCid(realIdentifier)
      else
        tmpResults = tmpRepository.get(realIdentifier)
      delete tmpRepository

      if "undefined" isnt typeof tmpResults
        delete tmpResults

        true
      else
        delete tmpResults

        false
    else
      throw new Error("Repository \"" + repository + "\" does not exist!")

  # Get Model from repository
  getModel : (realIdentifier, repository, useCID) ->
    useCID = useCID or false
    if @hasModel(realIdentifier, repository, useCID)
      tmpRepository = @getRepository(repository)
      if useCID
        Model = tmpRepository.getByCid(realIdentifier)
      else
        Model = tmpRepository.get(realIdentifier)
      delete tmpRepository

      Model
    else
      throw new Error("Model with ID : \"" + realIdentifier + "\" does not exist in \"" + repository + "\" Repository!")



module.exports = ->  
  # Make it global
  window.App = new Application Repository, Router