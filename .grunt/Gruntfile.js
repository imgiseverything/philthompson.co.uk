

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
					'!../js/vendor/*.js',
					'!../js/plugins/respond.js',
					'../js/plugins/*.js',
					'../js/*.js',
					'!../js/<%= pkg.name %>.js',
					'!../js/<%= pkg.name %>.min.js'
				],
				dest: '../js/<%= pkg.name %>.js'
			}
		},
		
		// Obfuscate and minfiy JavaScript to save filesize
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'../js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},
		
		// Run JavaScrit through JSLint to maintain coding standards
		jslint: {
			
			client: {
				src: [
					'../js/main.js'
				],
				directives: {
					browser: true,
					devel: true,
					white: true,
					todo: true,
					unparam: true,
					unused: true,
					predef: [
						'jQuery',
						'smoothScroll'
					]
				},
				options: {
				}
			}
			
		},
		
		// Convert Sass to CSS
		sass: {   // Task
	        dist: {   // Target
	            files: { // Dictionary of files
	                '../css/style.css': '../_sass/style.scss'     // 'destination': 'source'
	            }
	        }
	    },
		
		
		// Minfiy CSS to save filesize
		cssmin: {
		  combine: {
		    files: {
		      '../css/style.min.css': ['../css/style.css']
		    }
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
		          cwd: 'images/',
		          src: ['**/*.png'],
		          // Could also match cwd line above. i.e. project-directory/img/
		          dest: 'images/',
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
		          cwd: '../images/',
		          src: ['**/*.jpg'],
		          // Could also match cwd. i.e. project-directory/img/
		          dest: '../images/',
		          ext: '.jpg'
		        }
		      ]
		    }
		},
		
		// Optimise SVGs
		svgmin: {
	        options: {
	            plugins: [
	                {
	                    removeViewBox: false
	                }, 
	                {
	                    removeUselessStrokeAndFill: false
	                }
	            ]
	        },
			dist: {
				files: [
					{
						// Set to true to enable the following options…
						expand: true,
						// cwd is 'current working directory'
						cwd: '../images/',
						src: ['*.svg', '**/*.svg'],
						// Could also match cwd. i.e. project-directory/img/
						dest: '../images/',
						ext: '.svg'
					}
				]
	    }
	  },
		
		// Add browser prefixes to CSS
		autoprefixer: {
		    options: {
		    	browsers: ['last 2 versions', 'ie 9']
		    },
		    // prefix all files
		    multiple_files: {
				expand: true,
				flatten: true,
				src: '../css/*.css',
				dest: '../css/'
		    }
		},	
		
		// WATCH:
		// Whenever a file is changed, run specific tasks
		watch: {
			css: {
				files: [
					'../_sass/**/*.scss',
				],
				tasks: ['sass', 'autoprefixer', 'cssmin'],
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
	
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-jslint');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-svgmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'autoprefix', 'cssmin', 'concat', 'uglify', 'jslint', 'imagemin', 'svgmin']);
	grunt.registerTask('css', ['sass', 'autoprefixer', 'cssmin']);
	grunt.registerTask('js', ['concat', 'uglify', 'jslint']);
	grunt.registerTask('images', ['imagemin', 'svgmin']);

};