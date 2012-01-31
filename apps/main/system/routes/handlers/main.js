var i18n = require('i18next');

/*
 * GET home page.
 */
exports.index = function(req, res) {
  console.log(i18n.t('creator.firstname'));
  res.render('main', { title: 'Express' })
};