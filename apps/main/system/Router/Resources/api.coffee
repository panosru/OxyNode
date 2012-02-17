class ApiResource
  _users = [
    id: 23
    name: "John Doe"
    email_address: "john@doe.com"
    country:
      code: "en"
      title: "USA"

    language:
      code: "en"
      title: "English"
  ,
    id: 24
    name: "Panagiotis Kosmidis"
    email_address: "info@aviant.av"
    country:
      code: "el"
      title: "Hellas"

    language:
      code: "gr"
      title: "Greek"
  ]
   
  constructor : ->
  
  index :
    default : (req, res) ->
      res.send 'API!'
      
    json : (req, res) ->
      res.send _users
  
  show : 
    default : (req, res) ->
      res.send 'API ID: ' + req.params.api
    json : (req, res) ->
      res.send _users[req.params.api]

module.exports = new ApiResource()