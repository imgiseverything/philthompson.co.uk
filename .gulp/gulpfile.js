var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload');


// CSS

// Compile Sass files, autoprefix them and then create a separate minified file e.g. filename.min.css
gulp.task('styles', function() {
  return gulp.src('../_sass/**/*.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('../css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('../css/'))
    .pipe(notify({ message: 'Styles task complete' }));
});



// JavaScript
gulp.task('scripts', function() {
  return gulp.src([ 
	  	// Don't concat JQUery (we need that separate) but do get all plugin files
  		'!../js/vendor/jquery-1.11.1.min.js',
  		'../js/plugins/**/*.js',
  		// Ensure main is added first
  		'../js/main.js',
  		// Don't recursively concat files we've just created FFS
  		'!../js/philthompsoncouk.js', 
  		'!../js/philthompsoncouk.min.js',
  		// Get all other top level JS files
  		'../js/*.js'
  		])
    //.pipe(jshint('.jshintrc'))
    //.pipe(jshint.reporter('default'))
    .pipe(concat('philthompsoncouk.js'))
    .pipe(gulp.dest('../js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('../js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});



// Images
gulp.task('images', function() {
  return gulp.src('../images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('../images/'))
    .pipe(notify({ message: 'Images task complete' }));
});



// Default task
gulp.task('default', function() {
    gulp.start('styles', 'scripts', 'images');
});