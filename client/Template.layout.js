	
Template.layout.helpers({

	'lastErrorMsg': function() {
		return Session.get("errormsg");
	},

	'setLastErrorMsg': function(err) {
		Session.set("errormsg", err);
	}
});

