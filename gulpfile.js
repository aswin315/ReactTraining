const gulp = require('gulp');
const del           = require('del');
const eslint = require('gulp-eslint');
const gulpWebserver = require('gulp-webserver');
const jasmine = require('gulp-jasmine');
const reporters = require('jasmine-reporters');
const webpack = require('gulp-webpack');

gulp.task('lint', function(){
    return gulp.src(['**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());

});

//clean
gulp.task('clean', function() {
    console.log ('removing dist directory');
    return del([
        'dist'
    ]);
});

//copy html files to dist
gulp.task('copy', function() {
    return gulp.src('src/*.html').pipe(gulp.dest('dist'));
});
gulp.task('specs', function (done) {
    gulp.src('spec/*.js')
        .pipe(jasmine({
            reporter: new reporters.TerminalReporter({
                verbosity: 3,
                color: true
            })
        }));
    done();
});

gulp.task('webpack', function(){
    return gulp.src('src/scripts/app.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/scripts/'))
});

gulp.task('run', function(done){
    gulp.src('dist')
        .pipe(gulpWebserver({
            livereload: true,
            open: true
        }));
    done();
});

gulp.task('build', gulp.series('clean',gulp.parallel('webpack','copy'), 'run'), function(done){
    console.log('Builded fine');
    done();
});
gulp.task('default', gulp.series('lint', function (done) {
    console.log('Build ok');
    done();
})
);
