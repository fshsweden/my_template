
Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();

       	Session.set("errormsg","");

        var errhandler = function(error) {
        	console.log(error.reason);
        	Session.set("errormsg", error.reason);
            if (error && error.reason === "Incorrect password") {
                
            }
            Router.go('login');
        };

        Meteor.loginWithPassword(email, password, errhandler);

        Router.go('home');
    }
});


