/*global define */

define(function () {

	'use strict';

	return Backbone.Model.extend({

		urlRoot: '/json/{{name}}',

		name: '{{name}}',

		defaults: {{schemaDefaults}},

		schema: {{schema}}

	});

});