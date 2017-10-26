

module.exports = function(grunt) {

	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Combine JavaScript files into one big file
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: [
					'!../assets/js/vendor/*.js',
					'../assets/js/plugins/*.js',
					'../assets/js/modules/*.js',
					'!../assets/js/<%= pkg.name %>.js',
					'!../assets/js/<%= pkg.name %>.min.js'
				],
				dest: '../assets/js/<%= pkg.name %>.js'
			}
		},

		// Obfuscate and minfiy JavaScript to save filesize
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'../assets/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},

		// Run JavaScrit through JSLint to maintain coding standards
		jslint: {

			client: {
				src: [
					'../assets/js/modules/*.js'
				],
				directives: {
					browser: true,
					devel: true,
					white: true,
					todo: true,
					unparam: true,
					unused: true,
					plusplus: true,
					predef: [
						'debounce',
						'jQuery',
						'smoothScroll',
						'throttle',
						'window'
					]
				},
				options: {
				}
			}
		},

		// Karma
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		},

		// Convert Sass to CSS
		sass: {	 // Task
			dist: {	 // Target
				files: { // Dictionary of files
					'../assets/css/style.css': '../_sass/style.scss'		 // 'destination': 'source'
				}
			}
		},

		// Add browser prefixes to CSS and minify it
		postcss: {
			options: {
				map: false, // don't inline sourcemaps
				processors: [
					require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
					require('cssnano')() // minify the result
				]
			},
			dist: {
				src: '../assets/css/*.css'
			}
		},

		// Optimise Images
		imagemin: {
			png: {
				options: {
					optimizationLevel: 7
				},
				files: [
					{
						// Set to true to enable the following options…
						expand: true,
						// cwd is 'current working directory'
						cwd: '../assets/images/',
						src: ['**/*.png'],
						// Could also match cwd line above. i.e. project-directory/img/
						dest: '../assets/images/',
						ext: '.png'
					}
				]
			},
			jpg: {
				options: {
					progressive: true
				},
				files: [
					{
						// Set to true to enable the following options…
						expand: true,
						// cwd is 'current working directory'
						cwd: '../assets/images/',
						src: ['**/*.jpg'],
						// Could also match cwd. i.e. project-directory/img/
						dest: '../assets/images/',
						ext: '.jpg'
					}
				]
			}
		},

		// SVG Store
		// combine SVGs into a sprite - make sure SVGs are optimised manually
		svgstore: {
			options: {
				prefix : 'symbol-', // This will prefix each <g> ID
			},
			default : {
				files: {
					'../assets/images/svg-sprite.svg': ['../assets/images/icons/*.svg', '../assets/images/logos/*.svg'],
				}
			}
		},

		// WATCH:
		// Whenever a file is changed, run specific tasks
		watch: {
			css: {
				files: [
					'../_sass/**/*.scss',
				],
				tasks: ['sass', 'postcss'],
				options: {
					nospawn: true
				}
			},
			js: {
				files: [
					'../**/*.js',
					// Ignore these
					'!../js/<%= pkg.name %>.js',
					'!../js/<%= pkg.name %>.min.js'
				],
				tasks: ['jslint', 'concat', 'uglify']
			}
		}
	});

	// Load NPM modules
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-jslint');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-phantom');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-svgstore');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Tasks
	grunt.registerTask('default', ['sass', 'postcss', 'concat', 'uglify', 'jslint', 'imagemin', 'svgstore']);
	grunt.registerTask('css', ['sass', 'postcss']);
	grunt.registerTask('js', ['concat', 'uglify', 'jslint']);
	grunt.registerTask('images', ['imagemin', 'svgstore']);

};