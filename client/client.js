  // This code only runs on the client
  Meteor.subscribe("tasks");
  Meteor.subscribe("todos");
  Meteor.subscribe("lists");

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });



