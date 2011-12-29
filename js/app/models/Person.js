define(['underscore', 'backbone'],
		
function (_, Backbone) {
	var PersonModel = Backbone.Model.extend({
		defaults : {
			name : 'John',
			age  : 30,
			books: []
		},
		initialize: function () {
			log('welcome to model');
			this.bind('change:name', function () {
				var name = this.get('name');
				log('Changed name to ' + name);
			});
		},
		rename : function (str) {
			this.set({name : str});
		},
		add: function (book) {
			var books_array = this.get('books');
			books_array.push(book);
			this.set({books : books_array});
		}
	});
	
	return PersonModel;
});