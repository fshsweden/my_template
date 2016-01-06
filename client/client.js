  // This code only runs on the client
  Meteor.subscribe("tasks");
  Meteor.subscribe("todos");
  Meteor.subscribe("lists");

  Meteor.startup(function() {

  	/* register some useful helpers! */

  	UI.registerHelper("getLastError", function(context, options) {
  		return Session.get("lastError");
  	});

  	UI.registerHelper("setLastError", function(context, options) {
  		Session.set("lastError");
  	});

  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });



