module.exports = function(grunt) {
	grunt.initConfig({
		clean: {
			build: ['build']
		},
		copy: {
			main: {
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

			}
		},
		ts: {
			src: {
				tsconfig: './build/src/tsconfig.json',
				src: ["build/src/**/*.ts"]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks("grunt-ts");

	grunt.registerTask("build", ["clean:build", "copy:main", "ts:src"]);
	grunt.registerTask("default", ["build"]);
};
