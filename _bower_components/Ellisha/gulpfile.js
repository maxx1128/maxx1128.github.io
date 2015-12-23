var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    livereload = require('gulp-livereload'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    jade = require('gulp-jade'),
    notify = require('gulp-notify'),
    sourcemaps = require('gulp-sourcemaps'),
    express = require('express'),
    del = require('del');

var express = require('express')
var app = express()
app.use('/', express.static(__dirname + '/build'))
app.listen(3000)
console.log('Express site on 3000!')

var config = {
    projectPath: 'build/',
    assetsPath: 'build/assets/',
    componentPath: 'components/'
}

// Find errors!
function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}

// Watch the homepage!
gulp.task('homepage', function(){
    gulp.src('index.html')
    .pipe(livereload());
});

// Convert all the SASS to CSS
var sassInput = 'sass/main.scss';
var sassOptions = { 
    outputStyle: 'expanded' 
};
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('sass', function () {
  return gulp
    .src(sassInput)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .on("error", notify.onError("Error:" + errorLog))
    .pipe(sourcemaps.write())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest(config.assetsPath + 'css'))
    .pipe(notify({
        message: 'Sass Processed!',
        onLast: true
    }))
    .pipe(livereload());
});

// Get all the Jade things!
gulp.task('jade', function() {
    var my_locals = {};

    gulp.src('jade/**/**/*.jade')
        .pipe(jade({
            locals: my_locals
        }))
        // .on("error", notify.onError("Error:" + errorLog))
        .pipe(gulp.dest(config.projectPath))
        .pipe(notify({
            message: 'HTML Jaded!',
            onLast: true
        }))
        .pipe(livereload());
});

gulp.task('prod-init', function () {
  return gulp
    .src(sassInput)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .on("error", notify.onError("Error:" + errorLog))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest(config.assetsPath + 'css'));
});

gulp.task('clean', function () {
    return del([
        'build/extends'
    ]);
});

// Task to watch the things!
gulp.task('watch', function(){
  livereload.listen();
    gulp.watch(['sass/**/**/*.scss', 'dist/*.scss'], ['sass']);
    gulp.watch('jade/**/**/*.jade', ['jade']);
    gulp.watch('index.html', ['homepage']);
});

gulp.task('default', ['jade', 'watch']);
gulp.task('prod', ['clean', 'prod-init']);