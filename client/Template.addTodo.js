Template.addTodo.events({
	
	'submit form': function(event){

 		event.preventDefault();
    	var todoName = $('[name="todoName"]').val();
    	var currentList = this._id;
    
        console.log("Adding TODO " + todoName + " on list " + currentList);

    	Todos.insert({
        	name: todoName,
        	completed: false,
        	createdAt: new Date(),
        	listId: currentList
    	});

    	$('[name="todoName"]').val('');

	}
});
