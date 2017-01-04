import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('clean', shell.task([
  'rm -rf www/*'
]));