/*	-------------------------------------------------------------------------

	-------------------------------------------------------------------------
*/

Template.todos_count.helpers({

    'totalTodos': function(){
        var currentList = this._id;
        return Todos.find({ listId: currentList }).count();
    },

    'completedTodos': function(){
        var currentList = this._id;
        return Todos.find({ listId: currentList, completed: true }).count();
    }
    
});
