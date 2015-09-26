'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect'); // run local web server
var open = require('gulp-open'); // open a URL in the web browser

var config = {
    port: 9000,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html'
    }
};

// Start local dev server
gulp.task('connect', function() {
   connect.server({
       root: ['dist'],
       port: config.port,
       base: config.devBaseUrl,
       livereload: true
   });
});