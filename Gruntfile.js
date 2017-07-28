module.exports = function(grunt) {
	grunt.initConfig({
		clean: {
			build: ['build']
		},
		copy: {
			all: {
				files:[
					{
						expand: true,
						src: 'src/**/*',
						dest: 'build/',
						flatten: false,
						filter: 'isFile'
					},
					{
						expand: true,
						src: 'src/index.html',
						dest: 'build/',
						filter: 'isFile'
					}
				]

			},
			one: {
				files: []
			}
		},
		ts: {
			src: {
				tsconfig: './build/src/tsconfig.json',
				src: ["build/src/**/*.ts"]
			},
			one: {
				tsconfig: './build/src/tsconfig.json',
				src: []
			}
		},
		watch: {
			ts: {
				files: ['src/**/*.ts'],
				tasks: ['copy:one', 'ts:one'],
				options: {
					spawn: false
				}
			},
			templates: {
				files: ['src/**/*.css', 'src/**/*.html'],
				tasks: ['copy:one'],
				options: {
					spawn: false
				}
			}
		}
	});

	// On watch events set config for copy:one and ts:one to only run for the changed file
	grunt.event.on('watch', function(action, filepath, target) {
		grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
		var newCopyConfig = [
			{
				expand: true,
				src: filepath,
				dest: 'build/',
				flatten: false,
				filter: 'isFile'
			}
		];
		grunt.config('copy.one.files', newCopyConfig);

		if (filepath.slice(-2) == 'ts') {
			grunt.config('ts.one.src', 'build/' + filepath);
		}

	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks("grunt-ts");

	grunt.registerTask("build", ["clean:build", "copy:all", "ts:src"]);
	grunt.registerTask("default", ["build"]);
};
