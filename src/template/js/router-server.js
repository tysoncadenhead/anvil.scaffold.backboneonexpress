/*jslint node: true, sloppy: true */
/*global Backbone, app, define */

define([
	'underscore',
	'backbone'
], function (_, Backbone) {

	app.router = Backbone.Router.extend({

		crud: [
			
		],

		routes: {
			'': 'pages#home'
		}

	});

});