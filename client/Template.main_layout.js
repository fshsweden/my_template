
Template.main_layout.helpers({

	'get_error': function() {
		return Session.get("errormsg");
	},

	'set_error': function(err) {
		Session.set("errormsg", err);
	}
});

