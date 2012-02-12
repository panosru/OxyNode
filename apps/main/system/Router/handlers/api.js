exports.get_users = function (req, res) {
	var users = [
		{
			id	: 23,
			name	: 'John Doe',
			email_address	: 'john@doe.com',
			country	: {
				code	: 'en',
				title	: 'USA'
			},
			language	: {
				code	: 'en',
				title	: 'English'
			}
		}, {
			id	: 24,
			name	: 'Panagiotis Kosmidis',
			email_address	: 'info@aviant.av',
			country	: {
				code	: 'el',
				title	: 'Hellas'
			},
			language	: {
				code	: 'gr',
				title	: 'Greek'
			}
		}
	];
	
	res.json(users, 200);
};

exports.get_user = function (req, res) {
	switch (parseInt(req.params.id)) {
		case 23:
			var user = {
				id	: 23,
				name	: 'John Doe',
				email_address	: 'john@doe.com',
				country	: {
					code	: 'en',
					title	: 'USA'
				},
				language	: {
					code	: 'en',
					title	: 'English'
				}
			};
			break;

		case 24:
			var user = {
				name	: 'Panos',
				email_address	: 'info@aviant.av',
				country	: {
					code	: 'el',
					title	: 'Hellas'
				}
			};
			break;
	}

	res.json(user, 200);
};