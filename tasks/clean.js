'use strict';

import config from '../gulpfile.config';

import gulp from 'gulp';

import clean from 'gulp-clean';

export default () => {

    return gulp.src( process.env.DEST, {read: false} )
        .pipe(clean());
}
