var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var bableify = require('babelify')
var uglify = require('gulp-uglify');

gulp.task('scripts', function(){
  var b = browserify({
    entries: 'index.jsx',
  });

  return b.transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('index.jsx'))
    .pipe(buffer())
    .pipe(uglify())
    .on("error", gutil.log)
    .pipe(gulp.dest('dist/'))
});
