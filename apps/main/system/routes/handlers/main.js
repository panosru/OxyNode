var i18n = require('i18next');

/*
 * GET home page.
 */
exports.index = function(req, res) {
  res.render('main', { title: 'Express' })
};