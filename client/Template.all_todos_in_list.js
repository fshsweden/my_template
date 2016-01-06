Template.all_todos_in_list.helpers({
    'todo': function(){
        var currentList = this._id;
        var currentUser = Meteor.userId();
        return Todos.find({ listId: currentList/* , createdBy: currentUser */}, {sort: {createdAt: -1}})
    }
});

