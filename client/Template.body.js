/*  ----------------------------------------------------------------
      BODY HELPERS
      ----------------------------------------------------------------
  */
  Template.body.helpers({
    /*
      tasks
    */
    tasks: function () {
      if (Session.get("hideCompleted")) {
        // If hide completed is checked, filter tasks
        return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
      } 
      else {
        // Otherwise, return all of the tasks
        return Tasks.find({}, {sort: {createdAt: -1}});
      }
    },
    /*
      hideCompleted
    */
    hideCompleted: function () {
      return Session.get("hideCompleted");
    },
    /*
      incompleteCount
    */
    incompleteCount: function () {
      return Tasks.find({checked: {$ne: true}}).count();
    },

    lastErrorMsg: function() {
      return Session.get("errormsg");
    }
  });


  /*  ----------------------------------------------------------------
      BODY EVENTS
      ----------------------------------------------------------------
  */
  Template.body.events({

    /*  NEW TASK
    */
    "submit .new-task": function (event) {
      // This function is called when the new task form is submitted
      var text = event.target.text.value;

      Meteor.call("addTask", text);

      // Clear form
      event.target.text.value = "";

      // Prevent default form submit
      return false;
    },

    /*  "HIDE COMPLETED" CHECKBOX CHANGED!
    */
    "change .hide-completed input": function (event) {
      Session.set("hideCompleted", event.target.checked);
    }
  });

