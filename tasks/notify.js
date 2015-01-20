var _path = require('path');

var util = require('../lib/util'),
	notify = require('grunt-notify/lib/notify-lib'),
	guessProjectName = require('grunt-notify/lib/util/guessProjectName');

module.exports = function(grunt){
	'use strict';
	
	var defaults = {
		success: {
			title: 'SUCCESS - TypeScript compile',
			message: guessProjectName(),
			image: _path.join(__dirname, '..', 'images', 'success.png')
		},
		failed: {
			title: 'FAILED - TypeScript compile',
			message: guessProjectName(),
			image: _path.join(__dirname, '..', 'images', 'failed.png')
		}
	};
	
	
	grunt.event.on('grunt-typescript', function(e){
		var notifyKey = 'success',
			overrides = grunt.config('typescript-notify.options') || {};
		if (!e.success){
			notifyKey = 'failed';
		}
		
		// Merge the notification configuration together.
		// `overrides` take precence (as expected).
		var options = util.extend({}, defaults[notifyKey], overrides[notifyKey]);
		
		// Send the growl notification.
		notify(options);
	});
};
