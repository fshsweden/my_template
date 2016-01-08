
  Template.prices.helpers({
    lastErrorMsg: function() {
      return Session.get("errormsg");
    },

    prices: function() {
    	return Prices.find();
    }
  });


Template.prices.events({
    'submit form': function(event) {
        event.preventDefault();
        var productSpec = $('[name=product]').val();
       	Session.set("errormsg","");

       	// Meteor.call("setProductSpec", productSpec)
    }
});




