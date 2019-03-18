"use strict";

let gulp            = require('gulp');
let sass            = require('gulp-sass');
let plumber         = require('gulp-plumber');
let fileinclude     = require('gulp-file-include');
let replace         = require('gulp-replace');
let archiver 		= require('gulp-archiver');
let del             = require('del');
let dateFormat 		= require('dateformat');
let gcmq            = require('gulp-group-css-media-queries');
let browserSync     = require('browser-sync').create();



/*********************************
 Developer tasks
 *********************************/
const PROJECT_NAME = 'web',
date = new Date();

//server
gulp.task('browser-sync', function() {
    browserSync.init({
        //proxy: 'your server',
        server: {
            baseDir: 'dist'
        },
        notify: false
    });
});

//libs compile
gulp.task('libs', function() {
    return gulp.src('app/libs/**/*')
        .pipe(browserSync.stream())
        .pipe(gulp.dest('dist/libs/'))
});

//fonts compile
gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
        .pipe(browserSync.stream())
        .pipe(gulp.dest('dist/fonts/'))
});

//html compile
gulp.task('html', function() {
    return gulp.src('app/*.+(html|php)')
        .pipe(fileinclude())
        .pipe(replace('../images/', 'images/'))
        .on('error', (error) => {
            console.log(error);
        })
        .pipe(browserSync.stream())
        .pipe(gulp.dest('dist/'))
});

//sass compile
gulp.task('sass', function() {
    return gulp.src('app/sass/style.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(browserSync.stream())
        .pipe(gulp.dest('dist/css/'))
});
gulp.task('css', function() {
    return gulp.src('dist/css/style.css')
        .pipe(gcmq())
        .pipe(browserSync.stream())
        .pipe(gulp.dest('dist/css/'))
});

//js compile
gulp.task('scripts', function() {
    return gulp.src('app/js/**/*.js' )
        .pipe(browserSync.stream())
        .pipe(gulp.dest('dist/js'))
});

//img compile
gulp.task('img', function() {
    return gulp.src('app/img/**/*' )
        .pipe(browserSync.stream())
        .pipe(gulp.dest('dist/img'))
});

//watch
gulp.task('watch',['browser-sync', 'sass', 'scripts', 'fonts', 'html', 'libs', 'css', 'img'], function() {
    gulp.watch('app/fonts/**/*',       ['fonts']);
    gulp.watch('app/libs/**/*',        ['libs']);
    gulp.watch('app/**/*.js',          ['scripts']);
    gulp.watch('app/**/*.scss',        ['sass']);
    gulp.watch('app/**/*.+(html|php)', ['html']);
    gulp.watch('app/img/**/*',         ['img']);
    gulp.watch('dist/css/**/*',        ['css']);
});


/*********************************
 Production tasks
 *********************************/


//clear
gulp.task('clear', function () {
    return cache.clearAll();
});

// REMOVE DIST
gulp.task('removeDist', () => del.sync('dist/**'));

//archive
gulp.task('archive', () => {
    del('./*.zip').then(() => {
        return gulp.src('./dist/**')
            .pipe(archiver(PROJECT_NAME+'_' + dateFormat(date, "dd.mm.yy")+'.zip'))
            .pipe(gulp.dest('./'));
    });
});

//archive
gulp.task('archive:full', () => {
    del('./*.zip').then(() => {
        return gulp.src([
            './app',
            './dist',
            './.bowerrc',
            './bower.json',
            './config.rb',
            './gulpfile.js',
            './readme.md',
            './package.json'])
            .pipe(archiver(PROJECT_NAME+'_' + dateFormat(date, "dd.mm.yy")+'.zip'))
            .pipe(gulp.dest('./'));
    });
});

//default
gulp.task('default', ['watch']);
