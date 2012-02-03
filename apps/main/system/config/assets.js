module.exports = function (assets) {
  //Settings
  assets.root = $settings.paths.assets;

  //JavaScript + Coffee-Script
  assets.addJs('js/out/bootstrap-libs.js');
  assets.addJs('js/out/bootstrap.js');
  assets.addJs('js/modernizr.js', 'head');

  //CSS + Stylus + Less
  assets.addCss('css/style.styl');
  assets.addCss('css/error-page.styl', 'error');
  assets.addCss('css/test/test.less');
  //assets.addCss('css/bootstrap/bootstrap.less')
};