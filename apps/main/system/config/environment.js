var path = require('path');

exports.common = {
  paths : {
      config            : path.normalize(__dirname + '/')    
    , system            : path.normalize(__dirname + '/../')
    , locales           : path.normalize(__dirname + '/../i18n/locales/') + '__lng__/__ns__.json'
    , root              : path.normalize(__dirname + '/../../../../')
    , helpers           : path.normalize(__dirname + '/../helpers/')
    , views             : path.normalize(__dirname + '/../views/default/')
    , routes            : path.normalize(__dirname + '/../Router/')
    , public            : path.normalize(__dirname + '/../../public/')
    , frontend          : path.normalize(__dirname + '/../../front-end/')
    , assets            : path.normalize(__dirname + '/../../front-end/assets/')
    , bounded_contexts  : path.normalize(__dirname + '/../../front-end/bounded-contexts/')
    , interface         : path.normalize(__dirname + '/../../front-end/interface/')
  },
  app : {
    port : 3001,
    view : {
      engine : 'jade'
    },
    session : {
      secret : 'some-secret-hash-here'
    }
  }
};

// Rest of environments are deep merged over `common`.
exports.development = {};
exports.test = {};
exports.production = {};