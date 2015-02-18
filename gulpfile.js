var gulp=require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csscomb = require('gulp-csscomb');
var spritesmith = require('gulp.spritesmith');
var styledocco = require('gulp-styledocco');

gulp.task('styledocco', function () {
  gulp.src('dist/*.css')
    .pipe(styledocco({
      out: 'docs',
      name: 'styleguide'
    }));
});
gulp.task('styles', function() {
  return gulp.src('src/styles/main.css')
    .pipe(csscomb())
    .pipe(gulp.dest('./build'));
});

gulp.task('default', function () {
  gulp.src('src/*.scss')
  .pipe(sass())
  .pipe(autoprefixer("last 2 version", "ie 8", "ie 7"))
  .pipe(csscomb())
  .pipe(gulp.dest('./dist'));
});
gulp.task('sass', function () {
  gulp.src('src/*.scss')
  .pipe(sass())
  .pipe(autoprefixer("last 2 version", "ie 8", "ie 7"))
  .pipe(csscomb())
  .pipe(gulp.dest('./dist'));
});

gulp.task('sprite', function () {
    var spriteData = gulp.src('src/sprite/*')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.scss'
        }));
    spriteData.img.pipe(gulp.dest('./dist/images'));
    spriteData.css.pipe(gulp.dest('sass'));
});