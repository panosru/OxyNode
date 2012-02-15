var modul8  = require('modul8')
  , coffee  = require('coffee-script')
;

module.exports = modul8($settings.paths.frontend + 'main.coffee')
/*.in('development')
  //.set('logging', 'DEBUG')
  .analysis()
    .output(console.info)
    .prefix(true)
    .suffix(false)
    .hide('external')*/
.in('production')
  .before(modul8.testcutter)
  .after(modul8.minifier)
.in('all')
  .domains({
    'BC'      : $settings.paths.bounded_contexts,
    'IF'      : $settings.paths.interface,
    'LIB'     : $settings.paths.frontend
  })
  .npm( $settings.paths.root + 'node_modules')
  .register('.jade', function (code, bare) {        
    return "module.exports = " + coffee.compile('"""\n' + code + '"""', { bare : bare }) +";";
  })
  .register('.coffee', function (code, bare){
    return coffee.compile(code, {bare: bare});
  })
  /*
  .libraries()
    .list([
      
    ])
    .path($settings.paths.assets + 'js/')
    .target($settings.paths.assets + 'js/out/bootstrap-libs.js')
    */
  .compile($settings.paths.assets + 'js/out/bootstrap.js')
;