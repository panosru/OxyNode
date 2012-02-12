class Bundle
  constructor : (@Server) ->
    @bundle  = @getInstance()
    @_       = require 'underscore'

  # Get bundle instance
  getInstance : ->
    @bundle = require 'bundle-up' if "undefined" is typeof @bundle
    @bundle

  init : (opts) ->
    # Private vars
    stylus  = require 'stylus'
    nib     = require 'nib'
    assets  = $settings.paths.config + 'assets'
    
    # If no object is defined then set an empty object
    opts = opts ? {}

    # Set default values
    options =
      staticRoot : $settings.paths.public
      staticUrlRoot : '/'
      bundle : false # Due to a bug with Less files
      compilers :
        stylus : (str, path) ->
          stylus(str).set("filename", path).set("compress", true).use(nib()).import "nib" # This imports the nib lib


    @_.extend options, opts

    # Load bundle and set an instance of bundle
    @bundle = @bundle @Server, assets, options

module.exports = (Server) ->
  new Bundle Server