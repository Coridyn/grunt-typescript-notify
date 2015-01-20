var _path = require('path');

var notify = require('grunt-notify/lib/notify-lib'),
	guessProjectName = require('grunt-notify/lib/util/guessProjectName');

module.exports = function(grunt){
	'use strict';
	
	var options = {
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
		var message = options.success;
		if (!e.success){
			message = options.failed;
		}
		
		notify(message);
	});
};
