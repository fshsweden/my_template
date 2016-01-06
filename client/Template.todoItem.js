
Template.todoItem.events({

    'click .delete-todo': function(event){
        event.preventDefault();
        var documentId = this._id;
        var confirm = window.confirm("Delete this task?");
        if(confirm){
            Todos.remove({ _id: documentId });
        }
    },

    'keyup [name=todoItem]': function(event){
        var documentId = this._id;
        var todoItem = $(event.target).val();
        Todos.update(
            { _id: documentId }, 
            {$set: { name: todoItem }
        });
        console.log("Task changed to: " + todoItem);
    },

    "click .toggle-checked": function () {
        // Set the checked property to the opposite of its current value
        Todos.update(this._id, {
            $set: {checked: ! this.checked}
        });
    },
    
    "click .delete": function () {
        Todos.remove(this._id);
    }

});

