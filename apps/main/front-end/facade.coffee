# Load Dependencies
permissions = require './permissions'
mediator    = require './mediator'

#=== Facade Pattern
facade = facade or {}

exports.subscribe = (subscriber, channel, callback) ->
  mediator.subscribe channel, callback  if permissions.validate(subscriber, channel)

exports.publish = ->
  args = [].slice.apply(arguments, [ 0, 2 ]) # first two arguments for mediator
  arguments = [].slice.call(arguments, 2) # Rest for facade
  mediator.publish.apply mediator, args