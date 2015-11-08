'use strict';

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', ['clean'], function(cb) {

  global.isProd = false;

  runSequence(['public', 'styles', 'images', 'fonts', 'views', 'browserify'], 'watch', cb);

});