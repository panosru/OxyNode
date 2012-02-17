class TestResource
  constructor : ->
  
  index : (req, res) ->
    res.render 'test'
  
  show : (req, res) ->
    res.send 'Test ID: ' + req.params.test

module.exports = new TestResource()