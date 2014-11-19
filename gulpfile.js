var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require("gulp-open");

var PORT_NUMBER = 9000;

gulp.task('html', function () {
    gulp.src('./component/*.html')
        .pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src('./component/*.css')
        .pipe(connect.reload());
});

gulp.task("open", function(){
    gulp.src(".index.html")
        .pipe(open("", {
            url: "http://localhost:" + PORT_NUMBER,
            app: "google chrome"
        }));
});

gulp.task('watch', function () {
    gulp.watch(['./component/*.html', './component/*.css'], ['html', 'css']);
});


gulp.task('connect', function() {
    connect.server({
        root: '.',
        port: PORT_NUMBER,
        livereload: true
    });
});

// default task
gulp.task('default', ['open', 'connect', 'watch']);
