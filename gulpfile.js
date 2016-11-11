var gulp = require("gulp");                     //运行任务
var connect = require("gulp-connect");          //运行livereoad 服务
var browserify = require("gulp-browserify");    //
//var concat = require("gulp-concat");            //文件拼接
var port = process.env.port || 5000;            //端口

var babel = require("gulp-babel");

gulp.task("compile", function () {
    gulp.src("./app/js/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("./temp/js"))
        .pipe(browserify({ transform : 'reactify' }))
        .pipe(gulp.dest('./dist/js'));
});

//live reload
gulp.task('connect', function () {
    connect.server({
        root: './',
        port: port,
        livereload: true
    })
});

//reload js
gulp.task('js', function () {
    gulp.src('./dist/**/*.js')
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src('./dist/**/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('./dist/**/*.js', ['js']);
    gulp.watch('./dist/**/*.html', ['html']);
    gulp.watch('./app/**/*.js', ['compile']);
});

//commmand

gulp.task('run', ['compile', 'connect', 'watch']);