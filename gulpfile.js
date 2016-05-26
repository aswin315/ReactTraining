const gulp = require('gulp');
const eslint = require('gulp-eslint');
const gulpWebserver = require('gulp-webserver');
const jasmine = require('gulp-jasmine');
const reporters = require('jasmine-reporters');

gulp.task('lint', function(){
    return gulp.src(['**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());

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

gulp.task('run', function(done){
    gulp.src('dist')
        .pipe(gulpWebserver({
            livereload: true,
            open: true
        }));
    done();
});

gulp.task('default', gulp.series('lint', function (done) {
    console.log('Build ok');
    done();
})
);
