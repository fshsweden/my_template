Template.register.events({
    'submit form': function(event){

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

        var newUser = Accounts.createUser({email: email, password: password}, errhandler);

        if (newUser) {

        }
        
    }
});
