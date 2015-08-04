var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var gutil = require('gulp-util');
var ngAnnotate = require('gulp-ng-annotate')
var sourcemaps = require('gulp-sourcemaps')


gulp.task('js', function () {
        gulp.src(['ng/module.js', 'ng/**/*.js'])
            .pipe(sourcemaps.init())
            .pipe(concat('app.js'))
            .pipe(ngAnnotate())
            .pipe(uglify().on('error', gutil.log))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('assets'))
});

gulp.task('watch:js', ['js'], function() {
    gulp.watch('ng/**/*.js', ['js'])
})

gulp.task('dev', ['watch:css', 'watch:js', 'dev:server'])


var fs = require('fs')
fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
    require('./gulp/' + task)
})