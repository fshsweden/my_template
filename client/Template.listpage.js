Template.listpage.helpers({
	todos: function() {
		return Todos.find({});
	}
});