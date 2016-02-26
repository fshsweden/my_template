// Only publish tasks that are public or belong to the current user
Meteor.publish("servers", function () {
	return Servers.find({});
});
