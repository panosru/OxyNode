###
var i18n = require('i18next');
exports.index = function(req, res) {
  
  require('soap').createClient('http://aviant-cms.av/api/platform/account/general/v1r0/wsdl', function(err, client) {
    
    console.log(require('util').log(client.describe()));
    
    //client.getAccountInformation({emailAddress: 'info@aviant.av'}, function(err, result) {
    //    console.log(result);
    //    console.log(err);
    //});
  });
  
  res.render('home/index', { title: 'Express' })
};
###

class MainResource
  constructor : ->
  
  index : (req, res) ->
    res.render 'home'
    
  test : (req, res) ->
    res.render 'test'
    
  setMappings : (inst) ->
    #inst.map 'get', 'test', @test

module.exports = new MainResource()