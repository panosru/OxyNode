//var i18n = require('i18next');

/*
 * GET home page.
 */
exports.index = function(req, res) {
  
  /*
  require('soap').createClient('http://aviant-cms.av/api/platform/account/general/v1r0/wsdl', function(err, client) {
    
    console.log(require('util').log(client.describe()));
    
    //client.getAccountInformation({emailAddress: 'info@aviant.av'}, function(err, result) {
    //    console.log(result);
    //    console.log(err);
    //});
  });
  */
  
  
  res.render('home/index', { title: 'Express' })
};