var gulp = require('gulp');
var exec = require('child_process').exec;

var settings = require('../settings').vagrant;

function vmCmd(cmds) {
	return settings.cmd + '"'+cmds.join(';')+'"' + settings.cmd_postfix;
}

function execOutput(cb, err, stdout, stderr) {
	console.log(stdout);
	if(stderr) console.log(stderr);
	cb(err);
}

gulp.task('vagrant:db:dump', function(cb) {
	exec(vmCmd([
		'rm /vagrant/dump.sql',
		'mysqldump -utypo3 -ptypo3 typo3 > /vagrant/dump.sql'
	]), function(err, stdout, stderr) {
		execOutput(cb, err, stdout, stderr);
	});
});

gulp.task('vagrant:pull:stage2local', function(cb) {
	exec(vmCmd(['/vagrant/stage2local.sh']), function (err, stdout, stderr) {
		execOutput(cb, err, stdout, stderr);
	});
});

gulp.task('vagrant:typo3:flush-all', function(cb) {
	exec(vmCmd(['/vagrant/public/typo3cms cache:flush']), function (err, stdout, stderr) {
		execOutput(cb, err, stdout, stderr);
	});
});

gulp.task('vagrant:typo3:flush-pages', function(cb) {
	exec(vmCmd(['/vagrant/public/typo3cms cache:flushgroups --groups=pages']), function (err, stdout, stderr) {
		execOutput(cb, err, stdout, stderr);
	});
});