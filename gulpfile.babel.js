import gulp     from 'gulp';
import requireTree from 'require-tree';
import runSequence from 'run-sequence';

requireTree('./gulp/tasks');

gulp.task('default', ['build']);

gulp.task('deploy', function() {
  runSequence('clean', 'build');
});
