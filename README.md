# grunt-typescript-notify

> Growl notifications for grunt-typescript

Send Growl notifications when [grunt-typescript](https://github.com/k-maru/grunt-typescript) completes a build.

Lets you know if things are good :white_check_mark: or bad :x: without having to check your console (especially useful with grunt-typescript's `watch` option).

See [grunt-notify](https://github.com/dylang/grunt-notify) for the list of supported Growl-like notification apps supported.


## Installing

```bash
$ npm install grunt-typescript-notify --save-dev
```


NOTE: `grunt-typescript-notify` currently needs a pre-release version of `grunt-typescript` to work properly:

```javascript
// package.json
{
	"dependencies": {
		"grunt-typescript": "git://github.com/Coridyn/grunt-typescript#feat/grunt-raise-success-event"
		// ...
	}
}
```


Once installed, enable it in your `Gruntfile.js`:

```javascript
grunt.loadNpmTasks('grunt-typescript-notify');
```



## Options

These are the default options for the notifications, you can override them in your `Gruntfile.js`.

`grunt-typescript-notify` is configured as a Grunt multitask so you can customise the images/message on a per-task basis.

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
		},
		build: {
			options: {
				// Custom options for this task - e.g. different images.
				// Same properties as above.
			}
		},
		specs: {
			options: {
				// Custom options for this task - e.g. different images.
				// Same properties as above.
			}	
		}
		//...
	}
	
});
```

## Usage

To use `grunt-typescript-notify` simply invoke the task before your usual `grunt-typescript` task.

Here is are two example tasks that add different notifications for TypeScript source and spec builds:

```javascript
grunt.registerTask('ts-build', [
	'typescript-notify:build',
	'typescript:build'
]);

grunt.registerTask('ts-specs', [
	'typescript-notify:specs',
	'typescript:specs'
]);
```

Then run your aggregate task to receive notifications for that build:

```bash
$ grunt ts-build

$ grunt ts-specs
```


## TypeScript watch

You can use [grunt-concurrent](https://github.com/sindresorhus/grunt-concurrent) to run multiple watchers simultaneously. This is really useful with [grunt-typescript's `watch` behaviour](https://github.com/k-maru/grunt-typescript#watch) (which speeds up builds considerably).

This lets you run multiple tasks simultaneously.


```javascript
grunt.registerTask('ts-build-watch', function(){
	// Customise the options for this run.
	grunt.config.set('typesript.build.options.watch', true);
	grunt.task.run('ts-build');
});

grunt.registerTask('ts-specs-watch', function(){
	// Customise the options for this run.
	grunt.config.set('typesript.specs.options.watch', true);
	grunt.task.run('ts-specs');
});

grunt.registerTask('ts-watch-all', [
	'ts-build-watch',
	'ts-specs-watch'
]);
```



## Images

Success/failed/error images borrowed from:
https://github.com/karma-runner/karma-growl-reporter

"Thumb" icon from: 
http://www.flaticon.com/