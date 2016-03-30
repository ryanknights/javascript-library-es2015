const gulp       = require('gulp'),
	  watch      = require('gulp-watch'),
	  uglify     = require('gulp-uglify'),
	  jshint     = require('gulp-jshint'),
	  browserify = require('browserify'),
	  babelify   = require('babelify');
	  source     = require('vinyl-source-stream'),
	  buffer     = require('vinyl-buffer');

gulp.task('library-build', function ()
{
	return browserify('./src/library.js')
		.transform('babelify', {loose : 'all', plugins : ['object-assign']})
		.bundle()
		.pipe(source('library.min.js'))
		.pipe(buffer())
	    .pipe(uglify())
		.pipe(gulp.dest('./dist'));
});

gulp.task('watch', function ()
{
	gulp.watch(['./src/**/*.js'], ['library-build']);
});