module.exports = function (App) {
  var routes = require('./handlers');
  
  App.all('/', routes.app.index);
  App.get('/api/user/:id', routes.api.get_user);
};