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
	
	
	grunt.registerMultiTask('typescript-notify', function(){
		
		// Merge the notification configuration together
		// using the standard multitask merge behaviour.
		var taskOptions = this.options();
		
		grunt.event.on('grunt-typescript', function(e){
			
			var notifyKey = 'success';
			if (!e.success){
				notifyKey = 'failed';
			}
			
			var options = util.extend({}, defaults[notifyKey], taskOptions[notifyKey]);
			
			// On Windows double-escape the backslashes so the image path works.
			if (_path.sep == '\\'){
				options.image = options.image.replace(/\\/g, '\\\\');
			}
			console.log('!options=%j', options);
			
			// Send the growl notification.
			notify(options);
		});
		
	});
	
};
