# Add some extra methods to string prototype
#-Underscore to cammel case, for example: 'foo_bar' => FooBar  
String::underscoreToCamelCase = ->
  @trim().replace(/(\_[a-z])/g, ($1) ->
    $1.toUpperCase().replace "_", ""
  ).replace /^[a-z]/, ($1) ->
    $1.toUpperCase()

#-Dash to cammel case, for example: 'foo-bar' => FooBar    
String::dashToCamelCase = ->
  @trim().replace(/(\-[a-z])/g, ($1) ->
    $1.toUpperCase().replace "-", ""
  ).replace /^[a-z]/, ($1) ->
    $1.toUpperCase()

#-Cammel case to underscore, for example: 'FooBar' => foo_bar
String::camelCaseToUnderscore = ->
  @trim().replace(/([A-Z])/g, ($1) ->
    "_" + $1.toLowerCase()
  ).substr 1
  
#-Cammel case to dash, for example: 'FooBar' => foo-bar
String::camelCaseToDash = ->
  @trim().replace(/([A-Z])/g, ($1) ->
    "-" + $1.toLowerCase()
  ).substr 1