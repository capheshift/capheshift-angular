'use strict';

import config      from '../config';
import changed     from 'gulp-changed';
import gulp        from 'gulp';
import gulpif      from 'gulp-if';
import imagemin    from 'gulp-imagemin';
import browserSync from 'browser-sync';

gulp.task('public', function() {

  return gulp.src(config.public.src)
    .pipe(changed(config.public.dest)) // Ignore unchanged files
    .pipe(gulpif(global.isProd, imagemin())) // Optimize
    .pipe(gulp.dest(config.public.dest))
    .pipe(browserSync.stream({ once: true }));

});