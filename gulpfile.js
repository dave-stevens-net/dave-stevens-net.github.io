var gulp = require('gulp');
var ejs = require('gulp-ejs');
var del = require('del');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var connect = require('gulp-connect');

//**************************************************************
//*   Clean out build directory
//**************************************************************
gulp.task('clean', function(cb) {
    return del([
        'build/**/*.js',
        'build/**/*.css',
        'build/fonts/*',
        'build/img/*',
    ], cb);
});

//**************************************************************
//*   Compile
//**************************************************************
var compileComplete = [
    'compile_html',
    'compile_sass',
    'lint'
];

gulp.task('compile_html', ['clean'], function() {
    return gulp.src('src/*.html')
        .pipe(ejs())
        .pipe(gulp.dest('./'));
});

gulp.task('compile_sass', ['clean'], function () {
    return gulp.src([
            './src/sass/dave-stevens.scss'
        ])
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('lint', ['clean'], function() {
    return gulp.src([
        'src/**/*.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

//**************************************************************
//*   Run http server
//**************************************************************
gulp.task('connect', compileComplete, function() {
    connect.server({
        livereload: true
    });
});

//**************************************************************
//*   Watch for html and sass changes. Rebuilds if changes detected
//**************************************************************
gulp.task('watch', ['connect'], function () {
    gulp.watch([
        'src/**/*.html',
        'src/**/*.ejs',
        'src/**/*.scss',
        'src/**/*.js',
    ], ['default']);
});

//**************************************************************
//*   Core Gulp Commands
//*   gulp - (default)
//**************************************************************
gulp.task('default', compileComplete);
gulp.task('dev', ['connect', 'watch']);
