//Dependency Injection Container settings
module.exports = {
  omg : {
    require : $settings.paths.bounded_contexts + 'Account/Domain/User/Services/omg',
    instantiate : true
  }
}