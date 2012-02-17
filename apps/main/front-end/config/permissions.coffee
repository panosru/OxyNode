#=== Permissions 
permissions = endContentEditing:
  todoSaver: true
  testing: true

exports.validate = (subscriber, channel) ->
  test = permissions[channel][subscriber]
  (if test is `undefined` then false else test)