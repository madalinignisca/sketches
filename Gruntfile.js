module.exports = function(grunt) {
	grunt.initConfig({
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.registerTask('default', ['compass']);
}