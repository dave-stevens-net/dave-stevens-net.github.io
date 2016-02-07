var gulp = require('gulp');
var ejs = require('gulp-ejs');
var del = require('del');
var sass = require('gulp-sass');
var bourbonPaths = require('bourbon').includePaths;
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
        .pipe(sass({
            includePaths: bourbonPaths
        }))
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
//*   Copy files
//**************************************************************
var copyComplete = [
    'copy_js',
    'copy_fonts',
    'copy_css',
    'copy_img'
];

gulp.task('copy_js', compileComplete, function() {
    return gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/jquery/dist/jquery.min.map',
            'node_modules/materialize-css/dist/js/materialize.min.js',
            'src/js/**/*.js'
        ]).pipe(gulp.dest('./build/js'));
});

gulp.task('copy_fonts', compileComplete, function() {
    return gulp.src([
            'src/fonts/*'
        ])
        .pipe(gulp.dest('./build/fonts'));
});

gulp.task('copy_css', compileComplete, function() {
    return gulp.src([
            'node_modules/materialize-css/dist/css/materialize.min.css'
        ]).pipe(gulp.dest('./build/css'));
});

gulp.task('copy_img', compileComplete, function() {
    return gulp.src([
            'src/img/*'
        ]).pipe(gulp.dest('./build/img'));
});

//**************************************************************
//*   Run http server
//**************************************************************
gulp.task('connect', copyComplete, function() {
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
gulp.task('default', copyComplete);
gulp.task('dev', ['connect', 'watch']);
