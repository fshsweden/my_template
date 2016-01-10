Meteor.startup(function() {
	if (Prices.find().fetch() == 0) {
		Prices.insert({product:"NQ6C", bidqty:100, bid:4378.45, ask:4379.25, askqty: 23, last:4379.50, lastqty:1, volume:1234, time:"10:00:01"});
		Prices.insert({product:"NQ6D", bidqty:100, bid:4378.45, ask:4379.25, askqty: 23, last:4379.50, lastqty:1, volume:1234, time:"10:00:01"});
		Prices.insert({product:"NQ6E", bidqty:100, bid:4378.45, ask:4379.25, askqty: 23, last:4379.50, lastqty:1, volume:1234, time:"10:00:01"});
		Prices.insert({product:"NQ6F", bidqty:100, bid:4378.45, ask:4379.25, askqty: 23, last:4379.50, lastqty:1, volume:1234, time:"10:00:01"});
		Prices.insert({product:"NQ6G", bidqty:100, bid:4378.45, ask:4379.25, askqty: 23, last:4379.50, lastqty:1, volume:1234, time:"10:00:01"});
		Prices.insert({product:"NQ6H", bidqty:100, bid:4378.45, ask:4379.25, askqty: 23, last:4379.50, lastqty:1, volume:1234, time:"10:00:01"});
	}
});