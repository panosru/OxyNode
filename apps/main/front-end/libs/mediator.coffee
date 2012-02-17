#==== Mediator Pattern
channels = {}
mediator = {}

exports.subscribe = (channel, subscription) ->
  channels[channel] = []  unless channels[channel]
  channels[channel].push subscription

exports.publish = (channel) ->
  return  unless channels[channel]
  args = [].slice.call(arguments, 1)
  i = 0
  l = channels[channel].length

  while i < l
    channels[channel][i].apply this, args
    i++