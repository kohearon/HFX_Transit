var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');

gulp.task('scripts', function(){
  var b = browserify({
    entries: 'index.js',
  });

  return b.bundle()
   .pipe(source('index.js'))
   .pipe(buffer())
   .pipe(uglify())
   .on("error", gutil.log)
   .pipe(gulp.dest('dist/'))
});
