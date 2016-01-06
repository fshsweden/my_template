
  Template.login.helpers({
    lastErrorMsg: function() {
      return Session.get("errormsg");
    }
  });


Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();

       	Session.set("errormsg","");

        var errhandler = function(error) {

            if (Meteor.user()) {
                Router.go('home');
            }
            else {
                console.log(error.reason);
                Session.set("errormsg", error.reason);
                if (error && error.reason === "Incorrect password") {
                    
                }
            }
        };

        Meteor.loginWithPassword(email, password, errhandler);

    }
});


