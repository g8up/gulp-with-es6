// gulpfile.babel.js

'use strict';

import register from 'babel-core/register';
import babel from 'gulp-babel';
import notify from 'gulp-notify';
import gulp from 'gulp';

gulp.task('babel', () => {
	gulp.src('src/*.es6')
		.pipe(babel())
		.pipe(gulp.dest('lib'))
		.pipe(notify({
			message: 'babel task complete'
		}));
});

gulp.task('default', ['babel']);