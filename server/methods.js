/*  ----------------------------------------------------------------
    METHODS
    ----------------------------------------------------------------
*/
Meteor.methods({

  sample: function() {
    "ok ! see!"
  },

  addTask: function (text) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    Tasks.insert({
      text: text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },

  deleteTask: function (taskId) {
    var task = Tasks.findOne(taskId);
    if (task.private && task.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error("not-authorized");
    }
    Tasks.remove(taskId);
  },

  setChecked: function (taskId, setChecked) {
    var task = Tasks.findOne(taskId);
    if (task.private && task.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can check it off
      throw new Meteor.Error("not-authorized");
    }
    Tasks.update(taskId, { $set: { checked: setChecked} });
  },

  setPrivate: function (taskId, setToPrivate) {
    var task = Tasks.findOne(taskId);
    // Make sure only the task owner can make a task private
    if (task.owner !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    Tasks.update(taskId, { $set: { private: setToPrivate } });
  },

  updateProductPrice: function(product, fields) {

    console.log("arg1:" + JSON.stringify(product));
    // console.log("arg2:" + JSON.stringify(fields));

    // var o = JSON.parse("{\"askqty\":\"4\",\"product\":\"ABBN\",\"lastqty\":\"6\",\"last\":\"5\",\"bidqty\":\"77\",\"ask\":\"3\",\"bid\":\"2\"}");
    var o = JSON.parse(product);
    console.log(JSON.stringify(o));

    Prices.upsert({product: o.product}, {$set: o});
  }

});
