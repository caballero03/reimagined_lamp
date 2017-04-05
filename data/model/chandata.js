 'use strict';

/**
 * Channel data model
 * 
 * Gathers channel data from RESTful server endpoint
 */

define('../model/chandata',
[
	'backbone',
], 

function(Backbone) {
		var ChannelModel = Backbone.Model.extend({
		initialize: function() {
			this.on('all', function (event, model, error) {
				console.log('Model Event:', event);
				//console.error(error);
			});
		}
		
	});
	
	const ChannelList = Backbone.Collection.extend({
		url: '/channels',
		
		model: ChannelModel,

		initialize: function() {
			this.on('all', function (event, model, error) {
				console.log('Collection Event:', event);
				//console.error(model);
				//console.error(error);
			});
		},
		
	});
	
	return ChannelList;
});


