'use strict';

const gulp = require('gulp');
const include = require('gulp-include');
const rename = require('gulp-rename');
const sass = require('gulp-sass');


gulp.task('build', function() {
    return gulp.src('./index.html_')
        .pipe(include())
        .pipe(rename('./index.html'))
        .pipe(gulp.dest('./'));
});

gulp.task('compile.scss', function() {
    return gulp.src('./demo_assets/src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./demo_assets/dist'));
});


gulp.task('watch.build', function() {
    gulp.watch('./*.html_', ['build']);
});
