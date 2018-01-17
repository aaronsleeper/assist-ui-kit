var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concat = require('gulp-concat');

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'pack-vendor-js', 'pack-js'], function () {

    browserSync.init({
        server: './app'
    });

    gulp.watch('app/scss/*.scss', ['sass']);
    gulp.watch('app/scripts/*.js', ['pack-js']);
    gulp.watch('app/*.html').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});

// Compile vendor js
gulp.task('pack-vendor-js', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/popper.js/dist/popper.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/lottie-web/build/player/lottie.min.js'
    ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('app/js'));
});

// Compile custom js into JS & auto-inject into browsers
gulp.task('pack-js', function () {
    return gulp.src([
        'app/scripts/scripts.js'
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);