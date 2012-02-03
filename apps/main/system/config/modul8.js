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
      'plugins/bootstrap-alert.js',
      'plugins/bootstrap-button.js',
      'plugins/bootstrap-dropdown.js',
      'plugins/bootstrap-modal.js',
      'plugins/bootstrap-scrollspy.js',
      'plugins/bootstrap-tab.js',
      'plugins/bootstrap-tooltip.js',
      'plugins/bootstrap-popover.js',
      'plugins/bootstrap-carousel.js',
      'plugins/bootstrap-collapse.js',
      'plugins/bootstrap-transition.js',
      'plugins/bootstrap-typeahead.js',
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