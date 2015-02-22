var gulp=require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csscomb = require('gulp-csscomb');
var spritesmith = require('gulp.spritesmith');
var styledocco = require('gulp-styledocco');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');

gulp.task('styledocco', function () {
  gulp.src('dist/*.css')
    .pipe(styledocco({
      out: 'docs',
      name: 'styleguide'
    }));
});

gulp.task('srccss',function(){
  gulp.src('src/*.css')
  .pipe(csscomb())
  .pipe(autoprefixer("last 2 version", "ie 8", "ie 7"))
  .pipe(gulp.dest('./dist'));
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
  // .pipe(plumber)
  .pipe(sass())
  .pipe(autoprefixer("last 2 version", "ie 8", "ie 7"))
  .pipe(csscomb())
  .pipe(gulp.dest('./dist'))
  .pipe(connect.reload());
});

gulp.task('copy', function(){
  gulp.src('*.html')
    .pipe(gulp.dest('./livecoding'))
    .pipe(connect.reload());
});
gulp.task('js', function(){
  gulp.src('dist/*.js')
    .pipe(gulp.dest('./livecoding'))
    .pipe(connect.reload());
});

gulp.task('serve', function(){
  connect.server({
    livereload: true
  });
});

gulp.task('watch', ['sass', 'copy', 'js'], function(){
  gulp.watch('src/*.scss', ['sass']);
  gulp.watch('dist/*.js', ['js']);
  gulp.watch('*.html', ['copy']);
});

gulp.task('live',['watch','serve'])

gulp.task('sprite', function () {
    var spriteData = gulp.src('src/sprite/*')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.scss'
        }));
    spriteData.img.pipe(gulp.dest('./dist/images'));
    spriteData.css.pipe(gulp.dest('sass'));
});