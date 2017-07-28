module.exports = function(grunt) {
	grunt.initConfig({
		clean: {
			all: ['build'],
			src: ['build/src'],
			unit: ['build/test/unit']
		},
		copy: {
			src: {
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
			unit: {
				files: [
					{
						expand: true,
						src: 'test/unit/**/*',
						dest: 'build/',
						flatten: false,
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
			unit: {
				tsconfig: './build/test/unit/tsconfig.json',
				src: ["build/test/unit/**/*.ts"]
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

	grunt.registerTask("copy:all", ["copy:src", "copy:unit"]);
	grunt.registerTask("ts:all", ["ts:src", "ts:unit"]);

	grunt.registerTask("build:all", ["clean:all", "copy:all", "ts:all"]);
	grunt.registerTask("build", ["clean:src", "copy:src", "ts:src"]);
	grunt.registerTask("build:unit", ["clean:unit", "copy:unit", "ts:unit"]);
	grunt.registerTask("default", ["build"]);
};
