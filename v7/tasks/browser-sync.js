'use strict';

import config from '../gulpfile.config';

import gulp from 'gulp';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';

export default () => {

    browserSync.init({
        server: {
            baseDir: process.env.DEST
        },
        files: [
            `${process.env.DEST}/**/*!(.html)`
        ]
    });

}
