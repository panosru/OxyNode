module.exports = function (err, req, res, next) {
  if (err instanceof NotFound) {
    HandleNotFound(req, res, next);
  }  else if (err instanceof Error403) {
    HandleError403(err, req, res, next);
  } else {
    next(err);
  }
};

// === Error 404
function NotFound(msg) {
  this.name = 'NotFound';
  Error.call(this, msg);
  Error.captureStackTrace(this, arguments.callee);
}
NotFound.prototype.__proto__ = Error.prototype;
exports.NotFound = NotFound;

function Error403(msg) {
  this.name = 'Error403';
  Error.call(this. msg);
  this.status = 403;
}
Error403.prototype.__proto__ = Error.prototype;
exports.Error403 = Error403;

// ====== Handlers ======= //

//-Error 404
exports.HandleNotFound = function (req, res, next) {
  // respond with html page
  if (req.accepts('html')) {
    res.render('error/404', { 
      locals: { 
        title : '404 - Not Found',
        description: '',
        author: '',
        analyticssiteid: 'XXXXXXX' 
      },
      status: 404,
      layout : false
    });
    return;
  }
  
  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }
  
  // default to plain-text. send()
  res.type('txt').send('Not found');
}

//-Error 403
exports.HandleError403 = function (err, req, res, next) {
  // respond with html page
  if (req.accepts('html')) {
    res.render('error/403', { 
      locals: { 
        title : 'You are not authoarized to view this content!',//'The Server Encountered an Error',
        description: '',
        author: '',
        analyticssiteid: 'XXXXXXX',
        error: err 
      },
      status: 403,
      layout : false
    });
    return;
  }
  
  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'You are not authoarized to view this content!' });
    return;
  }
  
  // default to plain-text. send()
  res.type('txt').send('You are not authoarized to view this content!');
}