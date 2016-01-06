Template.lists.helpers({
    'list': function(){
        return Lists.find({}, {sort: {name: 1}});
    },

    'currentUser': function() {
    	return Meteor.userId();
  	},

  	'currentUserobject': function() {
  		return JSON.stringify(Meteor.user());
  	},

  	currentUsername: function() {
  		var u = Meteor.user();
  		return JSON.stringify(u.emails[0].address);
  	}
});
