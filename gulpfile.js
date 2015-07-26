var gulp = require('gulp');
var util = require('gulp-util');
var browserify = require('browserify');
var reactify   = require('reactify');
var watchify   = require('watchify');

function errorHandler (err) {
    util.log(util.colors.red('Error'), err.message);
    this.end();
}

gulp.task('build', function() {
    var bundler = watchify(browserify('./src/app.jsx', watchify.args));
    bundler.transform(reactify);
    bundler.bundle()
    .on('error', errorHandler)
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dest'));

});
