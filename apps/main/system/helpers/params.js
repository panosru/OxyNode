//Here we will place validators / filters for our application param routes
module.exports = function (App) {
  /**
   * Inside here we can use something like:
   * App.param('UserID', function (req, res) {
   *   User.get(id, function(err, user){
   *     if (err) return next(err);
   *     if (!user) return next(new Error('failed to find user'));
   *     req.user = user;
   *     next();
   *   });
   * });
   *
   * So then we can do something like this:
   * app.get('/user/:userId', function(req, res){
   *   res.send('user ' + req.user.name);
   * });
   */
};