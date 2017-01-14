'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var webpack = require('gulp-webpack');
var nodemon = require('gulp-nodemon');


gulp.task('default', ['browser-sync'], function () {
});

// gulp.task('webpack', function () {
//   return gulp.src('src/entry.js')
//     .pipe(webpack( require('./webpack.config.js') ))
//     .pipe(gulp.dest('dist/'));
// });

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:5000",
    files: ["src/**/*.*"],
    port: 7000,
  });
});
gulp.task('nodemon', function (cb) {

  var started = false;

  return nodemon({
    script: 'express.js'
  }).on('start', function () {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true;
    }
  });
});