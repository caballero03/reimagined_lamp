'use strict';

/**
 * Main Application
 *
 *
 */

define('app',
[
	'marionette',
	'../model/chandata',
	'../view/chanview',
	'jquery-ui',
], 

function(Mn, ChannelList, ChanView) {
	
	// Prepare data containers
	const channelList = new ChannelList(
		// Some sample (startup) data
		[
			{id : 0,sensor_addr: 32,valve_pin: 13,faulted: false,soil_moisture: 9999,task_time_left: 0,valve_on: 0}, 
			{id : 1,sensor_addr: 32,valve_pin: 15,faulted: false,soil_moisture: 9999,task_time_left: 0,valve_on: 0}, 
			{id : 2,sensor_addr: 33,valve_pin: 12,faulted: false,soil_moisture: 9999,task_time_left: 0,valve_on: 0}, 
		]
	);

	// Create views
	const myTable = new ChanView({
		collection: channelList,
	});

	// An extend of Application here, make instance instanciate below
	const ChannelApp = Mn.Application.extend({
		region: '#region',
		
		onStart: function( options ) {
			console.log("App starting...");
			
			// Get our first copy of the data from server
			channelList.fetch();
			
			// Start a periodic timer to get new channel data regularly
			setInterval(function() {
				channelList.fetch();
			}, 1000);
			
			this.showView(myTable);
		},
	
	});
	
	const myApp = new ChannelApp();
	
	$("#btn_action").button({
	  icons: {
	    primary: "ui-icon-refresh",
	  }
	}).on("click", function( ev ) {
		channelList.fetch({
		  
		  success: function( collection, response, options ) {
		    console.log("success:", response);
		  },
		  
		  error( collection, response, options ) {
		    console.error("error:", response);
		  }
		});
	});
	
	return myApp;
});