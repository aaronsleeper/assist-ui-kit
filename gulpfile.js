var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concat = require('gulp-concat');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {

    browserSync.init({
        server: './app'
    });

    gulp.watch('app/scss/*.scss', ['sass']);
    gulp.watch('app/scripts/*.js', ['scripts']);
    gulp.watch('app/*.html').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});

// Compile js into JS & auto-inject into browsers
gulp.task('scripts', function () {
    return gulp.src('app/js/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);