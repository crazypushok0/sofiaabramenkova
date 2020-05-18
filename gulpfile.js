let gulp = require('gulp'),
     sass = require('gulp-sass'),
     rename =  require('gulp-rename'),
     browserSync = require('browser-sync'),
     autoprefixer = require('gulp-autoprefixer'),
     concat = require('gulp-concat'),
     uglify = require('gulp-uglify'),
     cssmin = require('gulp-cssmin');

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(rename({suffix: '.min'}))
            .pipe(autoprefixer({
                overrideBrowserslis: ['last 8 versions']
            }))
            .pipe(gulp.dest('app/css'))
            .pipe(browserSync.reload({stream: true}))
});
gulp.task('style', function(){
    return gulp.src('app/scss/**/*.scss')
            .pipe(sass({outputStyle: 'expanded'}))
            .pipe(autoprefixer({
                overrideBrowserslis: ['last 8 versions']
            }))
            .pipe(gulp.dest('app/css'))
            .pipe(browserSync.reload({stream: true}))
});
gulp.task('main', function(){
    return gulp.src('app/js/main.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
});
gulp.task('script', function(){
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
});

gulp.task('libs', function(){
    return gulp.src([
        'node_modules/normalize.css/normalize.css',

    ])
    .pipe(concat('libs.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('app/css'))
});

gulp.task('html', function(){
    return gulp.src('app/*.html')
            .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function(){
    return gulp.src('app/js/*.js')
            .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.parallel('sass', 'style'))
    gulp.watch('app/*.html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('js'))
});

gulp.task('default', gulp.parallel('sass', 'style', 'script', 'main', 'libs', 'watch', 'browser-sync'))