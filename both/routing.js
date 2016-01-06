
Router.configure({
    layoutTemplate: 'main_layout'
});

/*
var OnBeforeActions;

OnBeforeActions = {
    loginRequired: function(pause) {
      if (!Meteor.userId()) {
        // this.render('login');
        // return pause();
      }
    },

    alreadyloggedIn: function(pause) {
      if (Meteor.userId()) {
        // this.render('home');
        // return pause();
        // Router.go('home');
      }
    }

};

Router.onBeforeAction(OnBeforeActions.loginRequired, {
    except: ['login','register']
});

Router.onBeforeAction(OnBeforeActions.alreadyloggedIn, {
    only: ['login']
});
*/

Router.route('/', {
	name: 'home',
	layout: 'layoutTemplate'
});

Router.route('/register', {
	name: 'register',
	layout: 'layoutTemplate'
});

Router.route('/login', {
	name: 'login',
	layout: 'layoutTemplate'
});

Router.route('/list/:_id', {
	layout: 'layoutTemplate',
	name: 'listpage',
    data: function(){
    	console.log("******************** DATA ************************");
        var currentList = this.params._id;
        return Lists.findOne({ _id: currentList });
    }
});
