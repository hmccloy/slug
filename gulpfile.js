var gulp = require('gulp');
var argv = require('yargs').argv;
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var include = require('gulp-include');

var settings = require('./gulp/settings');

gulp.task('default', ['styles']);

gulp.task('watch', function () {
	if (!argv.proxy) throw new Error('Please pass a domain or ip with --proxy=...');

	browserSync.init({
		proxy: argv.proxy
	});

	gulp.watch(settings.dir.extension + settings.dir.private + settings.dir.scss + '/**/*.scss', ['styles']);
});

gulp.task('styles', function () {
	return gulp.src([
		settings.dir.extension + settings.dir.private + settings.dir.scss + '/*.scss'
		])
		.pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(gulp.dest(settings.dir.extension + settings.dir.public + settings.dir.css))
		.pipe(browserSync.stream());
});
