'use strict';

import config from '../gulpfile.config';

import gulp from 'gulp';
import gulpif from 'gulp-if';
import notify from 'gulp-notify';

import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';

export default () => {
    return gulp.src([
            `./${config.paths.source}/js/libraries/**/*.js`,
            `./${config.paths.source}/js/plugins/**/*.js`,
            `./${config.paths.source}/js/website/**/*.js`,
        ])
        .pipe(gulpif( process.env.BUILD === 'false',
            sourcemaps.init()
        ))
        .pipe(babel({
            presets: ['es2015']
        }))
        .on('error', notify.onError(function (error) {
            return {
                icon: false,
                title: `JS ERROR ON LINE ${error.loc.line}`,
                message: error.message.replace(/(.\.js:)( .)/,"$1\n$2")
            };
        }))
        .pipe(gulpif( process.env.BUILD === 'true',
            uglify()
        ))
        .pipe(gulpif( process.env.BUILD === 'false',
            sourcemaps.write()
        ))
        .pipe(gulp.dest(`${process.env.DEST}/assets/js`));
}
