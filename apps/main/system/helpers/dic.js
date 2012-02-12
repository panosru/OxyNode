var Container = require('gerenuk').Container;

function Dic () {
  
  //Apply Singleton Pattern
  this.getInstance = function () {
    if ('undefined' === typeof this.instance) {
      this.instance = new Container;
      this.instance.loadConfig($settings.paths.config + 'dic');
    }
    
    return this.instance;
  }
}

module.exports = new Dic(); //Initialize on call