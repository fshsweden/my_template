
  Template.prices.helpers({
    lastErrorMsg: function() {
      return Session.get("errormsg");
    },

    prices: function() {
    	return Prices.find();
    }
  });


Template.prices.events({
    
/*
    'submit form': function(event) {
        event.preventDefault();
        var productSpec = $('[name=product]').val();
       	Session.set("errormsg","");

       	// Meteor.call("setProductSpec", productSpec)
    },
*/

    'submit form': function(event) {

      form={};

      $.each($('#updateform').serializeArray(), function() {
        form[this.name] = this.value;
      });

      console.log(form);

      o = {
        product: form['product'],
        bid: form['bid'],
        ask: form['ask'],
        bidqty: 100,
        askqty: 200,
        last: 110,
        lastqty: 150,
        volume: 250
      };

      /* we need to make a quoted string that works with JSON.parse() later */
      str = JSON.stringify(o);

      Meteor.call("updateProductPrice",  str);
      event.preventDefault(); //prevent page refresh
    }

});

