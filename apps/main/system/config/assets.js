module.exports = function (assets) {
  //====== Settings
  assets.root = $settings.paths.assets;

  //====== JavaScript + Coffee-Script

  //+++ Main

  // Jade
  assets.addJs('js/jade.js');
  assets.addJs('js/jade-shim.js');

  // Twitter + jQuery UI bootstrap plugins
  assets.addJs('js/plugins/bootstrap-alert.js');
  assets.addJs('js/plugins/bootstrap-button.js');
  assets.addJs('js/plugins/bootstrap-dropdown.js');
  assets.addJs('js/plugins/bootstrap-modal.js');
  assets.addJs('js/plugins/bootstrap-scrollspy.js');
  assets.addJs('js/plugins/bootstrap-tab.js');
  assets.addJs('js/plugins/bootstrap-tooltip.js');
  assets.addJs('js/plugins/bootstrap-popover.js');
  assets.addJs('js/plugins/bootstrap-carousel.js');
  assets.addJs('js/plugins/bootstrap-collapse.js');
  assets.addJs('js/plugins/bootstrap-transition.js');
  assets.addJs('js/plugins/bootstrap-typeahead.js');
  assets.addJs('js/bootbox.js');
  assets.addJs('js/jwerty.js');

  // jQuery UI plugins
  //assets.addJs('js/plugins/UI/DateRangePicker/date.js');
  //assets.addJs('js/plugins/UI/DateRangePicker/daterangepicker.js');

  // jQuery plugins
  assets.addJs('js/plugins/jquery.inlog.js');
  assets.addJs('js/plugins/jquery.tablesorter.js');
  assets.addJs('js/plugins/jquery.tablesorter.pager.js');
  assets.addJs('js/plugins/jquery.chosen.js');

  // Prettify + langs
  assets.addJs('js/prettify.js');
  assets.addJs('js/plugins/prettify.lang-css.js');
  assets.addJs('js/plugins/prettify.lang-yaml.js');
  //assets.addJs('js/plugins/prettify.lang-apollo.js');
  //assets.addJs('js/plugins/prettify.lang-clj.js');
  //assets.addJs('js/plugins/prettify.lang-go.js');
  //assets.addJs('js/plugins/prettify.lang-hs.js');
  //assets.addJs('js/plugins/prettify.lang-lisp.js');
  //assets.addJs('js/plugins/prettify.lang-lua.js');
  //assets.addJs('js/plugins/prettify.lang-ml.js');
  //assets.addJs('js/plugins/prettify.lang-n.js');
  //assets.addJs('js/plugins/prettify.lang-proto.js');
  //assets.addJs('js/plugins/prettify.lang-scala.js');
  //assets.addJs('js/plugins/prettify.lang-sql.js');
  //assets.addJs('js/plugins/prettify.lang-tex.js');
  //assets.addJs('js/plugins/prettify.lang-vb.js');
  //assets.addJs('js/plugins/prettify.lang-vhdl.js');
  //assets.addJs('js/plugins/prettify.lang-wiki.js');
  //assets.addJs('js/plugins/prettify.lang-xq.js');

  // Boot
  assets.addJs('js/boot.js');

  // Bootstrap
  //assets.addJs('js/out/bootstrap-libs.js');
  assets.addJs('js/out/bootstrap.js');

  //+++ Head
  assets.addJs('js/modernizr.js', 'head');

  //====== CSS + Stylus + Less
  assets.addCss('css/jquery-ui-bootstrap.less');
  assets.addCss('css/style.styl');
  assets.addCss('css/error-page.styl', 'error');
};