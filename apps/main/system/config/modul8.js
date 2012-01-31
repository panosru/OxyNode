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
    'BC' : $settings.paths.bounded_contexts,
    'IF' : $settings.paths.interface
  })
  .npm( $settings.paths.root + 'node_modules')
  .register('.jade', function (code, bare) {        
    return "module.exports = " + coffee.compile('"""\n' + code + '"""', { bare : bare }) +";";
  })
  .register('.coffee', function (code, bare){
    return coffee.compile(code, {bare: bare});
  })
  .libraries()
    .list([
      //Jade
      'jade.js',
      'jade-shim.js',
      
      'plugins/jquery.chosen.js',
      
      //Twitter + jQuery UI bootstrap plugins
      'plugins/jquery.bootstrap-alerts.js',
      'plugins/jquery.bootstrap-buttons.js',
      'plugins/jquery.bootstrap-dropdown.js',
      'plugins/jquery.bootstrap-modal.js',
      'plugins/jquery.bootstrap-scrollspy.js',
      'plugins/jquery.bootstrap-tabs.js',
      'plugins/jquery.bootstrap-twipsy.js',
      'plugins/jquery.bootstrap-popover.js',
      'bootbox.js',
      'jwerty.js',
      
      //jQuery UI plugins
      'plugins/UI/DateRangePicker/date.js',
      'plugins/UI/DateRangePicker/daterangepicker.js',
      
      //jQuery plugins
      'plugins/jquery.inlog.js',
      'plugins/jquery.tablesorter.js',
      'plugins/jquery.tablesorter.pager.js',
      
      //Prettify + langs
      'prettify.js',
      /*'plugins/prettify.lang-apollo.js',
      'plugins/prettify.lang-clj.js',          
      'plugins/prettify.lang-go.js',
      'plugins/prettify.lang-hs.js',
      'plugins/prettify.lang-lisp.js',
      'plugins/prettify.lang-lua.js',
      'plugins/prettify.lang-ml.js',
      'plugins/prettify.lang-n.js',
      'plugins/prettify.lang-proto.js',
      'plugins/prettify.lang-scala.js',
      'plugins/prettify.lang-sql.js',
      'plugins/prettify.lang-tex.js',
      'plugins/prettify.lang-vb.js',
      'plugins/prettify.lang-vhdl.js',
      'plugins/prettify.lang-wiki.js',
      'plugins/prettify.lang-xq.js',*/
      'plugins/prettify.lang-css.js',
      'plugins/prettify.lang-yaml.js',
      
      //Boot
      'boot.js'
    ])
    .path($settings.paths.assets + 'js/')
    .target($settings.paths.assets + 'js/out/bootstrap-libs.js')
  .compile($settings.paths.assets + 'js/out/bootstrap.js')
;