var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del');

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
    
});

// Compress all the image things!
gulp.task('images', function () {
    return gulp.src('jade/img/*')
        .pipe(imagemin({
            progressive: true
        }))
        .on("error", notify.onError("Error:" + errorLog))
        .pipe(gulp.dest(config.assetsPath + '/img'))
        .pipe(notify({
        message: 'Images Optimized!',
        onLast: true
    }))   
});

gulp.task('sass-prod', function () {
  return gulp
    .src(sassInput)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .on("error", notify.onError("Error:" + errorLog))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest(config.assetsPath + 'css'))
    .pipe(notify({
        message: 'Production Sass Processed!',
        onLast: true
    }))
    
});



// Task to watch the things!
gulp.task('watch', function(){
  livereload.listen();
    gulp.watch('sass/**/**/*.scss', ['sass']);
    gulp.watch('jade/img/**/**/*', ['images']);
});

gulp.task('default', ['sass', 'watch']);