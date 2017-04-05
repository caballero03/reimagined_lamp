'use strict';

// bb.min.js.gz     bb.rad.min.js.gz   jquery3-min.js.gz  require-min.js.gz  us.min.js.gz
// bb.mn.min.js.gz  jquery2-min.js.gz  jquery.min.js.gz   ui

requirejs.config({
// 	baseUrl: "/js",
	paths: {
		"backbone": "/js/bb.min",
		"jquery": "/js/jquery2-min",
		"jquery-ui": "/js/ui/jquery-ui.min",
		"underscore": "/js/us.min",
		"backbone.radio": "/js/bb.rad.min",
		"marionette": "/js/bb.mn.min",
		"text": "/js/text"
	},
	shim: {
		"jquery": {
			exports: "$",
		},
		
		"jquery-ui": {
			deps: ["jquery"],
			exports: "$.ui",
		},
		
		"underscore": {
			exports: "_"
		},
		
		"backbone": {
			deps: ["jquery", "underscore"],
			exports: "Backbone"
		},
		
		"marionette": {
			deps: ["backbone"],
			exports: "Mn"
		},
	}
});

require(["marionette"], function(Mn){
	console.log("jQuery version: ", $.fn.jquery);
	console.log("underscore identity call: ", _.identity(5));
	console.log("Backbone.history: ", Backbone.history);
	console.log("Marionette Loading...");
});


define(["app"], function(App) {
	App.start();
});

