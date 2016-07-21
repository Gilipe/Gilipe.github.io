module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'build/css/main.css': 'src/scss/main.scss'
				}
			}
		},
		concat: {
			options: {
				separator: "\n\n"
			},
			css: {
				src: ['src/css/vendor/*.css'],
				dest: 'build/css/vendor/plugins.css'
			},
			js: {
				src: ['src/js/vendor/*.js'],
				dest: 'build/js/vendor/plugins.js'
			}
		},
		uglify: {
			my_target: {
				files: {
					'build/js/main.min.js': ['src/js/main.js']
				}
			}
		},		
		watch: {
			css: {
				files: ['src/**/*.scss'],
				tasks: ['sass']
			},
			// vue: {
			// 	files: ['src/js/components/**/*.vue'],
			// 	tasks: ['vueify']
			// },
			js: {
				files: ['src/js/main.js'],
				tasks: ['uglify']
			},
			vendor: {
				files: ['src/css/vendor/*.css', 'src/js/vendor/*.js', 'src/js/partials/*.js'],
				tasks: ['concat']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
};