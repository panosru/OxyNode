class Resources
  constructor : (@Server, @ErrorHandler) ->
    
  init : ->
    # Load resources
    @loadResources @getResources()
    
  loadResources : (resources, parentInstance = null) ->
    # Iterate through resources
    resources.forEach (resource) =>
      # Get resource instance
      instance = 
        properties : resource
        instance : _loadResource @Server, resource, parentInstance
      @loadResources resource.child, instance if resource.child?

  getResources : ->
    [
      path : 'main'
    ,
      name : 'best/api'
      path : 'api'
    ,
      name : 'test'
      path : 'test'
    ]
    
  _loadResource = (ServerInstance, resource, parentInstance = null) =>
    # Get resource object
    _resourceObj = require './' + resource.path
    # Load resource instance
    _resourceInst = ServerInstance.resource (resource.name if resource.name?), _resourceObj
    # Load resource mappings if exist
    _resourceObj.setMappings _resourceInst if _resourceObj.setMappings?
    # Add resource to resource instance
    parentInstance.instance.add _resourceInst if parentInstance?
    # Return resource
    _resourceInst

module.exports = (Server, ErrorHandler) ->
  new Resources Server, ErrorHandler