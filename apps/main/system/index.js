exports.loadHelper = function (helper) {
  return require($settings.paths.helpers + helper );
}