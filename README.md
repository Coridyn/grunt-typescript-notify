# grunt-typescript-notify

> Growl notifications for grunt-typescript

Send Growl notifications when [grunt-typescript](https://github.com/k-maru/grunt-typescript) completes a build.

Lets you know if things are good :white_check_mark: or bad :x: without having to check your console (especially useful with grunt-typescript's `watch` option).

See [grunt-notify](https://github.com/dylang/grunt-notify) for the list of supported Growl-like notification apps supported.


## Installing

Clone and link into your project (will be published to __npm__ at a later date).


Once installed, enable it in your `Gruntfile.js`:

```javascript
grunt.loadNpmTasks('grunt-typescript-notify');
```


## Options

These are the default options for the notifications, you can override them in your `Gruntfile.js`:

```javascript
grunt.initConfig({

	'typescript-notify': {
		options: {
			success: {
				title: 'SUCCESS - TypeScript compile',
				message: '<best-guess at project name from package.json>',
				image: '<full path to success image>'
			},
			failed: {
				title: 'FAILED - TypeScript compile',
				message: '<best-guess at project name from package.json>',
				image: '<full path to failed image>'
			}
		}
	}
	
});
```

## Images

Success/failed/error images borrowed from:
https://github.com/karma-runner/karma-growl-reporter

"Thumb" icon from: 
http://www.flaticon.com/