Template.lists.helpers({
    'list': function(){
        return Lists.find({}, {sort: {name: 1}});
    },

    'currentUser': function() {
    	return Meteor.userId();
  	}
});
