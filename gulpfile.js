'use strict';

var gulp          = require('gulp');  
var gutil         = require('gulp-util');

var webpack       = require('webpack-stream'),
    runSequence   = require('run-sequence'),
    child         = require('child_process');

// Task for updating Jekyll with Gulp workflow
// For newer Jekyll versions, may need to add "bundle exec" to front of this command. Only one word can be used before the others must be put in the array below.
gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['serve',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('webpack', function() {
  return gulp.src('./_javascript/main.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('assets/'));
});

gulp.task('default', function(callback) {
  runSequence('jekyll', 'webpack', callback);
});
