define([
	'underscore',
	'backbone',
	
	//Get Commands
	'BC/Account/Domain/User/Commands/DoSetupAccount',
	
	//Template
	'text!IF/Account/User/create.html'
],
	
function (
	_,
	Backbone,
	DoSetupAccountCommand,
	SetupAccountTemplate
) {
	return {
		routes : {
			'user/create'		: 'SetupAccount',
			'user/create/:name' : 'DoSetupAccount'
		},
		
		SetupAccount : function () {
			SetupAccountView = Backbone.View.extend({
				initialize : function () {
				},
				render : function () {
					var data = {};
					var compiledTemplate = _.template(SetupAccountTemplate, data);
					this.el.html(compiledTemplate).find('select.chosen').chosen();
				},
				events : {
					'submit form#createAccountForm' : 'createAccount'
				},
				createAccount : function (e) {
					e.preventDefault();
					log(this.el.find('#lang option[value='+this.el.find('#lang').val()+']').text());
				}
			});
			
			var asd = new SetupAccountView({el : $('#createAccount')});
				asd.render();
		},
		
		DoSetupAccount : function (name) {
			DoSetupAccountCommand(
				'Panos',
				'info@aviant.av',
				'el',
				'Greece',
				'gr',
				'Greek'
			);
		}
	};
});